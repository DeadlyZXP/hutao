$(function(){
	var str=location.href;
    var num=str.indexOf("?"); //？ 的位置
    str=str.substr(num+1);
    var dr=str.split("&");
    // alert(dr);
    if(dr.length==1){
    	var er=dr[0].split('id=');
    	var arr=er[1].split(',');
    	//alert(arr);
    	$.ajax({
    		url:"../product/GetProductById_get",
			data:{
				"id":arr[0]
			},
			success:function(data){
                //把data 里面的string 主动转成对象；
                var dataObj=JSON.parse(data.Data);
                // alert(dataObj.name);
                var str='<div class=\"product\"><ul class=\"product-head\"><li>胡淘&gt</li><li>'+dataObj.name+'</li></ul><div class=\"clearfix\"><div class=\"clearfix-left\"><div class=\"pic-show\"><img style=\"width:435px;height:435px\" src=\"img/'+dataObj.imgsrc1+'\"/></div><div class=\"pic-chose\"><ul><li><a href=\"#\"><img style=\"width:60px;height:60px\" src=\"img/'+dataObj.imgsrc1+'\"></a></li><li><a href=\"#\"><img style=\"width:60px;height:60px\" src=\"img/'+dataObj.imgsrc2+'\"></a></li><li><a href=\"#\"><img style=\"width:60px;height:60px\" src=\"img/'+dataObj.imgsrc3+'\"></a></li><li><a href=\"#\"><img style=\"width:60px;height:60px\" src=\"img/'+dataObj.imgsrc4+'\"></a></li><li><a href=\"#\"><img style=\"width:60px;height:60px\" src=\"img/'+dataObj.imgsrc5+'\"></a></li></ul><div class=\"pic-love\"><span><img src=\"img/heart.png\" class=\"heart1\"><img src=\"img/heart1.png\" class=\"heart2\"></span>'+'我喜欢'+'</div></div></div><div class=\"clearfix-right\"><p class=\"clearfix-right-top\">'+dataObj.name+'</p><div class=\"good-explain\"><p class=\"good-explain-top\"><span>销售价：</span><span>￥'+dataObj.newprice+'</span><span>海外直邮</span><span><a>GMH TRADING PTY LTD</a></span><span><a href=\"http://www.givemee.com/\">直达官网链接</a></span></p><p class=\"good-explain-bottom\"><span>市场价：</span><span>￥'+dataObj.price+'</span></p></div><div class=\"right-bottom-box\"> <p><span>配送:</span><span>从澳洲发货，预计10-20个工作日可送达</span></p><p><span></span><span>物流：首重重量 1000g 首重费用￥35.00 续重重量 100g 续重费用￥2.00</span></p><p><span>商家活动:全场满299澳洲直邮，包邮！！！</span></p></div><dl class=\"good-attach1\"><dt>数量:</dt><dd><div><span class=\"good-attach1-span1\">-</span><span class=\"good-attach1-span2\">1</span><span class=\"good-attach1-span3\">+</span></div></dd></dl> <div class=\"good-submit\"><div class=\"good-submit-left\">立即购买</div><div class=\"good-submit-right\">加入购物车</div></div></div></div></div><ul class=\"uc-tittle\"><li class=\"uc-li1 active\">商品详情</li><li class=\"uc-li2\">产品参数</li><li class=\"uc-li2\">顾客评价</li></ul><div class=\"img6box\"><img style=\\" src=\"img/'+dataObj.imgsrc6+'\"></div>';

                $('.product-box').append(str);
			},
			error:function(){
            	alert("ajax error");
        	},
        	dataType:"json"
    	})
    }
})