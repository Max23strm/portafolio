<?php

$destino="maximiliano.ovejak@gmail.com";
$nombre=$_POST["name"];
$asunto=$_POST["asunto"];
$correo=$_POST["email"];
$mensaje=$_POST["mensaje"];
$contenido= "Nombre:".$nombre."\nCorreo:".$correo."\nAsunto:".$asunto."\Mensaje".$mensaje; 
mail($destino, "Contacto",$contenido);
header("location.href:enviado.html");

?>