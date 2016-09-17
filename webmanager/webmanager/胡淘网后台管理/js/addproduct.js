$(function(){
	$(".check").click(function(){
		var isOk=false;
		var productName=$("#productName").val();
		var productInf=$("#productInf").val();
		var productObj=$("#productObj").val();
		var productId=$("#productId").val();
		var productOld=$("#productOld").val();
		var productNew=$("#productNew").val();
		var productMany=$("#productMany").val();
		var productSub=$("#productSub").val();
		var productPeo=$("#productPeo").val();
		var productInfM=$("#productInfM").val();
		var productImg1=$("#productImg1").val();
		var productImg2=$("#productImg2").val();
		var productImg3=$("#productImg3").val();
		var productImg4=$("#productImg4").val();
		var productImg5=$("#productImg5").val();
		var productImg6=$("#productImg6").val();
		var productImg7=$("#productImg7").val();
		var productIP=$("#productIP").val();
		var productC=$("#productC").val();
		var productW=$("#productW").val();
		var productM=$("#productMethod").val();
		if(productName){
			if(productInf){
				if(productObj){
					isOk=true;
				}
			}
		}
		var dataJsonOb={
                "id":productId,
                "name":productName,
                "price":productOld,
                "newprice":productNew,
                "productpeople":productPeo,
                "pricesub":productSub,
                "productInf":productInf,
                "productInfM":productInfM,
                "object":productObj,
                "many":productMany,
                "imgsrc1":productImg1,
                "imgsrc2":productImg2,
                "imgsrc3":productImg3,
                "imgsrc4":productImg4,
                "imgsrc5":productImg5,
                "imgsrc6":productImg6,
                "imgsrc7":productImg7,
                "brand":productIP,
                "country":productC,
                "weight":productW,
                "method":productM
            }
//		alert(dataJsonOb);
		 var dataJsonStr=JSON.stringify(dataJsonOb);
//		 alert(dataJsonStr);
		if(isOk){
			$.ajax({
			url:"../product/CreateUpdateProduct_post",
			data:{
				"id":productId,
                "datajson":dataJsonStr
			},
			success:function(data){
                    if(data==1){
                        alert("操作成功");
                    }else{
                        alert("操作失败");
                    }
                },
            error:function(){
                alert("ajax error");
            },
            dataType:"json",
            type:"post"
		})
		}
	})
})
