<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $name = $data['name'];
    $number = $data['number'];
    $email = $data['email'];
    $message = $data['message'];

    $to = 'hutch78uk@yahoo.com';
    $subject = 'Contact Form Submission';
    $body = "Name: $name\Number: $number\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode(['status' => 'Email sent successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['status' => 'Failed to send email']);
    }
} else {
    http_response_code(405);
    echo json_encode(['status' => 'Method Not Allowed']);
}
?>
