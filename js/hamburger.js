$(document).ready(function(){
    $("#nav-button").on("click",function(){
        $(this).toggleClass('active')
        $(".sp-nav").toggleClass('panelactive');
    });
});

$(".sp-nav a").click(function(){
    $("#nav-button").removeClass('active')
    $(".sp-nav").removeClass('panelactive')
});

