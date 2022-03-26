// カルーセル
$(function() {
    function sliderSetting() {

        var width = $(window).width();

        if (width <= 768) {
            $('.grid-layout').not('.slick-initialized').slick({
                autoplay: false,
                autoplaySpeed: 10000,
                arrows: true,
                dots: true,
                fade: true,
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
