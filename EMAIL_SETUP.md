# Email Setup Guide

## Issue Fixed
The contact form now sends emails to both:
1. **badhonroy172@gmail.com** (admin notification)
2. **Customer's email** (confirmation email)

## Setup Options

### Option 1: Node.js Server (Recommended)

1. **Install dependencies:**
   ```bash
   cd server
   npm install
   ```

2. **Setup Gmail App Password:**
   - Go to Google Account settings
   - Enable 2-Factor Authentication
   - Generate App Password for "Mail"
   - Replace `your-app-password` in `server/contact.js` with the generated password

3. **Start the email server:**
   ```bash
   npm start
   ```

4. **Update frontend if needed:**
   - Contact form now points to `http://localhost:3001/api/contact`
   - Make sure the server is running when testing

### Option 2: PHP Server (Current)

The PHP version has been updated to send emails to both admin and customer, but requires:
- Proper SMTP configuration on your web server
- Working `mail()` function in PHP

## Testing

1. Start the Node.js server: `cd server && npm start`
2. Fill out the contact form on your website
3. Check both emails:
   - Admin email: badhonroy172@gmail.com
   - Customer confirmation email

## Production Deployment

For production, consider:
- Using environment variables for email credentials
- Deploying the Node.js server to a cloud service
- Using a dedicated email service like SendGrid or AWS SES