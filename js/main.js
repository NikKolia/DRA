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


    var img = new Image();
    img.onload = function() {
    var imageHeight = this.height;
    };
    var rawHeight = 10; // Looking to Grid.scss
    var spans = Math.ceil(imageHeight / rawHeight);

    /* var imageHeight = $('.grid_item(img(height))'); */
});