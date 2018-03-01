import './form.scss'

const onClass = "on";
const showClass = "show";

const mobileForm = 'mobile-form';

if (document.documentElement.clientWidth <= 900) {
    $('.container-form').toggleClass(mobileForm);
}

$('#form').submit(function () {
    let th = $(this);
    let data = $(this).serialize();
    let err = false;
    $('button').prop('disabled', true);
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
            $('.container-form').css({display: 'flex', flexDirection: 'column', alignItems: 'center'});
            $('.content-form').hide();
            $('.success-container').show();
            setTimeout(showMenuAfterSendMessage, 5000);

            $('#form').trigger("reset");
            $('body, html', parent.document).animate({ scrollTop: 0 },500);
        })
    }
    return false;
});

function showMenuAfterSendMessage() {
    $('button').prop('disabled', false);
    $('.content-form').hide();
    $('.success-container').hide();
    $('.container-form, .opacity').hide();
    $('body').scrollTop({scrollTop: 0});

}