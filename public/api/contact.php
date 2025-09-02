<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input || !isset($input['name'], $input['email'], $input['subject'], $input['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

$name = htmlspecialchars($input['name']);
$email = filter_var($input['email'], FILTER_VALIDATE_EMAIL);
$subject = htmlspecialchars($input['subject']);
$message = htmlspecialchars($input['message']);

if (!$email) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Function to send email with better error handling
function sendEmail($to, $subject, $body, $headers) {
    $result = mail($to, $subject, $body, $headers);
    if (!$result) {
        error_log("Mail failed to: $to, Subject: $subject");
    }
    return $result;
}

// Email to Badhon
$to_admin = 'badhonroy172@gmail.com';
$admin_subject = "Portfolio Contact: $subject";
$admin_body = "New Contact Form Submission\n\n";
$admin_body .= "Name: $name\n";
$admin_body .= "Email: $email\n";
$admin_body .= "Subject: $subject\n";
$admin_body .= "Message:\n$message\n";

$admin_headers = "From: noreply@badhonroy.dev\r\n";
$admin_headers .= "Reply-To: $email\r\n";
$admin_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$admin_headers .= "X-Mailer: PHP/" . phpversion();

// Confirmation email to customer
$customer_subject = "Thank you for contacting Badhon Kumar Roy";
$customer_body = "Dear $name,\n\n";
$customer_body .= "Thank you for reaching out! I have received your message and will get back to you within 24 hours.\n\n";
$customer_body .= "Your message details:\n";
$customer_body .= "Subject: $subject\n";
$customer_body .= "Message: $message\n\n";
$customer_body .= "Best regards,\n";
$customer_body .= "Badhon Kumar Roy\n";
$customer_body .= "Software Engineer\n";
$customer_body .= "Email: badhonroy172@gmail.com\n";
$customer_body .= "Phone: 01783147171\n";
$customer_body .= "WhatsApp: https://wa.me/8801783147171";

$customer_headers = "From: badhonroy172@gmail.com\r\n";
$customer_headers .= "Reply-To: badhonroy172@gmail.com\r\n";
$customer_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$customer_headers .= "X-Mailer: PHP/" . phpversion();

$admin_sent = sendEmail($to_admin, $admin_subject, $admin_body, $admin_headers);
$customer_sent = sendEmail($email, $customer_subject, $customer_body, $customer_headers);

if ($admin_sent && $customer_sent) {
    echo json_encode(['success' => true, 'message' => 'Emails sent successfully']);
} else if ($admin_sent) {
    echo json_encode(['success' => true, 'message' => 'Message sent to admin, but confirmation email failed']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send message. Please contact directly via WhatsApp or email.']);
}
?>