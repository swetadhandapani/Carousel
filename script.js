const multipleItemCarousel = document.querySelector('#carouselExampleControls');



if(window.matchMedia("(min-width:576px").matches){
    const carousel = new bootstrap.Carousel(multipleItemCarousel,
    {
        interval: false
    })



    var carouselWidth = $('.carousel-inner')[0].scrollwidth;
    var cardwidth = $('.carousel-item').width();

    var scrollPosition = 0;

    $('.carousel-control-next').on ('click', function(){
        if(scrollPosition < (carouselWidth - (cardwidth*4))){
            console.log('next');
            scrollPosition = scrollPosition + cardwidth;
            $('#carouselExampleControls.carousel-inner').animate({scrollLeft: scrollPosition},600);
        }
    });

    $('.carousel-control-prev').on ('click', function(){
        if(scrollPosition > 0){
            console.log('prev');
            scrollPosition = scrollPosition - cardwidth;
            $('.carousel-inner').animate({scrollLeft: scrollPosition},600);
        }
    });

}
else{
    $(multipleItemCarousel).addClass('slide');
}



