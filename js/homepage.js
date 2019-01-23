(function($) {

    function runSlider(){
         $('.flexslider').flexslider({
            animation: "slide",
            controlNav: "thumbnails"
          });
    }
    function runCarousel() {
        $('.carousel').carousel({
            hAlign: 'left',
            hMargin: 0.3,
            slidesPerScroll:3,
            carouselWidth: 550,
            carouselHeight: 405,
            left: 0,
            directionNav: false,
            shadow: false,
            buttonNav: 'none'
        });
    }
    function runSlickSlider() {
        $(".tutor-slider,.std-slider,.offer-slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            centerMode: true,
            centerPadding: '80px',
            focusOnSelect: true
        });
    }
    function addClassActiveTab() {
        $('.elite-tabs li').click(function(event) {
            if($(this).index() == 1) {
                $(this).siblings().addClass('no-split')
            }
            else {
                 $(this).removeClass('no-split');
                 $(this).siblings().removeClass('no-split');
            }
        });
    }
    /* ----------------------------------------------- */
    /* ------------- FrontEnd Functions -------------- */
    /* ----------------------------------------------- */

    /* OnLoad Page */
    $(document).ready(function($) {
        // runSlider();
        runCarousel();
        runSlickSlider();
        addClassActiveTab();
    });
})(jQuery);