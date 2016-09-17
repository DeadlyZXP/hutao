$(function(){
	var isOk=true;
	$(".login-btn").click(function(){
		var UseName=$(".loginphone").val();
		var UsePassword=$(".loginpassword").val();
		var arr=[];
		arr.push(UseName);
		arr.push(UsePassword);
		// alert(arr);
		if(UseName){
			if (UsePassword) {
				$.ajax({
					url:"http://localhost:8080/user/loginget?name="+arr[0]+"&password="+arr[1],
					success:function(result){
						if(result==1){
                            // alert("登陆成功");
                            isOk=true;
                            if (isOk) {
                            	//alert(1);
                            	 window.location.href='http://localhost:8080/hutao/index.html?uid=1&username='+arr[0];
                            }
                        }else{
                            alert("账号密码不正确");
                            isOk=false;
                        }
					},
					dataType:"json",
				})
			}else{
				alert("密码不能为空");
			}
		}else{
			alert("用户名不能为空");
		}
	})
})