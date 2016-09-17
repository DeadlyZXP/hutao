/**
 * Created by Administrator on 2016/9/6.
 */
//侧边栏点击消失
$(function () {
    var oTop=$(".body-right-bottom");
    oTop.click(function(){
        $('body,html').animate({"scrollTop":0},500)
    })
    $(".close-two").click(function () {
        $("#body-right").hide();
    });
//底部点击消失
    $("#hh-img-button").click(function () {
        $("#hh-img-box").hide();
        $("#hh-img").hide();
        $("#hh-img-button").hide();
    });
    //登录页点击更换
    $(".login-ways-two").click(function () {
        //改变checked
        $(".login-ways-one").prop("checked",false);
        $(".login-ways-two").prop("checked",true);
        $(".login-in").css("display","none");
        $(".login-in2").css("display","block");
    });
    $(".login-ways-one").click(function () {
        $(".login-ways-two").prop("checked",false);
        $(".login-ways-one").prop("checked",true);
        $(".login-in2").css("display","none");
        $(".login-in").css("display","block");
    });
    //屏幕中央点击关闭
    $(".screen-center-close").click(function () {
        $(".screen-center").hide();
        $(".screen-center-box").hide();
    });
    var str=location.href;
    var num=str.indexOf("?"); //？ 的位置
    str=str.substr(num+1);
    var dr=str.split("&");
    // alert(dr);
    if(dr[0]=="uid=1"){
        // alert(1);
        $(".screen-center").hide();
        $(".screen-center-box").hide();
        $("#hh-img-box").hide();
        $("#hh-img").hide();
        $("#hh-img-button").hide();
        // $(".header-name").style("display","none");
        // $(".header-name").style("display","block");
        $(".header-name").html(dr[1].split("username="));
    }
    $(".home-sale").on("click","img",function(){
        // alert(this.id);
        var att=$(".header-name").html();
        if(att=="登录"){
            window.location.href='http://localhost:8080/hutao/product.html?id='+this.id;
        }else{
            window.location.href='http://localhost:8080/hutao/product.html?uid=1&'+dr[1]+'&id='+this.id;
        }
    })
    $(".header-name").click(function(){
        window.location.href='http://localhost:8080/hutao/product.html?uid=1&'+dr[1]+'&id='+this.id;
    })
    $(".uc-tittle").on("click","li",function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
})
function MoveBodyRight() {
    var Odiv=document.getElementById("body-right-move");
    var Odiv1=document.getElementById("body-right");
    Odiv.onmousedown=function(e){
        e=e||window.event;
        var etop=e.offsetY;
        var eleft=e.offsetX;
//				document.onmousemove=function(e){
        document.onmousemove=function(e){
            e=e||window.event;
            var top=e.clientY-etop;
            var left=e.clientX-eleft;
            Odiv1.style.top=top+"px";
            Odiv1.style.left=left+"px";
        }
        document.onmouseup=function () {
            document.onmousemove=null;
        }
    }
}



