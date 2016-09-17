var Cookie={
	Setcookie:function(name,value,days){
			var date=new Date();
			date.setDate(date.getDate()+days);
			document.cookie=name+"="+encodeURIComponent(value)+";expires="+date;
		},
			//获取cookie
	 Getcookie:function(name){
				var cookieValue;
				var strCookie=document.cookie;
				var arrCookie=strCookie.split("; ");
				for(var i=0;i<arrCookie.length;i++){
					var item=arrCookie[i].split("=");
					if(item[0]==name){
						cookieValue=item[1];
					}
				}
				return decodeURIComponent(cookieValue);
			},
			//删除cookie
	Removecookie:function(name){
				var date=new Date();
				date.setDate(date.getDate()-1);
				document.cookie=name+"="+";expires="+date;
				//或者
//				this.Setcookie(name,,-1);
			}
}
