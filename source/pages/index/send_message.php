<?php


if($_POST['check'] != '') {
    die("лол");
} else {
    if ((isset($_POST['name']) && $_POST['name'] != '') &&
        (isset($_POST['phone']) && $_POST['phone'] != '') &&
        (isset($_POST['message']) && $_POST['message']) != '') {
        echo 'начался выполняться php код';
        $to = 'foregestore@gmail.com';
        echo $to;
        $subject = 'Сообщение от '.$_POST['name'];
        echo $subject;
        $phone = $_POST['phone'];
        echo $phone;
        $textMessage = $_POST['message'];
        $message = '
        <html>
            <head>
                <title>'.$subject.'</title>
            </head>
                <body>
                    <p>Имя: '.$_POST['name'].'</p>
                    <p>Номер телефона: '.$phone.'</p>
                    <p>Сообщение: <b>'.$textMessage.'</b></p>
                </body>
        </html>';
        $headers = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: ".$_POST['name']. "<from@example.com>\r\n";
        mail($to, $subject, $message, $headers);
        echo 'готово';
    } else {
        die('тра та та');
    }
}