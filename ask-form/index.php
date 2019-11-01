<?php

  $errores = '';
  $sent = false;

  if (isset($_POST['submit'])) {
    $name = $_POST['procedure'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    if (!empty($name)) {
      $name = trim($name);
      $name = filter_var($name, FILTER_SANITIZE_STRING);
    } else {
      $errores .= 'Please enter a name <br />';
    }

    if (!empty($email)) {
      $email = filter_var($email, FILTER_SANITIZE_EMAIL);
      if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errores .= 'Please enter a valid email <br />';
      }
    } else {
      $errores .= 'Please enter a email <br />';
    }

    if (!empty($message)) {
      $message = htmlspecialchars($message);
      $message = trim($message);
      $message = stripslashes($message);
    } else {
      $errores .= 'Please enter a message <br />';
    }

    if (!$errores) {
      $sent_to = 'aolarte@ucol.mx';
      $subject = 'Email sent from mywebsite.com';
      $message_email = "From: $name \n";
      $message_email .= "Email: $email \n";
      $message_email .= "Message: $message"; // . $_POST['message'];

      //No funciona en paneles de control como XAMPP
      // mail($sent_to, $subject, $message_email); //Para enviar lo ingresado a tu correo (admin)
      $sent = true;
    }
  }

  require 'index.view.php';
?>