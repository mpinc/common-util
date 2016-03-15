/**
 * Created by ling xue on 2016/3/15.
 */

var assert = require("assert");
var commonUtil = require('../lib/index.js');

exports.test = function (client) {
    describe('service: encrypt', function () {
        it('should get a md5 encoded string', function (done) {
            var encodedString = commonUtil.encrypt.encryptByMd5('mp');
            assert(encodedString != null ,"encoded success") ;
            console.log("Encrypt md5 test success :"+encodedString);
            done();
        });
    });
}