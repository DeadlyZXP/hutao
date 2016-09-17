var $=require('../libs/jquery-3.1.0.js');
var Common={
	renderHtml:function(str){
		$('body').prepend(str)
	}
};

module.exports=Common;