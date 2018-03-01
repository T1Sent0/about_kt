import './menu.scss'

$(document).ready(function() {

    const menuContainer = $('.menu');
    const bodySelector = $('body');
    const showClass = "show";

    bodySelector.on('click', '.burger, .close-mobile-menu', mobileMenuOpen);


    bodySelector.on('click', '.pensil', openForm);

    function openForm() {
        $('.container-form, .content-form, .opacity').show();
        $('.close-mobile-menu').removeClass('close-mobile-menu').addClass('burger');
        $('.content-mobile-menu').hide();
    }
        bodySelector.on('click', '.pensil', openMenu);

        function openMenu() {
            $('.container-form, .opacity').show();
            $('li:last').removeClass('close-mobile-menu').addClass('burger')

        }

        function mobileMenuOpen() {
            if ($('body').find('.close-mobile-menu').length) {

                $(this).toggleClass('close-mobile-menu').addClass('burger');
                $('.content-mobile-menu').hide();

                $('li:last').toggleClass('close-mobile-menu').addClass('burger')


                // messageBlock.css({display: 'none'});
                // mobileMenuBNlock.css({display: 'none'});
                // $('.send-form').find('input[type=tel], input[type=text], textarea').val('');
                // $('.send-form').find('label').removeClass(showClass);
                // $('.send-form').find('input').removeClass('error');
            } else {

                $(this).toggleClass('burger').addClass('close-mobile-menu');
                $('.container-form').hide();
                $('.content-mobile-menu').show().css({display: 'flex'});

                $('li:last').toggleClass('burger').addClass('close-mobile-menu')
                $('.container-form').hide();

                // $(this).css('background', 'url(../img/mobile/close.svg) no-repeat').addClass('close-burger');
                // messageIcon.css({display: 'block'});
                // mobileMenuBNlock.css({display: 'flex', display: '-webkit-flex', display: '-ms-flexbox', display: '-moz-box', display: '-webkit-box'});
                // messageBlock.css('display', 'none');
            }
        }

        $(window).resize(function () {
            if (document.documentElement.clientWidth <= 900) {

            }
        });

});