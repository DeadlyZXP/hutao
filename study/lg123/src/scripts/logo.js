$.aniAuto();
$("#trbtn").hover(function () {
    $(".logo").find(".img2").addClass("fadeInLeft").removeClass("fadeOutLeft");
    $(".logo").find(".img1").addClass("fadeOutRight").removeClass("fadeInRight");
},function(){
    $(".logo").find(".img2").addClass("fadeOutLeft").removeClass("fadeInLeft");
    $(".logo").find(".img1").addClass("fadeInRight").removeClass("fadeOutRight");
});