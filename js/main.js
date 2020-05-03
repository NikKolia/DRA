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

window.onload = function () {
    var imgs = document.querySelectorAll('.grid_item > img');
    // for(var i=0; i<imgs.length; i++) console.log(imgs[i]);
    // imgs.forEach( imgs => (Math.ceil(imgs.height / 11)) )

    var rawHeight = 11; // Looking to Grid.scss
    var spansText = "grid-row-end: span ";
    var spans = [];

    imgs.forEach( function(v) {
        spans.push(Math.ceil(v.height / rawHeight));
    } );

    var spansFull = spans.map( function(v) { return spansText + v; } );
    console.log( spansFull );

    for(var i=0; i<spansFull.length; i++) console.log(spansFull[i]);

    document.getElementsByClassName('grid_item')[0].style.cssText = spansFull[0];
    document.getElementsByClassName('grid_item')[1].style.cssText = spansFull[1];
    document.getElementsByClassName('grid_item')[2].style.cssText = spansFull[2];
    document.getElementsByClassName('grid_item')[3].style.cssText = spansFull[3];
    document.getElementsByClassName('grid_item')[4].style.cssText = spansFull[4];
    document.getElementsByClassName('grid_item')[5].style.cssText = spansFull[5];
    document.getElementsByClassName('grid_item')[6].style.cssText = spansFull[6];
    document.getElementsByClassName('grid_item')[7].style.cssText = spansFull[7];
    document.getElementsByClassName('grid_item')[8].style.cssText = spansFull[8];
    document.getElementsByClassName('grid_item')[9].style.cssText = spansFull[9];
    document.getElementsByClassName('grid_item')[10].style.cssText = spansFull[10];

    // imgs.forEach( imgs => console.log(Math.ceil(imgs.height / 11)) );
/*    for (var i=0, len=imgs.length; i<len; i++) {
        imgs.height[i] *= 2; // умножение значения на 2
    }*/

    // for(var i=0; i<img.length; i++) console.log(img.height[i]);

    // var imageHeight = img.values(img.height);

    // console.log(img);
    // console.log(imageHeight);
    // console.log(elems);
    // var i = document.getElementsByClassName('grid_item')[0].getElementsByTagName('img');
    /* alert(i.height); */
    // var src = i.src;
    // b =  new Image;
    // b.src = src;
    /* alert(b.height); */

/*    var imageHeight = i.height;
    var rawHeight = 11; // Looking to Grid.scss
    var spans = Math.ceil(imageHeight / rawHeight);
    var spansText = "grid-row-end: span ";
    var spansFull = spansText + spans;*/
    // alert(spansFull);
    // document.getElementsByClassName('grid_item')[0].style.cssText = spansFull;
};