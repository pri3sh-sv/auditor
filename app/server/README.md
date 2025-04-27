# Email Service Configuration

This document provides instructions for setting up and configuring the email service for sending automated responses to user inquiries.

## Environment Variables

Create a `.env` file in the root of your project with the following SMTP configuration:

```
# SMTP Email Settings
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM_NAME=eAuditor Office
```

## Setting Up Gmail for SMTP

If you're using Gmail as your SMTP provider:

1. Enable 2-factor authentication on your Google account
2. Generate an "App Password" from your Google account security settings
3. Use this App Password in place of your regular password in the EMAIL_PASSWORD environment variable

## How the Email System Works

1. When a user submits their email through the inquiry form, a POST request is sent to `/api/send-inquiry`
2. The API route processes the request and sends an automated response using Nodemailer
3. The email template in `app/server/templates/inquiry-response.html` is used to format the email
4. The response includes placeholders that are dynamically replaced with user data

## Customizing Email Templates

You can modify the HTML template in `app/server/templates/inquiry-response.html` to change the content and styling of the automated response emails.

## Testing the Email Service

To test if your email configuration is working:

1. Set up your environment variables
2. Run the application
3. Submit the form on the landing page with a valid email address
4. Check the console for success/error messages
5. Verify that the email is received at the address you submitted

## Troubleshooting

If emails are not being sent:

1. Check your SMTP configuration
2. Ensure your email provider allows SMTP access
3. Verify that your application has internet access
4. Check the server logs for error messages 