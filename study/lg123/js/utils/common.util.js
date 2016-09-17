var header = require('../tpls/header.string');
var body = require('../tpls/body.string');
var footer = require('../tpls/footer.string');
var modal = require('../tpls/modal.string');
var scan = require('../tpls/scan.string');

module.exports = {
  renderHtml: function () {
    $('body').prepend(header+body+footer+scan+modal);
  }
};
