# EmailJS Gmail Fix

## Issue: Gmail API scope error

## Solution: Use SMTP instead

1. **In EmailJS Dashboard:**
   - Delete current Gmail service
   - Add new service → Choose "Gmail" → Select "SMTP" option
   - Use these settings:
     - SMTP Server: smtp.gmail.com
     - Port: 587
     - Username: badhonroy172@gmail.com
     - Password: [Your Gmail App Password]

2. **Get Gmail App Password:**
   - Gmail → Settings → Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Use this password in EmailJS

3. **Test the service in EmailJS dashboard**

This bypasses the API scope issue by using direct SMTP connection.