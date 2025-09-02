# EmailJS Setup (No Server Required)

## Quick Setup:

1. **Go to [EmailJS.com](https://www.emailjs.com/)**
2. **Create account and get:**
   - Service ID
   - Template ID (for admin email)
   - Customer Template ID (for confirmation)
   - Public Key

3. **Replace in Contact.tsx:**
   ```javascript
   'YOUR_SERVICE_ID' → your actual service ID
   'YOUR_TEMPLATE_ID' → admin template ID  
   'YOUR_CUSTOMER_TEMPLATE_ID' → customer template ID
   'YOUR_PUBLIC_KEY' → your public key
   ```

## Email Templates:

**Admin Template:**
- To: badhonroy172@gmail.com
- Subject: Portfolio Contact: {{subject}}
- Body: Name: {{from_name}}, Email: {{from_email}}, Message: {{message}}

**Customer Template:**
- To: {{to_email}}
- Subject: Thank you for contacting Badhon Kumar Roy
- Body: Dear {{to_name}}, Thank you for your message. I'll respond within 24 hours.

## Result:
✅ Sends emails to both you and customer
✅ No server required
✅ Works from browser directly