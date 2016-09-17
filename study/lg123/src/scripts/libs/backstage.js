$(function(){
    new WOW().init();
    $("#addnew").click(function(){

        $(".box h2").hide(500);
        $("#wind").attr({"src":"addpage.html","scrolling":"no"}).css({"width":"calc(100% - 200px)","height":"100%"})


        event.preventDefault();
    });
    $("#see").click(function(){
        $(".box h2").hide(500);
        $("#wind").attr({"src":"see.html","scrolling":"auto"}).css({"width":"calc(100% - 200px)","height":"100%"})
        event.preventDefault();
    });
    $("#xiugai").click(function(){
        $(".box h2").hide(500);
        $("#wind").attr({"src":"addpage.html","scrolling":"no"}).css({"width":"calc(100% - 200px)","height":"100%"})


        event.preventDefault();
    });
    $("#del").click(function(){
        $(".box h2").hide(500);
        $("#wind").attr({"src":"del.html","scrolling":"no"}).css({"width":"calc(100% - 200px)","height":"100%"})


        event.preventDefault();
    })
    function UrlSearch()
    {
        var name,value;
        var str=location.href; //取得地址栏的url
        var num=str.indexOf("?");  //？ 的位置
        str=str.substr(num+1); //取得所有参数  获取？后面的url内容。
        var arr=str.split("&"); //各个参数放到数组里  ["pid=1"]
        for(var i=0;i < arr.length;i++){
            num=arr[i].indexOf("=");
            if(num>0){
                name=arr[i].substring(0,num);
                value=arr[i].substr(num+1);
                this[name]=value;
            }
        }
    }
    var request=new UrlSearch(); //实例化
    $("#username").text(request.userName)


})

