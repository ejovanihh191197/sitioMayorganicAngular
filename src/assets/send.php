<?php
    $nombre = $_POST['nombre'];
    $correo = $_POST['email'];
    $telefono = $_POST['telefono'];
    $texto = $_POST['texto'];

    $header = 'From: ' . $correo . "\r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $header .= "Mime-Version: 1.0 \r\n";
    $header .= "Content-Type: text/plain";

    $mensaje = "Este mensaje fue enviado por " . $nombre . " \r\n";
    $mensaje .= "Su e-mail es: " . $correo . " \r\n";
    $mensaje .="Su telefono es: ". $telefono . " \r\n";
    $mensaje .= "Enviado el " . date('d/m/Y', time()) . " \r\n";
    $mensaje .= "\n\nMensaje: " . $texto . " \r\n";

    $para = 'mayorganic.zum@gmail.com';
    $asunto = 'Contacto por Mayorganic';

    mail($para, $asunto, utf8_decode($mensaje), $header);
?>