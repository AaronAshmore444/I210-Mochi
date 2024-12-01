<!DOCTYPE HTML>

<html>

<head>

<meta charset="UTF-8">

<title>contact</title>

</head>

<body>

<?php

$fullName = $_POST["fullName"];

$email = $_POST["email"];

$phone = $_POST["phone"];

$comment = $_POST["comment"];

$subject = "I210 Contact Form";

//Enter your email address

$to = "aaashmor@iu.edu";

//Prepare Email Body Text

$Body = "";

$Body .= "Name: ";

$Body .= $fullName;

$Body .= "\n";

$Body .= "Phone Number: ";

$Body .= $phone;

$Body .= "\n";

$Body .= "Email: ";

$Body .= $email;

$Body .= "\n";

$Body .= "Comments: ";

$Body .= $comment;

$Body .= "\n";

//Send Email

$send_contact= mail($to,$subject,$Body);

if($send_contact) {

print "<meta http-equiv=\"refresh\" content=\"0;URL=thanks.php\">";

}

else {

print "<meta http-equiv=\"refresh\" content=\"0;URL=contact.html\">";

}

?>

</body>

</html>