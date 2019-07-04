<?php

    // Only process POST requests.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
        $name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "marc.e.mailing@gmail.com";

        // Set the email subject.
        $subject = "Nova mensagem do teu site de $name";

        // Build the email content
        $email_content = "New book request from: $name";
        

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Just kidding, it means that your message was sent successfully. Thank you very much and I'll get back to you pretty soon :)";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Something went wrong and we couldn't send your message. Try again, please";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>