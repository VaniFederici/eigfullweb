<?php

if (isset($_POST['email']) and $_POST['email']!=""){
	
	$nombre=$_POST['firstname'];
	$apellido=$_POST['lastname'];
	$city=$_POST['city'];
	$state=$_POST['state'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$referred=$_POST['referred'];
	$comments=$_POST['comments'];
	
	//-----------------------------------------------------------
	//ENVIO MAIL 
	//-----------------------------------------------------------
	
	
	$correo=$email;
	
	$destinatario="vanifederici@gmail.com ";
	
	$asunto = "Message from www.equityinsgroup.com"; 
	$cuerpo = 'Message sent from www.equityinsgroup.com:
	
	
	Name: '.$nombre.'
	LastName:'.$apellido.'
	City:'.$city.'
	State:'.$state.'
	Email: '.$email.'
	Phone: '.$phone.'
	Referred:'.$referred.'
	Comments:'.$comments;
	
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