<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$formcontent = "From: $name \n Message: $message";
$recipient = "matthew.jonat@gmail.com";
$subject = "Mind Equals Blown Mail";
header("Location: index.html");
$mailheader = "From: $email \r\n";

mail($recipient, $subject, $formcontent, $mailheader) or die("Error");

    
