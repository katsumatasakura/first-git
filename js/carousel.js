$(function() {
    function sliderSetting() {

        var width = $(window).width();

        if (width <= 768) {
            $('.carousel').not('.slick-initialized').slick({
                autoplay: false,
                arrows: true,
                dots: true,
                fade: false,
            });
        }
        else {
            $('.slide.slick-initialized').slick('unslick');
        }
    }

    sliderSetting();

    $(window).resize(function() {
        sliderSetting();
    });
});
