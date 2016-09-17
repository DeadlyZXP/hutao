var commonUtil = require('./utils/common.util.js');

$(function(){
    commonUtil.renderHtml();
    // $.aniAuto();
    // $("#btnOn").hover(function () {
    //     $(".logo").find(".img2").addClass("fadeInLeft").removeClass("fadeOutLeft");
    //     $(".logo").find(".img1").addClass("fadeOutRight").removeClass("fadeInRight");
    // },function(){
    //     $(".logo").find(".img2").addClass("fadeOutLeft").removeClass("fadeInLeft");
    //     $(".logo").find(".img1").addClass("fadeInRight").removeClass("fadeOutRight");
    // });
    // $(".typed").typed({
    //     strings: ["最快24小時为您提供设计方案!","将安排多名Logo设计师为您创作初稿!","提供免费logo修改，直到您100%满意!"],
    //     typeSpeed: 100,
    //     backSpeed:0,
    //     backDelay:1000,
    //     loop:true
    // });
    // spbPosition();
    // function spbPosition(){
    //     var i=0;
    //     $('.spb').each(function(){
    //         $(this).css({"left":i*250+200});
    //         i++;
    //     })
    // };
    //
    // $(".owl-demo")
    // $('#owl-demo').owlCarousel({
    //     "items":3
    // });
    // new WOW().init();
    // footer();
    // ajaxImgList("#li1");
    // otherbtn();
    // newAdd()
    // function newAdd(){
    //     $.ajax({
    //         url:"js/new.txt",
    //         success:function(data){
    //           $("#add").text(data.add);
    //             $("#count").text(data.count);
    //             $("#desinger").text(data.designer);
    //         },
    //         dataType:"json"
    //     })
    // }
    // function otherbtn(){
    //     $(".btn-more").click(function(){
    //
    //         ajaxImgList($("#myTab .active").find("a").attr("href"));
    //     });
    //     $("a[href='#li2']").one("click",
    //         function(){
    //             ajaxImgList("#li2");
    //         }
    //     )
    //     $("a[href='#li3']").one("click",
    //         function(){
    //             ajaxImgList("#li3");
    //         }
    //     )
    //     $("a[href='#li4']").one("click",
    //         function(){
    //             ajaxImgList("#li4");
    //         }
    //     )
    //     $("a[href='#li5']").one("click",
    //         function(){
    //             ajaxImgList("#li5");
    //         }
    //     )
    // }
    //
    // $(document).on("click",".imgouter",function(){
    //     var $nowId =$(this).attr("data-Uid");
    //
    //     $.ajax({
    //         url:"js/imgData.txt",
    //         success:function(data){
    //              $(".imgbox").eq(0).find("img").attr("src",data[$nowId].mainImg);
    //             if(data[$nowId].taocanName=="bg-red"){
    //                  $("#taocanName").css("background","#e64b38")
    //             }else if(data[$nowId].taocanName=="bg-blue" ){
    //                 $("#taocanName").css("background","#08c");
    //             }else {
    //                 $("#taocanName").css("background","#00b22d");
    //             }
    //             $("#taocanName").text(data[$nowId].taocanChinese);
    //             $(".cd").find("div").eq(0).html(data[$nowId].mainBusiness);
    //             //alert(data[$nowId].imgSrc[0])
    //             /*alert(data[$nowId].imgSrc.length);*/
    //             $(".pics").children().remove();
    //             for(var i=0;i<data[$nowId].imgSrc.length;i++){
    //                 /*$("<img class='img-thumbnail src='"+data[$nowId].imgSrc[i]+"'/>").appendTo($(".pics"));*/
    //                 $("<img class=img-thumbnail  style='float: left'>").attr({"src":data[$nowId].imgSrc[i]}).appendTo($(".pics"));
    //                 /*$(".pics").find("img").eq(i).attr({"src":data[$nowId].imgSrc[i]})*/
    //             }
    //
    //
    //         },
    //         dataType:"json"
    //
    //     })
    //     $('#myModal').modal( )
    // })
    // function ajaxImgList(now){
    //     $.ajax({
    //         url:"js/imgData.txt",
    //         success:function(data){
    //             for(var i=0;i<12;i++){
    //                     $("<div class=\"imgouter\" data-Uid="+data[i].Uid+"><span class="+data[i].taocanName+">"+data[i].taocanChinese+"</span><img class='logos' src="+data[i].mainImg+"></div>").appendTo($(now))}
    //         },
    //         dataType:"json"
    //     })
    // }
    //
    //
    //
    // function footer(){
    //     var arrLink=["logo设计欣赏","ppt模板","PS教程","Java培训","市场营销","flash动画","PPT模板","PSD素材","红动中国设计论坛","酷素材","六图网","app设计","学犀牛Rhino","Logo社","公司logo设计","字体下载","3d材质库","素描","致设计","苏打苏塔设计量贩铺","一幅图","原创logo下载","字体设计","有奖征集网","展示设计","创意猫网","免费素材网","logo吧","PS家园教程网","晒标网","学ui网","LOGO设计","设计达人","logo门户网","logo设计","免费素材","LOGO收藏家","标志设计","商标设计","仿图网"];
    //     for(var i=0;i<arrLink.length;i++){
    //         $("<a href='#'>"+arrLink[i]+"</a>").appendTo($(".flinks"));
    //     }
    //
    // }
})
