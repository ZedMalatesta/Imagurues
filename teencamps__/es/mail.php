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
Tema: $data \n
Email: $mail \n
Nombre del padre: $pname \n
Número de teléfono de los padres: $phone \n
Nombre del niño: $name \n
Edad del niño: $age \n
Nivel de inglés del niño: $level \n
Duración del día: $length
";

$pagetitle = "¡Nueva solicitud! TEENGURU CAMP \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");