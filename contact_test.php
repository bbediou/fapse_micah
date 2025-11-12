<?php
// Debug contact handler — n'envoie pas d'email, enregistre dans /tmp/contact_debug.txt
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /index.html');
    exit;
}

// Honeypot
if (!empty($_POST['nickname'] ?? '')) {
    header('Location: /index.html?sent=1');
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');
if (!$name || !$email || !$message || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: /index.html?sent=0');
    exit;
}

// DEBUG: write into temporary file instead of mailing
$log = sprintf("[%s] From: %s <%s>\n%s\n\n", date('c'), $name, $email, $message);
file_put_contents('/tmp/contact_debug.txt', $log, FILE_APPEND | LOCK_EX);

// simulate success
header('Location: /index.html?sent=1');
exit;
?>