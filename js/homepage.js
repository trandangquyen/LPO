(function($) {

    function runSlider(){
         $('.flexslider').flexslider({
            animation: "slide",
            controlNav: "thumbnails"
          });
    }
    /* ----------------------------------------------- */
    /* ------------- FrontEnd Functions -------------- */
    /* ----------------------------------------------- */

    /* OnLoad Page */
    $(document).ready(function($) {
        // runSlider();

    });

    /* OnLoad Window */
    var init = function() {

    };
    window.onload = init;
})(jQuery);