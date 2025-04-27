import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import htmlToJson from 'html-to-json';

// Email configuration
interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  tls?: {
    rejectUnauthorized?: boolean;
  };
}

// Sender information
const COMPANY_NAME = 'S Saranya & Co';
const EMAIL_ADDRESS = 'sscofca@gmail.com';
const REPLY_TO_EMAIL = 'sscofca@gmail.com';

// Gmail SMTP configuration with App Password
const emailConfig: EmailConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // TLS
  auth: {
    user: EMAIL_ADDRESS,
    pass: 'ijds couz zvzc enza' // App password
  },
  tls: {
    rejectUnauthorized: false // For some environments with certificate issues
  }
};

// Create transporter
const transporter = nodemailer.createTransport(emailConfig);

// Email data interface
export interface EmailData {
  to: string;
  subject: string;
  templateName: string;
  templateData: Record<string, any>;
  replyTo?: string;
  attachments?: Array<{
    filename: string;
    path: string;
    contentType?: string;
  }>;
}

/**
 * Read HTML template and replace placeholders with data
 */
const readTemplate = (templateName: string, templateData: Record<string, any>): string => {
  const templatePath = path.join(process.cwd(), 'app', 'server', 'templates', `${templateName}.html`);
  let template = fs.readFileSync(templatePath, 'utf8');
  
  // Replace all placeholders in format {{key}} with corresponding values
  Object.keys(templateData).forEach(key => {
    const placeholder = new RegExp(`{{${key}}}`, 'g');
    template = template.replace(placeholder, templateData[key]);
  });
  
  return template;
};

/**
 * Convert HTML to plain text format using html-to-json
 * Extracts all text content while preserving some structure
 */
const convertHtmlToText = async (html: string): Promise<string> => {
  try {
    // Extract all text content from HTML elements
    const jsonResult = await htmlToJson.parse(html, {
      texts: function($doc: any) {
        return $doc.find('p, h1, h2, h3, h4, h5, h6, a, li, td, div').map(function(_i: number, el: any) {
          const $el = $doc.find(el);
          // Handle special cases for different elements
          if ($el.is('a')) {
            const href = $el.attr('href');
            return `${$el.text().trim()}${href ? ` (${href})` : ''}`;
          }
          // Return trimmed text content
          return $el.text().trim();
        }).get().filter((text: string) => text.length > 0); // Filter out empty strings
      }
    });

    // Process the extracted text to create a structured plain text version
    let result = '';
    let lastWasHeading = false;
    
    jsonResult.texts.forEach((text: string) => {
      // Skip duplicate consecutive text (can happen with nested elements)
      if (result.includes(text)) {
        return;
      }
      
      // Add extra line breaks for headings
      if (text.length < 80 && text === text.replace(/\s+/g, ' ').trim() && 
          (text === text.toUpperCase() || /^[A-Z]/.test(text) && text.endsWith('?'))) {
        if (!lastWasHeading) {
          result += '\n\n';
        }
        result += text.toUpperCase() + '\n\n';
        lastWasHeading = true;
      } else {
        // Regular paragraphs
        result += text + '\n\n';
        lastWasHeading = false;
      }
    });
    
    // Clean up extra line breaks and whitespace
    return result
      .replace(/\n{3,}/g, '\n\n')
      .replace(/\s+\n/g, '\n')
      .trim();
    
  } catch (error) {
    console.error('Error converting HTML to text:', error);
    // Fallback conversion if html-to-json fails
    return html
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }
};

/**
 * Send email with HTML template
 */
export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    const { to, subject, templateName, templateData, replyTo, attachments } = emailData;
    
    // Get HTML content from template
    const htmlContent = readTemplate(templateName, templateData);
    
    // Convert HTML to plain text
    const textContent = await convertHtmlToText(htmlContent);
    
    // Generate a unique message ID
    const messageId = `${Date.now()}.${Math.random().toString(36).substring(2)}@${EMAIL_ADDRESS.split('@')[1]}`;
    
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${COMPANY_NAME}" <${EMAIL_ADDRESS}>`,
      to,
      subject,
      text: textContent, // Plain text version
      html: htmlContent,
      replyTo: replyTo || REPLY_TO_EMAIL,
      messageId,
      headers: {
        'X-Priority': '3', // Normal priority
        'X-MSMail-Priority': 'Normal',
        'Importance': 'Normal',
        'List-Unsubscribe': `<mailto:${EMAIL_ADDRESS}?subject=Unsubscribe>`,
        'X-Entity-Ref-ID': messageId,
        'Content-Type': 'text/html; charset=UTF-8'
      },
      attachments: attachments || []
    });
    
    console.log('Message sent: %s', info.messageId);
    // Log first 100 chars of text content for debugging
    console.log('Text content preview:', textContent.substring(0, 100) + '...');
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

/**
 * Send inquiry response email
 */
export const sendInquiryResponse = async (email: string, name: string = 'User'): Promise<boolean> => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return sendEmail({
    to: email,
    subject: 'Thank You for Your Inquiry - S Saranya & Co',
    templateName: 'inquiry-response',
    templateData: {
      name,
      currentYear: currentDate.getFullYear(),
      currentDate: formattedDate,
      companyName: COMPANY_NAME,
      supportEmail: EMAIL_ADDRESS
    }
  });
};

// Verify SMTP connection
export const verifyConnection = async (): Promise<boolean> => {
  try {
    await transporter.verify();
    console.log('SMTP connection verified successfully');
    return true;
  } catch (error) {
    console.error('SMTP connection verification failed:', error);
    return false;
  }
}; 