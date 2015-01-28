var fs = require('fs');
var libPath = __dirname + '/modules';

/**
 * CPANEL client
 * @param options {{username:String,serverUrl:String,password:String,apiKey:[String]}}
 */
var CPANEL = function(options) {
  var _this = this;

  this.utils = require('./lib/utils');

  this.config = options;
  this.authorized = false;

  // Add all the modules
  var files = fs.readdirSync(libPath);
  var i = 0;
  var len = files.length;
  while (i < len) {
    var name = files[i].replace('.js', '');
    var Item = require(libPath + '/' + name);
    _this[name] = new Item(this.config);
    i++;
  }

};

module.exports = CPANEL;
