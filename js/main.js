window.onload = function () {
    var imgs = document.querySelectorAll('.grid_item > img');
    var rawHeight = 11; // Looking to Grid.scss
    var spansText = "grid-row-end: span ";
    var spans = [];

    imgs.forEach(function (v) {
        spans.push(Math.ceil(v.height / rawHeight));
    });

    var spansFull = spans.map(function (v) {
        return spansText + v;
    });
    for (var i = 0; i < spansFull.length; i++) {
        document.getElementsByClassName('grid_item')[i].style.cssText = spansFull[i];
    }
};

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
});