<?php
    
    //header("Access-Control-Allow-Origin: *");
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    
    //get refferer server
    
    //get data from Get Method
        $name = isset($_GET['name']) ? $_GET['name'] : null;
        $email = isset($_GET['sendto']) ? $_GET['sendto'] : null;
        $phone = isset($_GET['phone']) ? $_GET['phone'] : null;
        
        
        
        if($name && $email && $phone){
            //Load Composer's autoloader
            require 'vendor/autoload.php';
            
            //Create an instance; passing `true` enables exceptions
            $mail = new PHPMailer(true);
            
            try {
                //Server settings
                // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
                $mail->isSMTP();                                            //Send using SMTP
                $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
                $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
                $mail->Username   = 'apnaswarg@gmail.com';                     // SMTP username
                $mail->Password   = 'vskzsstrwmslmrvx';                               // SMTP password
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
                $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
            
                //Recipients
                $mail->setFrom('apnaswarg@gmail.com');
                $mail->addAddress('apnaswarg@gmail.com');     //Add a recipient
                // $mail->addAddress('ellen@example.com');               //Name is optional
                // $mail->addReplyTo('info@example.com', 'Information');
                // $mail->addCC('cc@example.com');
                // $mail->addBCC('bcc@example.com');
            
                //Attachments
                // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
                // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name
            
                //Content
                $mail->isHTML(true);                                  //Set email format to HTML
                $mail->Subject = 'Website Enquery from Mahindra Eden Landing Page';
                $mail->Body    = '<html><body>';
        $mail->Body   .= '<table rules="all" style="border-style: solid; border-color: #666;" cellpadding="10">';
        $mail->Body   .= "<tr style='background: #eee;'><td><strong>Online Enquery:</strong> </td><td>" . 'Contact Page' . "</td></tr>";
        $mail->Body   .= "<tr><td><strong>Name:</strong> </td><td>" .$name. "</td></tr>";
        $mail->Body   .= "<tr><td><strong>Email:</strong> </td><td>" .$email. "</td></tr>";
        $mail->Body   .= "<tr><td><strong>Phone:</strong> </td><td>" .$phone. "</td></tr>";
        $mail->Body   .= "</table>";
        $mail->Body   .= "</body></html>";
                $mail->send();
                echo "Thanks for contacting us. We will reach you soon.";
            } catch (Exception $e) {
                echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
            }
        } else {
            echo "All the fields are required!";
        }
    
    // if($_SERVER['HTTP_REFERER'] === "http://webmillionservices.com/"){
        
        
    // } else {
    //     echo "You can't use this server";
    // }

?>