<?php
    $_POST = json_decode(file_get_contents('php://input'), true);
    if( isset($_POST['name']) && isset($_POST['message']) && isset($_POST['email']) ){
        $to = "ncortes.us@gmail.com";
        $subject = $_POST["name"];
        $txt =  $_POST["message"];
        $headers = "From: ".$_POST["email"];
        mail($to,$subject,$txt,$headers);
    }
    
?>