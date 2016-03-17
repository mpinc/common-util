/**
 * Created by ling xue on 2016/3/15.
 */

var request= require('supertest');
var httpRequest = request("http://127.0.0.1:8080");

var encryptTest = require('./Encrypt.test.js').test(request);
var sysErrorTest = require('./SystemError.test.js').test(request);
//var moduleUtilTest = require('./ModuleUtil.test.js').test(request);
var oAuthUtilTest = require('./OAuthUtil.test.js').test(httpRequest);