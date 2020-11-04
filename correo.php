<?php

$destino="maximiliano.ovejak@gmail.com";
$nombre=$_POST["Name"];
$asunto=$_POST["Asunto"];
$correo=$_POST["Email"];
$mensaje=$_POST["Mensaje"];
$contenido= "Nombre:".$nombre."\nCorreo:".$correo."\nAsunto:".$asunto."\Mensaje".$mensaje; 
mail($destino, "Contacto",$contenido);
header("Location:enviado.html");

?>