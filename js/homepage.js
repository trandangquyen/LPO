(function($) {

    function runSlider(){
         $('.flexslider').flexslider({
            animation: "slide",
            controlNav: "thumbnails"
          });
    }
    function runCarousel() {
        var imgWidth = 0 ;
        var imgHeight = 0 ;
        var crHeight = 0 ;
        var imgMargin = 0 ;
        var windowWidth = $(window).width();
        if ( windowWidth <= 320) {
            imgWidth = 250;imgHeight = 200; crHeight = 200;imgMargin = 0.2;
        }
        else if (windowWidth <= 600) {
            imgWidth = 280;imgHeight = 230; crHeight = 280;imgMargin = 0.25;
        }
        else {
            imgWidth = 540;imgHeight = 405; crHeight = 550;imgMargin = 0.3;
        }

        $('.carousel').carousel({
            hAlign: 'left',
            hMargin: imgMargin,
            frontWidth: imgWidth,
            frontHeight: imgHeight,
            carouselWidth: 600,
            carouselHeight: crHeight,
            left: 0,
            shadow: false,
            buttonNav: 'none',
            directionNav: false,
            slidesPerScroll: 3
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
            focusOnSelect: true,
            variableWidth: true
        });
        // On swipe event
        $('.tutor-slider').on('swipe', function(event, slick, direction){
            console.log('helllo');
            $(this).find('.tt-profile.collapse').removeClass('collapse');
            $(this).find('.view-more.active').removeClass('active');
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
    function windowResize(){
        $(window).resize(function(){
            setTimeout(function(){ 
                location.reload();
            }, 500);            
        });
    }
    function expandTutorProfile(){
        $('.tt-item .view-more').click(function(event) {
            event.preventDefault();
            $(this).toggleClass('active');
            $(this).parent().siblings('.tt-profile').toggleClass('collapse');
        });
    }
    function hoverCircleActive(){
        $(".puls-circle .text").mouseenter(function(){
            $(this).parent().addClass('active');  
        });
        $(".puls-circle .text").mouseleave(function(){
            $(this).parent().removeClass('active');  
        });
    }
    function changeTextExpand() {
        var currentText ='展开';
        $('.tt-footer .view-more').click(function(event) {
            event.preventDefault();
            $(this).toggleClass('expand');
            if($(this).hasClass('expand')){
                $(this).text('收起');
            }
            else{
                $(this).text(currentText);
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
        windowResize();
        expandTutorProfile();
        hoverCircleActive();
        changeTextExpand();
        setTimeout(function(){ 
           $('section.part-2 .tt-item .tt-profile').css({
               'max-height': '245px'
           });
           $('section.success .std-item .std-profile').css({
               'max-height': '143px'
           });
        }, 100);

    });
})(jQuery);