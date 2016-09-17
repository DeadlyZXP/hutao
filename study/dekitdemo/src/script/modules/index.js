var $=require('../libs/jquery.js');
module.exports=function(){
	$.ajax({
		url:"/api/getlist",
		type:'get',
		data:{},
		success:function(res){
//			console.log(res);
			var str="";
			$.each(res.data,function(index,value){
//				console.log(value);
				str+="<li>"+value+"</li>";
				console.log(str);
			});
			$('.body ul').html(str);
		}
	});
};
