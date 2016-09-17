//事件兼容
var EX={
	getEvent:function(event){
		return event||window.event;
	},
	getTarget:function(event){
		return event.target||event.srcElement;
	},
	Stopropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble=true;
		}
	},
	PrevebtDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue=false;
		}
	},
	AddEventListener:function(dom,type,functionN){
		if(dom.addEventListener){
			dom.addEventListener(type,functionN,false);
		}else if(dom.attachEvent){
			dom.attachEvent("on"+type,functionN);
		}
		else{
			dom["on"+type]=functionN;//中括号里客当变量  var a="onclick"; dom.a=func..不可以  dom.[a]=func keyi		}
	},
	RemoveEventListener:function(dom,type,functionN){
		if(dom.removeEventListener){
			dom.removeEventListener(type,functionN,false);
		}else{
			dom.detachEvent("on"+type,functionN);
		}
	}
}
