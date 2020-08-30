(function($) {
    $(document).ready(function() {


        // start sticky
        $('.js-passage').waypoint(function(direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');



            } else {

                $('nav').removeClass('sticky');

            }

        });


    });

})(jQuery)