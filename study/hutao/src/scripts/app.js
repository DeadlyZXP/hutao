var $=require('./libs/jquery-3.1.0.js');

var common=require('./utils/common.util.js');

var tplHeader=require('./tpls/header.string');
var tplIndexBody=require('./tpls/body.string');
var tplFooter=require('./tpls/footer.string');
//var list=require('./modules/index.js');
$(function(){
	common.renderHtml(tplHeader + tplIndexBody + tplFooter);
//	list();
})
