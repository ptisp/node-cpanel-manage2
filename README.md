CPANEL MANAGE2 Node Module
=========

CPANEL's LICENSES API Node client.

## Installation

```
npm install cpanel-licenses
```

## Usage

First you need to instantiate it.

```javascript

var config = {
    serverUrl: 'manage2.cpanel.net/',
    username: 'api_username',
    password: 'api_password',
};

var cpclient = new CPANEL(config);
```

Using the created client, call the methods you need, example:

```javascript

cpclient.licenses.addlicense(ip, packageid, groupid, opts, function(err, data){
  ...
});

cpclient.licenses.displaygroupslicense(function(err, data){
  ...
});

cpclient.licenses.changeiplicense(oldip, newip, packageid, opts, function(err, data){
  ...
});

cpclient.licenses.listlicense(opts, function(err, data){
  ...
});

cpclient.licenses.reactivatelicense(liscid, opts, function(err, data){
  ...
});

cpclient.licenses.transferlicense(groupid, packageid, ip, function(err, data){
  ...
});

```


## Examples

Check the examples folder for more specific use cases examples.

## License

Licensed under the Apache license, version 2.0 (the "license"); You may not use this file except in compliance with the license. You may obtain a copy of the license at:

http://www.apache.org/licenses/LICENSE-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the license is distributed on an "as is" basis, without warranties or conditions of any kind, either express or implied. See the license for the specific language governing permissions and limitations under the license.
