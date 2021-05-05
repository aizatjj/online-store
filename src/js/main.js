$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel(
        {
            items: 1,
            loop: true,
            dots: false,
            autoHeight: true
        }
    );
// Go to the next item
    $('.owl-next').click(function () {
        owl.trigger('next.owl.carousel');
    });
// Go to the previous item
    $('.owl-prev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });

    //tabs

    $('ul.catalog__caption').on('click', 'li:not(.catalog__item_active)', function () {
        $(this)
            .addClass('catalog__item_active').siblings().removeClass('catalog__item_active')
            .closest('div.catalog__tabs').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });


    //переход
    $('.catalog__front-more').each(function (item) {
        $(this).on('click', function (event) {
            event.preventDefault();
            $('.catalog__front').eq(item).addClass('catalog__front_active')
            $('.catalog__back').eq(item).addClass('catalog__back_active')
        });
    });
    $('.catalog__back-off').on('click', function (event) {
        event.preventDefault();
        $('.catalog__front').removeClass('catalog__front_active')
        $('.catalog__back').removeClass('catalog__back_active')
    });

    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close"
        ],
        loop: true
    });

    var map;
    DG.then(function () {
        map = DG.map('map', {
            center: [42.84387, 74.623211],
            zoom: 13
        });
        var myIcon = DG.icon({
            iconUrl: 'https://image.flaticon.com/icons/png/128/1673/1673188.png',
            iconSize: [50, 50],
        });

        var marker = DG.marker([42.84387, 74.623211], {icon: myIcon}).addTo(map).bindPopup('IT-Run Academy!');
        marker.bindLabel('IT-Run Academy', {static: true});
    });

    $('.tel').inputmask('+\\9\\96(999)-99-99-99');

    $(window).scroll('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $('.go-top').fadeIn('slow')
        } else {
            $('.go-top').fadeOut('slow')
        }
    });


    $('.burger').on('click', function () {
        $('.burger').toggleClass('active')
        $('.header-info').toggleClass('active')
    });


    $('.header-info__btn, .home__btn').on('click', function () {
        $('.overlay, .popup__consultation').fadeIn('slow')

    });
    $('.consultation__btn, .consult__btn').on('click', function (e) {
        e.preventDefault();
        $('.overlay, .popup__thanks').fadeIn('slow');
        $('.popup__consultation, .popup__order').fadeOut('slow')
    });


    $('.catalog__btn').each(function (item) {
        $(this).on('click', function () {
            $('.overlay, .popup__order').fadeIn('slow');
            $('.popup__order-subtitle').text($('h3.catalog__front-title').eq(item).text())
        });
    });

    $('.buy__btn').on('click', function (e) {
        e.preventDefault();
        $('.overlay, .popup__thanksBuy').fadeIn('slow');
        $('.popup__order').fadeOut('slow')
    });
    $('.popup__close').on('click', function () {
        $('.overlay, .popup__consultation, .popup__order, .popup__thanks').fadeOut('slow')
    });
    $('.overlay').on('click', function (e) {
        console.log(e);
        if (e.target.class === '.overlay') {
            $('.overlay, .popup__consultation, .popup__order, .popup__thanks, .popup__thanksBuy').fadeOut('slow')
        }
            });

});

