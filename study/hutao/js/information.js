$(function(){
	var str=location.href;
    var num=str.indexOf("?"); //？ 的位置
    str=str.substr(num+1).split("object=");
    // var dr=str.split("&");
    // alert(str[1].split(","))
    $.ajax({
    	url:"../product/GetProductsByPage_get",
		data:{
			"pagesize":100,
			"pageindex":1
		},
		success:function(data){
			for(var i=0;i<data.length;i++){
				var dataObj=JSON.parse(data[i].Data);
				// alert(dataObj);
				var j=0;
				if(dataObj.object==str[1].split(",")){
					var add='<li id=\"'+dataObj.id+'\"><div class=\"libox\"><div class=\"pic-box\"><img src=\"img/'+dataObj.imgsrc1+'\"></div><div class=\"good-name\">'+dataObj.name+'</div><div class=\"good-price\"><span>￥'+dataObj.newprice+'</span><span>市场价'+dataObj.price+'</span></div></div></li>';
					$(".inforbody-list").append(add);
				}
			}
		},
		error:function(){
            	alert("ajax error");
        	},
        dataType:"json"
	});
	$(".inforbody-list").on("click","li",function(){
		var arr=$(this).attr("id");
		window.location.href='http://localhost:8080/hutao/product.html?id='+arr;
	})
})