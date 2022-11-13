<?php
    $email = $_POST['email'];
    if (filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($email)) {
        echo json_encode(array('email'=>"Email is valid"));
    } else {
        http_response_code(400);
        throw new Exception;
    }
?>
