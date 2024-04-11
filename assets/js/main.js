
$(document).ready(function () {
    $( function() {
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 500,
            values: [ 75, 300 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }

        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
            " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    } );

    $('.menu-burger').click(function () {
        $('.header').toggleClass('open-burger');
        $('body').addClass("visible");

    });
    $('.nav-close-icon').click(function () {
        $('.header').removeClass('open-burger');
        $('body').removeClass("visible");

    });
    $('.search').on('click', function () {
        $('.nav').addClass("hidden");
        $('.header-search-block').addClass("show");
        // $('body').addClass("visible");
        $('.form-search-block').addClass("open");

    });
    $('.search-mb').on('click', function () {

        $('body').addClass("visible");
        $('.header-search-mobile-block').addClass("open-search-block");

    });
    $('.search-button-close').on('click', function () {
        $('.nav').removeClass("hidden");
        $('.header-search-block').removeClass("show");
        $('body').removeClass("visible");
        $('.form-search-block').removeClass("open");

    });
    $('.mb-search-button-close').on('click', function () {

        $('.header-search-block').removeClass("show");
        $('body').removeClass("visible");
        $('.form-search-block').removeClass("open");
        $('.header-search-mobile-block').removeClass("open-search-block");


    });
    $('.notification').click(function () {
        $('.notification-cart').toggleClass('open-cart');

    });
    $('.close-cart').on('click', function () {
        $('.notification-cart').removeClass("open-cart");


    });
    $('.open-single-cart').click(function () {
        $('.card-single-modal').addClass('single-cart-open');
        $('body').addClass("visible");


    });
    $('.single-close').click(function () {
        $('.card-single-modal').removeClass('single-cart-open');
        $('body').removeClass("visible");

    });

    $( ".calendar" ).datepicker({
        dateFormat: 'dd/mm/yy',
        firstDay: 1
    });
    $( function() {
        $( "#datepicker" ).datepicker();
    } );



});
