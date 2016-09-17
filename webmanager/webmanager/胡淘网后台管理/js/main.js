$(function(){
	//修改操作
	$('.table-main-tbody').on("click",".productre",function(){
		var arr=($(this).parent().siblings(".tableid").html());
//		var dataObj;
//		alert(arr);
		$.ajax({
			url:"../product/GetProductById_get",
			data:{
				"id":arr
			},
			success:function(data){
                //把data 里面的string 主动转成对象
                var dataObj=JSON.parse(data.Data);
//  			$("#productName").val(1);
				$("#productName").val(dataObj.name);
            	$("#productInf").val(dataObj.productInf);
            	$("#productObj").val(dataObj.object);
            	$("#productNew").val(dataObj.newprice);
            	$("#productOld").val(dataObj.price);
            	$("#productId").val(dataObj.id);
            	$("#productImg1").val(dataObj.imgsrc1);
            	$("#productImg2").val(dataObj.imgsrc2);
            	$("#productImg3").val(dataObj.imgsrc3);
            	$("#productImg4").val(dataObj.imgsrc4);
            	$("#productImg5").val(dataObj.imgsrc5);
            	$("#productImg6").val(dataObj.imgsrc6);
            	$("#productImg7").val(dataObj.imgsrc7);
            	$("#productMany").val(dataObj.many);
            	$("#productInfM").val(dataObj.productInfM);
            	$("#productPeo").val(dataObj.productpeople);
            	$("#productSub").val(dataObj.pricesub);
            	$("#productIP").val(dataObj.brand);
            	$("#productC").val(dataObj.country);
            	$("#productW").val(dataObj.weight);
            	$("#productMethod").val(dataObj.method);
            	$("#productId").attr("disabled","true");
            	$(".check").show();
            },
       		error:function(){
            	alert("ajax error");
        	},
        	dataType:"json"
		})
	});
	//查看详细信息操作
	$('.table-main-tbody').on("click",".productre1",function(){
		var arr=($(this).parent().siblings(".tableid").html());
//		var dataObj;
//		alert(arr);
		$.ajax({
			url:"../product/GetProductById_get",
			data:{
				"id":arr
			},
			success:function(data){
                //把data 里面的string 主动转成对象；
                var dataObj=JSON.parse(data.Data);
//  			$("#productName").val(1);
				$("#productName").val(dataObj.name);
            	$("#productInf").val(dataObj.productInf);
            	$("#productObj").val(dataObj.object);
            	$("#productNew").val(dataObj.newprice);
            	$("#productOld").val(dataObj.price);
            	$("#productId").val(dataObj.id);
            	$("#productImg1").val(dataObj.imgsrc1);
            	$("#productImg2").val(dataObj.imgsrc2);
            	$("#productImg3").val(dataObj.imgsrc3);
            	$("#productImg4").val(dataObj.imgsrc4);
            	$("#productImg5").val(dataObj.imgsrc5);
            	$("#productImg6").val(dataObj.imgsrc6);
            	$("#productImg7").val(dataObj.imgsrc7);
            	$("#productMany").val(dataObj.many);
            	$("#productInfM").val(dataObj.productInfM);
            	$("#productPeo").val(dataObj.productpeople);
            	$("#productSub").val(dataObj.pricesub);
            	$("#productIP").val(dataObj.brand);
            	$("#productC").val(dataObj.country);
            	$("#productW").val(dataObj.weight);
            	$("#productMethod").val(dataObj.method);
//          	$("#productId").attr("disabled","true");
//          	$(".check").attr("disabled","true");
				$(".check").hide();
            },
       		error:function(){
            	alert("ajax error");
        	},
        	dataType:"json"
		})
	});
	$(".btn").click(function(){
		$(".check").show();
	})
	//删除操作
	$('.table-main-tbody').on("click",".productdel",function(){
		var brr=$(this).parent().siblings(".tableid").html();
		$.ajax({
			url:"../product/DeleteProductById_get?id="+brr,
			success:function(data){
				if(data==1){
					alert("删除成功");
					Okk=true;
				}else{
					alert("删除失败");
				}
			},
			error:function(){
				alert("ajax error");
			},
			dataType:"json"
		})		
	});
	//查询操作
	$(".btn-query").click(function(){
		var crr=$(".form-control").val();
		Clean();
		if(crr){
			$.ajax({
	    	url:"../product/GetProductById_get",
			data:{
				"id":crr
			},
			success:function(data){
                //把data 里面的string 主动转成对象；
                var dataObj=JSON.parse(data.Data);
//  			$("#productName").val(1);
				$("#productName").val(dataObj.name);
            	$("#productInf").val(dataObj.productInf);
            	$("#productObj").val(dataObj.object);
            	$("#productNew").val(dataObj.newprice);
            	$("#productOld").val(dataObj.price);
            	$("#productId").val(dataObj.id);
            	$("#productImg1").val(dataObj.imgsrc1);
            	$("#productImg2").val(dataObj.imgsrc2);
            	$("#productImg3").val(dataObj.imgsrc3);
            	$("#productImg4").val(dataObj.imgsrc4);
            	$("#productImg5").val(dataObj.imgsrc5);
            	$("#productImg6").val(dataObj.imgsrc6);
            	$("#productImg7").val(dataObj.imgsrc7);
            	$("#productMany").val(dataObj.many);
            	$("#productInfM").val(dataObj.productInfM);
            	$("#productPeo").val(dataObj.productpeople);
            	$("#productSub").val(dataObj.pricesub);
            	$("#productIP").val(dataObj.brand);
            	$("#productC").val(dataObj.country);
            	$("#productW").val(dataObj.weight);
            	$("#productMethod").val(dataObj.method);
//          	$("#productId").attr("disabled","true");
//          	$(".check").attr("disabled","true");
				$(".check").hide();
            },
       		error:function(){
            	alert("ajax error");
        	},
        	dataType:"json"
	    })
		}
	})
})
function Clean(){
	var Input=$(".form-control");
//	alert(Input.length);
	for(var i=0;i<Input.length-1;i++){
//		$(this).val(1);
	}
}

