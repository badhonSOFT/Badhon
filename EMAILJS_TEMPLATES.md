# EmailJS Templates Setup

## Service ID: service_2kgela9 ✅

## Create 2 Templates:

### 1. Admin Template (ID: template_admin)
**To:** badhonroy172@gmail.com
**Subject:** Portfolio Contact: {{subject}}
**Content:**
```
New Contact Form Submission

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

### 2. Customer Template (ID: template_customer)
**To:** {{to_email}}
**Subject:** Thank you for contacting Badhon Kumar Roy
**Content:**
```
Dear {{to_name}},

Thank you for reaching out! I have received your message and will get back to you within 24 hours.

Your message details:
Subject: {{subject}}
Message: {{message}}

Best regards,
Badhon Kumar Roy
Software Engineer
Email: badhonroy172@gmail.com
Phone: 01783147171
WhatsApp: https://wa.me/8801783147171
```

## Next Steps:
1. Create these 2 templates in EmailJS
2. Get your Public Key from EmailJS
3. Replace 'YOUR_PUBLIC_KEY' in Contact.tsx