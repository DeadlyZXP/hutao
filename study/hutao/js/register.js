/**
 * Created by Administrator on 2016/9/9.
 */
$(function () {
    var trueOr=false;
    var falseOr=false;
    //注册栏验证注册的名字是否存在
    $(".resgister-tel").blur(function () {
        var Text=$(".resgister-tel").val();
        var UserV=$(".resgister-top-bottom");
        var isOk=true;
        //验证输入的是否为手机号码
        if(Text && /^1[3|4|5|8]\d{9}$/.test(Text)){

            //对的
        } else{
            isOk=false;
            //不对
        }
        // alert(Text);
        if(Text){
            if(isOk){
                $.ajax({
                    url:"http://localhost:8080/user/CheckUserNameGet?username="+Text,
                    success:function (result) {
                        if(result==1){
                            // alert("用户已经存在");
                            UserV.html("手机号已注册");
                        }else {
                            // alert("用户可以使用");
                            UserV.html("手机号可以使用");
                        }
                    },
                    dataType:"json",
                })
            }else{
               UserV.html("请填入正确的手机号"); 
            }
        }else {
            // UserV.("请填入手机号");
        }
    })
     //生成验证码
    $(".resgister-second-btn").click(function () {
        Make();
        // alert(crr);
    })
    //失去焦点事件
    $("#resgister-pho").blur(function () {
        Contrast();
    })
    var ar=[];
    $(".resgister-third").blur(function(){
        ar.push($(this).val());
    })
    //判断两次密码是否相同
    $(".resgister-forth").blur(function(){
        ar.push($(this).val());
        // alert(ar);
        // alert(ar[0]==ar[1])
        if(ar[0]==ar[1]){
            $("#resgister-forth-bottom").html("两次密码相同");
            falseOr=true;
        }else{
            $("#resgister-forth-bottom").html("两次密码不一致");
        }
    })
    //注册
    // if(trueOr){
        $(".resgister-sixth").click(function(){ 
        alert(trueOr)
        var password=$("#resgister-third-bottom").val();
        var phone=$(".resgister-tel").val();
        var dataJsonOb={
            "id":1,
            "Name":phone,
            "password":ar[0],
            "imgsrc":null
        }
        // if(trueOr){
        //     if(falseOr){
                $.ajax({
                    url:"http://localhost:8080/user/registerGet?name="+dataJsonOb.Name+"&password="+dataJsonOb.password,
                    success:function(result){
                        if(result==1){
                            alert("创建成功");
                            window.location.href='http://localhost:8080/hutao/login.html?uid=1';
                        }else{
                            alert("创建失败");
                        }
                    },
                    dataType:"json",
                })
        //     }
        // }
    })
    // }
})
var crr;
function Make() {
    var arr=[0,1,2,3,4,5,6,7,8,9];
    // alert(arr);
    var i=0;
    var brr=[];
    var timer=setInterval(function () {
        var Matharr=Math.floor(Math.random()*10);
        brr.push(arr[Matharr]);
        i++;
        if(i==6){
            clearInterval(timer);
            alert(brr.join(""));
            crr=brr.join("");
            // alert(typeof crr);
        }
    },10);
    // alert(brr);
    // var Matharr=Math.floor(Math.random()*10);
    // alert(Matharr);
}
function Contrast() {
    var Text=document.getElementById("resgister-pho");
    var Text1=document.getElementById("resgister-phoimg");
    var TextVal=Text.value;
    // alert( TextVal);
    if(TextVal==crr){
        //alert(1);
        Text1.style.display="block";
        trueOr=true;
        // alert(trueOr)
    }else{
        //alert(2);
        Text1.style.display="none";
    }
}

