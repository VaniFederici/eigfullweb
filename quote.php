<?php

if (isset($_POST['email']) and $_POST['email']!=""){
	
	$nombre=$_POST['firstname'];
	$email=$_POST['email'];
	$phone=$_POST['quotephone'];
	
	
	//-----------------------------------------------------------
	//ENVIO MAIL 
	//-----------------------------------------------------------
	
	
	$correo=$email;
	
	$destinatario="vanifederici@gmail.com ";
	
	$asunto = "Message from www.equityinsgroup.com"; 
	$cuerpo = 'Message sent from www.equityinsgroup.com:
	
	
	Name: '.$nombre.'
	Email: '.$email.'
	Phone: '$phone;

	
	if ( mail($destinatario,$asunto,$cuerpo) ) {
		echo '<SCRIPT LANGUAGE="javascript">
			location.href = "contact-ok.html";
			</SCRIPT>';
	}else{
		echo '<SCRIPT LANGUAGE="javascript">
			location.href = "contact-error.html";
			</SCRIPT>';
	}

}




?>