require('../libs/jquery.js');

var header = require('../header.js');

//
// console.log('commonJS');

var tplHeader = require('../templates/header.string');

$('body').prepend(tplHeader);

header.drawHeader('Header detail');
