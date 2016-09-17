var $=require('../libs/jquery.js');
var Common={
	renderHtml:function(str){
		$('body').prepend(str)
	}
};

module.exports=Common;