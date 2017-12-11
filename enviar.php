<?php
$destino = "pcasabonaore@gmail.com";
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$telefono = $_POST["telefono"];
$empresa = $_POST["empresa"];
$consulta = $_POST["consulta"];
$contenido = "Nombre: " . $nombre . "\nE-mail: " . $email . "\nTelefono: " . $telefono . "\nEmpresa: " . $empresa . "\nConsulta: " . $consulta;
$asunto = "Contacto desde la Web de Ovis Communication",
mail($destino,$asunto, $contenido);
header('Location:gracias.html')



?>