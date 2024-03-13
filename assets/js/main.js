
$(document).ready(function () {

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
    $( ".calendar" ).datepicker({
        dateFormat: 'dd/mm/yy',
        firstDay: 1
    });
    $( function() {
        $( "#datepicker" ).datepicker();
    } );
});
