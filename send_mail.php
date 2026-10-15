<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-6.9.1/src/Exception.php';
require 'PHPMailer-6.9.1/src/PHPMailer.php';
require 'PHPMailer-6.9.1/src/SMTP.php';

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST['user_name']) ? $_POST['user_name'] : '';
    $email = isset($_POST['user_email']) ? $_POST['user_email'] : '';
    $phone = isset($_POST['user_phone']) ? $_POST['user_phone'] : '';

    if (empty($name) || empty($email)) {
        echo json_encode(['success' => false, 'message' => 'Name and email are required.']);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;

        // REPLACE WITH YOUR GMAIL AND APP PASSWORD
        $mail->Username = 'noreplyvanshikaagarwaldesigns@gmail.com';
        $mail->Password = 'wilcjpyhbixhfeex';

        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        // Recipients
        $mail->setFrom('noreplyvanshikaagarwaldesigns@gmail.com', 'Vanshika Website Contact');
        $mail->addAddress('technojohn0@gmail.com'); // Form contents will be sent here

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body = "<h3>New Contact Request</h3>
                          <p><strong>Name:</strong> {$name}</p>
                          <p><strong>Email:</strong> {$email}</p>
                          <p><strong>Phone:</strong> {$phone}</p>";
        $mail->AltBody = "New Contact Request\nName: {$name}\nEmail: {$email}\nPhone: {$phone}";

        // Send email to admin
        $mail->send();

        // Send confirmation email to customer
        $mail->clearAddresses();
        $mail->addAddress($email, $name);
        $mail->Subject = 'Thank you for contacting us - Architect Vanshika';
        $mail->Body = "<h3>Thank you for reaching out, {$name}!</h3>
                          <p>We have received your message and our team will get back to you shortly.</p>
                          <p><strong>Your submitted details:</strong></p>
                          <p><strong>Name:</strong> {$name}</p>
                          <p><strong>Email:</strong> {$email}</p>
                          <p><strong>Phone:</strong> {$phone}</p>
                          <br>
                          <p>Best Regards,</p>
                          <p>Architect Vanshika Team</p>";
        $mail->AltBody = "Thank you for reaching out, {$name}!\n\nWe have received your message and our team will get back to you shortly.\n\nBest Regards,\nArchitect Vanshika Team";

        $mail->send();

        echo json_encode(['success' => true, 'message' => 'Message has been sent']);
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}



