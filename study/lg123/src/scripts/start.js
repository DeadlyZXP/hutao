$.aniAuto();
$("#trbtn").hover(function () {
    $(".logo").find(".img2").addClass("fadeInLeft").removeClass("fadeOutLeft");
    $(".logo").find(".img1").addClass("fadeOutRight").removeClass("fadeInRight");
},function(){
    $(".logo").find(".img2").addClass("fadeOutLeft").removeClass("fadeInLeft");
    $(".logo").find(".img1").addClass("fadeInRight").removeClass("fadeOutRight");
});
/**/

$("[data-toggle='popover']").popover();
cartoonClick();
function cartoonClick(){
    $("#cartoon_cbox").on("change",function(){
       if($(this).prop("checked")){
          $(".col1").stop().animate({"width":0},1000,function(){
              $(this).css("display","none")
          })
       }else {
           $(".col1").stop().css("display","block").animate({"width":104},1000)
       }
    })
}


