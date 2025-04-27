import { type ActionFunction } from "react-router";
import { sendInquiryResponse, verifyConnection } from "~/server/utils/mailer";

interface InquiryData {
  email: string;
  name?: string;
  message?: string;
  subject?: string;
}

export const action: ActionFunction = async ({ request }) => {
  try {
    // Only accept POST requests
    if (request.method !== "POST") {
      return Response.json(
        { success: false, message: "Method not allowed" },
        { status: 405 }
      );
    }

    // Parse the form data
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const name = formData.get("name") as string || undefined;
    const message = formData.get("message") as string || undefined;
    const subject = formData.get("subject") as string || undefined;

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return Response.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Prepare inquiry data
    const inquiryData: InquiryData = {
      email,
      ...(name && { name }),
      ...(message && { message }),
      ...(subject && { subject })
    };

    // Log inquiry for backend processing (you might want to save this to a database)
    console.log("New inquiry received:", inquiryData);

    // Verify SMTP connection first
    const isConnectionValid = await verifyConnection();
    
    if (!isConnectionValid) {
      console.error("Could not connect to SMTP server. Please check your credentials.");
      return Response.json(
        { success: false, message: "Unable to connect to email server. Our team has been notified." },
        { status: 500 }
      );
    }

    // Send automated response email
    const emailSent = await sendInquiryResponse(email, name);

    if (!emailSent) {
      return Response.json(
        { success: false, message: "Failed to send email response. Please try again later." },
        { status: 500 }
      );
    }

    // Return success response
    return Response.json({ 
      success: true, 
      message: "Thank you for your inquiry. We'll get back to you soon!"
    });

  } catch (error) {
    console.error("Error processing inquiry:", error);
    
    // More descriptive error based on type
    const errorMessage = error instanceof Error 
      ? `Error: ${error.message}` 
      : "An unexpected error occurred while processing your inquiry";
    
    console.error(errorMessage);
    
    return Response.json(
      { 
        success: false, 
        message: "We couldn't process your request. Our team has been notified."
      },
      { status: 500 }
    );
  }
}; 