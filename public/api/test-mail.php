<?php
// Simple mail test script
header('Content-Type: application/json');

$to = 'badhonroy172@gmail.com';
$subject = 'Test Email from Portfolio';
$message = 'This is a test email to verify mail functionality.';
$headers = 'From: noreply@badhonroy.dev' . "\r\n" .
           'Reply-To: noreply@badhonroy.dev' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Test email sent successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send test email']);
}
?>