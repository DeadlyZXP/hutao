$.aniAuto();
$("#trbtn").hover(function () {
    $(".logo").find(".img2").addClass("fadeInLeft").removeClass("fadeOutLeft");
    $(".logo").find(".img1").addClass("fadeOutRight").removeClass("fadeInRight");
},function(){
    $(".logo").find(".img2").addClass("fadeOutLeft").removeClass("fadeInLeft");
    $(".logo").find(".img1").addClass("fadeInRight").removeClass("fadeOutRight");
});
login();
findpassword();
zhuce();
denglu();

function denglu(){
        $("#btnLogin").on("click",function(){
            $.ajax({
                url:"../user/loginget",
                data:{
                    "name":$("#log_name").val(),
                    "password":$("#log_password").val()
                },
                success:function(data){
                    if(data==1){
                        window.open("backstage.html?userName="+$("#log_name").val(),"_self")
                    }else {
                        alert("登录失败")
                    }
                }
            })
        })

}
function zhuce(){
    $("#reg_phone").blur(function(){
        $.ajax({
            url:"../user/CheckUserNameGet",
            "data":{
                username:$("#reg_phone").val(),
            },
            "success":function(data){
                if(data==1){
                    alert("该账号已存在");
                    $("#zhuce").fadeOut(1000)
                }else{
                    alert("该账户可用");
                    $("#zhuce").fadeIn(1000)
                }

            }
        })
    })
$("#zhuce").click(function(){

    $.ajax({
        "url":"../user/registerGet",
        "data":{
            name:$("#reg_phone").val(),
            email:$("#reg_email").val(),
            password:$("#log-password").val()
        },
        success:function(){
            alert("注册成功")
        },
        error:function(){
            alert("注册失败")
        }
    })
})
}

function login(){
    $("#changePanel").click(function(){
        if($(this).text().trim()=="雇主注册"){
            $(this).find("span").text("已经有帐号了？立即登录");
           $("#bluetitle").html("请输入您的联系方式...");
            $(".to_position_top").fadeOut(0);
            $(".RegistPanel").fadeIn(200);


        }else {
            $(this).find("span").text("雇主注册");
            $("#bluetitle").html("请登录......");
            $(".RegistPanel").fadeOut(0);
            $(".to_position_top").fadeIn(200);
        }
    })
}
function findpassword(){
    $("#findPassword").click(function(){
        $(".findpassword").toggle()
    })}