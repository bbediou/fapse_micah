<?php
/**
 * Simple contact form handler using mail() function.
 * No database, no SMTP configuration needed.
 * Recipient, sender address, and subject can be customized via .env if present.
 */

// Load .env file if it exists (dev/prod optional configuration)
if (file_exists(__DIR__ . '/.env')) {
    $env = parse_ini_file(__DIR__ . '/.env');
    foreach ($env as $key => $value) {
        putenv("$key=$value");
    }
}

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /index.html');
    exit;
}

// Honeypot anti-spam
if (!empty($_POST['nickname'] ?? '')) {
    // Silently pretend success to confuse bots
    header('Location: /index.html?sent=1');
    exit;
}

// Get and validate form fields
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

// Basic validation
if (!$name || !$email || !$message || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: /index.html?sent=0');
    exit;
}

// Prevent header injection
$clean_name = preg_replace("/[\\r\\n]/", ' ', $name);
$clean_email = preg_replace("/[\\r\\n]/", '', $email);

// Get config from .env or defaults
$mail_to = getenv('MAIL_TO') ?: 'benoit.bediou@unige.ch';
$mail_from = getenv('MAIL_FROM') ?: 'no-reply@micah.unige.ch';
$mail_from_name = getenv('MAIL_FROM_NAME') ?: 'MICAH Website';

// Compose email
$subject = "MICAH website contact from {$clean_name}";
$body = "Name: {$clean_name}\nEmail: {$clean_email}\n\nMessage:\n{$message}\n";

// Headers: From, Reply-To, Content-Type
$headers = "From: {$mail_from_name} <{$mail_from}>\r\n";
$headers .= "Reply-To: {$clean_name} <{$clean_email}>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email using mail() function
$sent = @mail($mail_to, $subject, $body, $headers);

// Redirect with status
if ($sent) {
    header('Location: /index.html?sent=1');
} else {
    header('Location: /index.html?sent=0');
}
exit;
?>