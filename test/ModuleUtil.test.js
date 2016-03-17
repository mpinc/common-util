/**
 * Created by ling xue  on 2016/3/17.
 */
var assert = require("assert");
var commonUtil = require('../lib/index.js');
var moduleUtil = commonUtil.ModuleUtil
exports.test = function (client) {
    describe('service: module url', function () {
        it('should get a module url', function (done) {
            var loginUrlString = moduleUtil.getLoginUrl();
            assert(loginUrlString != null ,"get login module url success") ;
            console.log("get login url test success :"+loginUrlString);
            var testString = "http://mp.com";
            moduleUtil.setLoginUrl(testString);
            loginUrlString = moduleUtil.getLoginUrl();
            assert(loginUrlString == testString , "set login url success");
            console.log("set login url test success : " + loginUrlString);
            done();
        });
    });
}