var CPANEL = require('../cpanel');

var config = {
    serverUrl: 'manage2.cpanel.net/',
    username: process.env.CPANEL_USER,
    password: process.env.CPANEL_PASSWORD,
};

var cpexample = new CPANEL(config);

var opt = {
  expired: 0
};

cpexample.licenses.listlicense(opt, function(err, data){
  if (err) {
    console.log('ERROR');
    console.log(err);
  } else {
    console.log(data);
  }
});
