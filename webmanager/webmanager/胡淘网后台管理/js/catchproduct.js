$(function(){
	$.ajax({
		url:"../product/GetProductsByPage_get",
		data:{
            "pagesize":10,
            "pageindex":1
        },
		success:function(data){
			for(var i=0;i<data.length;i++){
                    //把data 里面的string 主动转成对象；
                var dataObj=JSON.parse(data[i].Data);
                //alert(dataObj);
//              var trOb=$("<tr><td>"+dataObj.name+"</td><td>"+dataObj.price+"</td><td><img src=\""+dataObj.imgsrc+"\"/></td><td><a href='07-manageredit.html?id="+dataObj.id+"'>编辑</a></td></tr>");
//              $("#tb1").append(trOb);
//alert(dataObj.name);
				var str=$("<tr><td class='tableid'>"+dataObj.id+"</td><td>"+dataObj.name+"</td><td>"+dataObj.productInf+"</td><td>"+dataObj.price+"</td><td><button style='width:80px;height:40px;border:none;background:lightgray' class='productre1' data-toggle=\"modal\" data-target=\".bs-example-modal-lg\">详细信息</button></td><td><button style='width:80px;height:40px;border:none;background:lightgray' class='productre' data-toggle=\"modal\" data-target=\".bs-example-modal-lg\">修改</button></td><td><button style='width:80px;height:40px;border:none;background:lightgray' class='productdel' c>删除</button></td></tr>");
				$(".table-main").append(str);
//				alert(dataObj);
               }
            },
        error:function(){
            alert("ajax error");
        },
        dataType:"json"
	});
	$(".page-align").on("click","li",function(){
//		alert($(this).html());
		$(".table-main-tbody").html("");
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		var sa=$(this).children().html();
		$.ajax({
			url:"../product/GetProductsByPage_get",
			data:{
	            "pagesize":10,
	            "pageindex":sa
	        },
			success:function(data){
				for(var i=0;i<data.length;i++){
	                    //把data 里面的string 主动转成对象；
	                var dataObj=JSON.parse(data[i].Data);
	//              var trOb=$("<tr><td>"+dataObj.name+"</td><td>"+dataObj.price+"</td><td><img src=\""+dataObj.imgsrc+"\"/></td><td><a href='07-manageredit.html?id="+dataObj.id+"'>编辑</a></td></tr>");
	//              $("#tb1").append(trOb);
	//alert(dataObj.name);
					var str=$("<tr><td class='tableid'>"+dataObj.id+"</td><td>"+dataObj.name+"</td><td>"+dataObj.productInf+"</td><td>"+dataObj.price+"</td><td><button style='width:80px;height:40px;border:none;background:lightgray' class='productre1' data-toggle=\"modal\" data-target=\".bs-example-modal-lg\">详细信息</button></td><td><button style='width:80px;height:40px;border:none;background:lightgray' class='productre' data-toggle=\"modal\" data-target=\".bs-example-modal-lg\">修改</button></td><td><button style='width:80px;height:40px;border:none;background:lightgray' class='productdel' c>删除</button></td></tr>");
					$(".table-main").append(str);
	//				alert(dataObj);
	               }
	            },
	        error:function(){
	            alert("ajax error");
	        },
	        dataType:"json"
		});
	})
})
