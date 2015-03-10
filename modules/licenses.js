var utils = require('../lib/utils');
var extend = utils.extend;

var Licenses = function(config) {
  this.config = config;
};

/**
 * Add License -
 * This function adds a new license to a Manage2 account.
 * @param ip - string - The IP address to which to add a license
 * @param packageid - int - The package's ID number
 * @param groupid - int - The ID of the group to which to add the license
 * @param [opts] Object
 * @param [opts.force] - boolean - Whether to force add the license to the specified IP address.
          1 — Force add the license.
          0 — Do not force add the license.
 * @param [opts.dryrun] - boolean - Whether to show error messages and price information, but not activate the license.
          1 — Show error messages and price information.
          0 — Activate the license.
 * @param callback
 */
Licenses.prototype.addlicense = function (ip, packageid, groupid, opts, callback) {
  var options = {
    output: 'json',
    ip: ip,
    packageid: packageid,
    groupid: groupid
  };

  if(typeof opts === 'function'){
    callback = opts;
  } else {
    options = extend(options,opts);
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem('XMLlicenseAdd.cgi', createOptions, callback);
};

/**
 * Display Groups License -
 * This function returns a list of the Manage2 account's groups.
 * @param callback
 */
Licenses.prototype.displaygroupslicense = function (callback) {
  var options = {
    output: 'json'
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem('XMLgroupInfo.cgi', createOptions, callback);
};

/**
 * Change a License IP Address License -
 * This function transfers an existing license.
 * @param oldip - string - The license's current IP address.
 * @param newip - string -The license's new IP address.
 * @param packageid - string - The license's package ID.
 * @param [opts] Object
 * @param [opts.force] - boolean - Whether to force a license transfer if the transfer adds a charge to a deactivated IP address.
          1 — Force a transfer.
          0 — Do not force a transfer.
 * @param [opts.dryrun] - boolean - Whether to show license information but not transfer the license.
          1 — Show license information.
          0 — Transfer the license.
 * @param callback
 */
Licenses.prototype.changeiplicense = function (oldip, newip, packageid, opts, callback) {
  var options = {
    output: 'json',
    oldip: oldip,
    newip: newip,
    packageid: packageid
  };

  if(typeof opts === 'function'){
    callback = opts;
  } else {
    options = extend(options,opts);
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem('XMLtransfer.cgi', createOptions, callback);
};

/**
 * List License Information -
 * This function returns a list of the Manage2 account's licenses.
 * @param [opts] Object
 * @param [opts.expired] - boolean - Whether to return only expired licenses.
          1 — Return only expired licenses.
          0 — Return all licenses.
 * @param callback
 */
Licenses.prototype.listlicense = function (opts, callback) {
  var options = {
    output: 'json'
  };

  if(typeof opts === 'function'){
    callback = opts;
  } else {
    options = extend(options,opts);
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem('XMLlicenseInfo.cgi', createOptions, callback);
};

/**
 * Reactivate Expired Licenses -
 * This function reactivates an account's expired cPanel license.
 * @param liscid - string - The ID of the license to reactivate.
 * @param [opts] Object
 * @param [opts.force] - boolean - Whether to force a license transfer if the transfer adds a charge to a deactivated IP address.
          1 — Force a transfer.
          0 — Do not force a transfer.
 * @param [opts.dryrun] - boolean - Whether to show license information but not transfer the license.
          1 — Show license information.
          0 — Transfer the license.
 * @param callback
 */
Licenses.prototype.reactivatelicense = function (liscid, opts, callback) {
  var options = {
    output: 'json',
    liscid: liscid
  };

  if(typeof opts === 'function'){
    callback = opts;
  } else {
    options = extend(options,opts);
  }

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem('XMLlicenseReActivate.cgi', createOptions, callback);
};

/**
 * Request a License Transfer -
 * This function requests a license transfer between companies.
 * @param groupid - int - The license's group ID.
 * @param packageid - int - The license's package ID.
 * @param ip - string - The license account's IP address.
 * @param callback
 */
Licenses.prototype.transferlicense = function (groupid, packageid, ip, callback) {
  var options = {
    output: 'json',
    groupid: groupid,
    packageid: packageid,
    ip: ip
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem('XMLtransferRequest.cgi', createOptions, callback);
};

/**
 * Request a Packages IDs -
 * This function returns the Manage2 account's packages.
 * @param callback
 */
Licenses.prototype.packagesids = function (callback) {
  var options = {
    output: 'json',
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem('XMLpackageInfo.cgi', createOptions, callback);
};

/**
 * Expire Licenses
 * This function expires a license.
 * @param licenseid - integer - The license ID to expire.
 * @param reason - string - The reason for expiration.
 * @param callback
 */
Licenses.prototype.expirelicense = function (licenseid, reason, callback) {
  var options = {
    output: 'json',
    licenseid : licenseid,
    reason: reason
  };

  var createOptions = {
    client: this,
    body: options
  };

  utils.modem('XMLlicenseExpire.cgi', createOptions, callback);
};


module.exports = Licenses;
