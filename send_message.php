<?php


if($_POST['check'] != '') {
    die("лол");
} else {
    if ((isset($_POST['name']) && $_POST['name'] != '') &&
        isset($_POST['phone']) && $_POST['phone'] != '') {
        $to = 'info@kuznetcov.team';
        $subject = 'Сообщение от '.$_POST['name'];
        $textMessage = $_POST['message'];
        $message = '
        <html>
            <head>
                <title>'.$subject.'</title>
            </head>
                <body>
                    <p>Имя: '.$_POST['name'].'</p>
                    <p>Номер телефона: '.$_POST['phone'].'</p>
                    <p>Сообщение: <b>'.$textMessage.'</b></p>
                </body>
        </html>';
        $headers = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: ".$_POST['name']." <from@example.com>\r\n";
        mail($to, $subject, $message, $headers);
    } else {
        die('тра та та');
    }
}