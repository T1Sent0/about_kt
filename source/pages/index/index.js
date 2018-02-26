import "./jquery.inputmask";
import Slider from 'swiper'

$(document).ready(function () {

    let slider2 = new Slider('.portfolio', {
        effect: 'coverflow',
        initialSlide: 3,
        spaceBetween: -120,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows : true,
        },
        navigation: {
            nextEl: '.portfolio-next',
            prevEl: '.portfolio-prev',
        },
    });

    const bodySelector = $('body');

    // bodySelector.on('click', '.scroll-up', scrollTop);

    // function scrollTop() {
    //     const topPage = $('.header');
    //     $('html, body').animate({scrollTop: $(topPage).offset().top}, 1000);
    // }

    // bodySelector.on('click', '.arrow-on-down a', downScreen);
    //
    // function downScreen() {
    //     const id = $(this).attr('href'),
    //         top = $(id).offset().top;
    //     $('body,html').animate({scrollTop: top}, 1000);
    // }

    // bodySelector.on('click', '.fifteenth-screen', nextProject);
    //
    // function nextProject() {
    //     alert('25 строка файл js.js, переход на страницу следующего проекта')
    // }

    const onClass = "on";
    const showClass = "show";

    $("input, textarea").on("checkval", function () {
        let label = $(this).prev("label");
        if (this.value !== "") {
            label.addClass(showClass);
        } else {
            label.removeClass(showClass);
        }
    }).on("keyup", function () {
        $(this).trigger("checkval");
    }).on("focus", function () {
        console.log($(this));
        $(this).prev("label").addClass(onClass);
    }).on("blur", function () {
        $(this).prev("label").removeClass(onClass);
    }).trigger("checkval");


    // bodySelector.on('click', '.message-icon', mobileMessageOpen);
    // bodySelector.on('click', '.close', mobileMessageClose);
    bodySelector.on('click', '.close', desktopCloseContact);

    // bodySelector.on('mouseover', 'input[type=text]', mouseOverFunc);
    // bodySelector.on('mouseover', 'input[type=tel]', mouseOverTelFunc);
    // bodySelector.on('mouseout', 'input[type=text], input[type=tel]', mouseOutFunc);
    // bodySelector.on('mouseout', 'input[type=text], input[type=tel]', mouseOutTelFunc);
    bodySelector.on('focus', 'input, textarea', focusFunc);
    bodySelector.on('focusout', 'input[type=tel]', focusOutTelFunc);

    const messageIcon = $('.message-icon');
    const mobileMenuBNlock = $('.mobile-menu');


    $(window).resize(function () {
        if (document.documentElement.clientWidth > 1000) {
            messageBlock.css('display', 'none');
            mobileMenuBNlock.css({display: 'none'});
            $('.burger').css('background', 'url(../img/mobile/all_services.svg) no-repeat').removeClass('close-burger');
        }
    });



    const messageBlock = $('.mes');

    // function mobileMessageOpen() {
    //     messageBlock.css('display', 'block');
    //     mobileMenuBNlock.css({display: 'none'});
    //     $('body').find('.close-burger').css('background', 'url(../img/mobile/all_services.svg) no-repeat').removeClass('close-burger');
    // }



    // function mobileMessageClose() {
    //     messageBlock.css('display', 'none');
    //     //mobileMenuBNlock.css({display: 'flex'});
    //     $('.send-form').find('input[type=tel], input[type=text], textarea').val('');
    //     $('.send-form').find('label').removeClass(showClass);
    //     $('.send-form').find('input').removeClass('error');
    // }

    function desktopCloseContact() {
        $('.container-form, .opacity').hide();
    }

    // function mouseOverFunc() {
    //     $('input[type=text]').css({borderBottom: '0.04em solid #56c3e7'});
    // }

    // function mouseOverTelFunc() {
    //     $('input[type=tel]').css({borderBottom: '0.04em solid #56c3e7'});
    // }

    // function mouseOutFunc() {
    //     $('input[type=text]').css({borderBottom: '0.04em solid #b5b5b5'});
    // }

    // function mouseOutTelFunc() {
    //     $('input[type=tel]').css({borderBottom: '0.04em solid #b5b5b5'});
    // }

    function focusFunc() {
        $(this).removeClass('error');
    }



    $('#send-form').submit(function () {
        let th = $(this);
        let data = $(this).serialize();
        let err = false;

        th.find('input[name=name], input[name=phone]').each(function () {
            if ($(this).val() === ''){
                $(this).addClass('error');
                err = true;
            }
        });

        if (!err) {
            $.ajax({
                type: "POST",
                url: "../php/send_message.php",
                data: data
            }).done(function() {
                $('#send-form').find('label').removeClass(showClass);
                $('#send-form, .hiden').hide();
                $('.success-two').show();
                setTimeout(showMenuAfterSendMessageTwo, 5000);
                $("#send-form").trigger("reset");
            })
        }
        return false;
    });

    $('#send-form-pensil-action').submit(function () {
        let th = $(this);
        let data = $(this).serialize();
        let err = false;

        th.find('input[type=tel], input[type=text]').each(function () {
            if ($(this).val() === '') {
                $(this).addClass('error');
                err = true;
            }
        });

        if (!err) {
            $.ajax({
                type: "POST",
                url: "../php/send_message.php",
                data: data
            }).done(function () {
                $('#send-form-pensil-action').find('label').removeClass(showClass);
                $('#send-form-pensil-action, .hiden').hide();
                $('.success-three').show();
                setTimeout(showMenuAfterSendMessageThree, 5000);
                $("#send-form-pensil-action").trigger("reset");
            })
        }
        return false;
    });

    // function showMenuAfterSendMessage() {
    //     $(".success").hide();
    //     mobileMenuBNlock.css({display: 'flex', display: '-webkit-flex', display: '-ms-flexbox', display: '-moz-box', display: '-webkit-box'});
    // }

    function showMenuAfterSendMessageTwo() {
        $(".success-two").hide();
        $('#send-form, .hiden').show();
        $('#send-form').css({display: 'table'});
    }

    function showMenuAfterSendMessageThree() {
        $(".success-three").hide();
        $('#send-form-pensil-action, .hiden').show();
        $('#send-form-pensil-action').css({display: 'table'});
    }

    bodySelector.on('focus', 'input[name=phone]', mask);
    bodySelector.on('keydown', 'input[name=name]', blockEditSymbolLite);

    function mask() {
        $('input[name=phone]').inputmask({mask: "+7 (999) 999-99-99"});
    }


    function blockEditSymbolLite() {

        let valueRgx = $(this).val();

        let rgxp = /[\\!\\@\\#\\$\\%\\^\\&\\*\\(\\)\\_\\;\\:\\?\\*\\=\\+\\~\\``]/g;



        if (rgxp.test(valueRgx)) {

            $(this).val("");

        }

    }

    function focusOutTelFunc() {
        if ($(this).val()) {

            let valueRgx = $(this).val();

            let rgxp = /[\\_\\]/g;

            if (rgxp.test(valueRgx)) {

                $(this).val("");
                $(this).addClass('error');
                err = true;
                return err;
            }
        }
    }
});