var header = require('../tpls/header.string');
var body = require('../tpls/body.string');
var footer = require('../tpls/footer.string');
var modal = require('../tpls/modal.string');
var scan = require('../tpls/scan.string');

module.exports = {
  renderHtml: function () {
    $('body').prepend(header+body+footer+scan+modal);
  },

  renderFooter: function () {
    var arrLink=["logo设计欣赏","ppt模板","PS教程","Java培训","市场营销","flash动画","PPT模板","PSD素材","红动中国设计论坛","酷素材","六图网","app设计","学犀牛Rhino","Logo社","公司logo设计","字体下载","3d材质库","素描","致设计","苏打苏塔设计量贩铺","一幅图","原创logo下载","字体设计","有奖征集网","展示设计","创意猫网","免费素材网","logo吧","PS家园教程网","晒标网","学ui网","LOGO设计","设计达人","logo门户网","logo设计","免费素材","LOGO收藏家","标志设计","商标设计","仿图网"];
    for(var i=0;i<arrLink.length;i++){
        $("<a href='#'>"+arrLink[i]+"</a>").appendTo($(".flinks"));
    }
  }
};
