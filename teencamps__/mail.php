<?php

$recepient = "hola@imaguru.es";
$sitename = "http://imaguru.es/teencamps";

$name = trim($_POST["name"]);
$age = trim($_POST["age"]);
$level = trim($_POST["level"]);
$pname = trim($_POST["pname"]);
$phone = trim($_POST["phone"]);
$mail = trim($_POST["mail"]);
$length = trim($_POST["length"]);
$data = trim($_POST["formData"]);
$message = "
Subject: $data \n
Email: $mail \n
Parent name: $pname \n
Parent Phone: $phone \n
Kids name: $name \n
Kids age: $age \n
Kids level of English: $level \n
Length of day programm: $length
";

$pagetitle = "New Request! TEENGURU CAMP \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");