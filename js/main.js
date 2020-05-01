$(document).ready(function () {
    var menuBtn = $('.top-nav_btn');
    var menu = $('.top-nav_menu');

    menuBtn.on('click', function (event) {
        event.preventDefault();
        menu.toggleClass('top-nav_menu__active');
    });

    $('.second-box_images').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true
    });

    var imageHeight = $('.grid_item_image(img(height))');
    var rawHeight = 10; // Looking to Grid.scss
    var spans = Math.ceil(imageHeight / rawHeight);
    spans = $span
});