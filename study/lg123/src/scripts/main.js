require('./libs/jquery.js');
require("./libs/bootstrap.min.js");
require("./libs/loaders.css.js");
require("./libs/typed.js");
require("./libs/aniAuto.js");
require("./libs/owl.carousel.min.js");
require("./libs/wow.min.js");

var commonUtil = require('./utils/common.util.js');


$(function(){
    commonUtil.renderHtml();

    $.aniAuto();
    $("#btnOn").hover(function () {
        $(".logo").find(".img2").addClass("fadeInLeft").removeClass("fadeOutLeft");
        $(".logo").find(".img1").addClass("fadeOutRight").removeClass("fadeInRight");
    },function(){
        $(".logo").find(".img2").addClass("fadeOutLeft").removeClass("fadeInLeft");
        $(".logo").find(".img1").addClass("fadeInRight").removeClass("fadeOutRight");
    });
    $(".typed").typed({
        strings: ["最快24小時为您提供设计方案!","将安排多名Logo设计师为您创作初稿!","提供免费logo修改，直到您100%满意!"],
        typeSpeed: 100,
        backSpeed:0,
        backDelay:1000,
        loop:true
    });
    spbPosition();
    function spbPosition(){
        var i=0;
        $('.spb').each(function(){
            $(this).css({"left":i*250+200});
            i++;
        })
    };

    $(".owl-demo")
    $('#owl-demo').owlCarousel({
        "items":3
    });
    new WOW().init();
    ajaxImgList("#li1");
    otherbtn();
    newAdd()
    function newAdd(){
        $.ajax({
            url:"/mock/new.txt",
            success:function(data){
              $("#add").text(data.add);
                $("#count").text(data.count);
                $("#desinger").text(data.designer);
            },
            dataType:"json"
        })
    }
    function otherbtn(){
        $(".btn-more").click(function(){

            ajaxImgList($("#myTab .active").find("a").attr("href"));
        });
        $("a[href='#li2']").one("click",
            function(){
                ajaxImgList("#li2");
            }
        )
        $("a[href='#li3']").one("click",
            function(){
                ajaxImgList("#li3");
            }
        )
        $("a[href='#li4']").one("click",
            function(){
                ajaxImgList("#li4");
            }
        )
        $("a[href='#li5']").one("click",
            function(){
                ajaxImgList("#li5");
            }
        )
    }

    $(document).on("click",".imgouter",function(){
        var $nowId =$(this).attr("data-Uid");

        $.ajax({
            url:"/mock/imgData.txt",
            success:function(data){
                 $(".imgbox").eq(0).find("img").attr("src",data[$nowId].mainImg);
                if(data[$nowId].taocanName=="bg-red"){
                     $("#taocanName").css("background","#e64b38")
                }else if(data[$nowId].taocanName=="bg-blue" ){
                    $("#taocanName").css("background","#08c");
                }else {
                    $("#taocanName").css("background","#00b22d");
                }
                $("#taocanName").text(data[$nowId].taocanChinese);
                $(".cd").find("div").eq(0).html(data[$nowId].mainBusiness);
                //alert(data[$nowId].imgSrc[0])
                /*alert(data[$nowId].imgSrc.length);*/
                $(".pics").children().remove();
                for(var i=0;i<data[$nowId].imgSrc.length;i++){
                    /*$("<img class='img-thumbnail src='"+data[$nowId].imgSrc[i]+"'/>").appendTo($(".pics"));*/
                    $("<img class=img-thumbnail  style='float: left'>").attr({"src":data[$nowId].imgSrc[i]}).appendTo($(".pics"));
                    /*$(".pics").find("img").eq(i).attr({"src":data[$nowId].imgSrc[i]})*/
                }


            },
            dataType:"json"

        })
        $('#myModal').modal( )
    })
    function ajaxImgList(now){
        $.ajax({
            url:"/mock/imgData.txt",
            success:function(data){
                for(var i=0;i<12;i++){
                        $("<div class=\"imgouter\" data-Uid="+data[i].Uid+"><span class="+data[i].taocanName+">"+data[i].taocanChinese+"</span><img class='logos' src="+data[i].mainImg+"></div>").appendTo($(now))}
            },
            dataType:"json"
        })
    }

    commonUtil.renderFooter();

});
