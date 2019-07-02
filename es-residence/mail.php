<?php

$recepient = "hola@imaguru.es";
$sitename = "http://imaguru.es/residence/";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);
$data = trim($_POST["formData"]);
$number = trim($_POST['number']);
$from = trim($_POST['from']);
$to = trim($_POST['to']);

$message = "
Subject: $data \n
Name: $name \n
Email: $email \n
Phone: $phone \n
Message: $text \n
Team number: $number \n
From: $from \n
To: $to
";

$pagetitle = "New Startup Residence invoice from \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");