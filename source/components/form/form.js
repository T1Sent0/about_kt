import './form.scss'

const onClass = "on";
const showClass = "show";

const mobileForm = 'mobile-form';

if (document.documentElement.clientWidth <= 900) {
    $('.container-form').toggleClass(mobileForm);
} else {
    $('.container-form')
}


$('#form').submit(function () {
    let th = $(this);
    let data = $(this).serialize();
    let err = false;

    th.find('input[type=text], input[type=tel], textarea').each(function () {
        if ($(this).val() === '') {
            $(this).addClass('error');
            err = true;
        }
    });

    if (!err) {
        $.ajax({
            type: "POST",
            url: "./php/send_message.php",
            data: data
        }).done(function() {
            $('#form').find('label').removeClass(showClass);
            // messageBlock.hide();
            // $('.success').show();
            // setTimeout(showMenuAfterSendMessage, 5000);
            $('#form').trigger("reset");
        })
    }
    return false;
});