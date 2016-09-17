$(function(){
	//获取数据填充页面
     var a=7;
    for(var i=1;i<=a;i++){
        var ID="index"+"0"+i;
        $.ajax({
        	url:"../product/GetProductById_get",
        	data:{
        		"id":ID
        	},
        	success:function(data){
        		var dataObj=JSON.parse(data.Data);
        		// alert(dataObj.name);
        		var str=$("<div><img id='"+dataObj.id+"' src='img/"+dataObj.imgsrc7+"'></div><div class='home-sale-right'><div class='home-sale-right-top'><h3>距离结束还有:</h3><p><span class='home-sale-day'>23</span>天<span class='home-sale-hour'>4</span>时<span class='home-sale-minter'>59</span>分</p><img src='img/australia.jpg'></div><div class='home-sale-right-bottom'><p class='sale-bottom-top'><span><strong>"+dataObj.pricesub+"</strong><i>折</i></span><a href='#' class='home-sale-a'>"+dataObj.name+"</a></p><p class='sale-bottom-second'>"+dataObj.productInf+"</p><p class='sale-bottom-third'>"+dataObj.name+"</p><p class='sale-bottom-last'><span>￥"+dataObj.newprice+"</span><i>￥"+dataObj.price+"</i><a href='#''>立即购买</a><em>"+dataObj.productpeople+"人已购买</em></p></div></div>");
        		$(".home-sale").append(str);
        	},
        	error:function(){
        		alert("ajax error");
        	},
        	dataType:"json"
        })
    }
})