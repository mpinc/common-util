/**
 * Created by ling xue on 2016/3/15.
 */
var assert = require("assert");
var sysError = require('../lib/index.js').systemError;
var sysMsg = require('../lib/index.js').systemMsg;

exports.test = function (client) {
    describe('service: system error', function () {
        it('should get a internal error', function (done) {
            var internalError = sysError.InternalError('mp error' ,"mp out error message");
            assert(internalError.message == 'mp error',"error message is matched ")
            assert(internalError.body.outMsg == 'mp out error message',"error body message is matched ")
            done();
        });

        it('should get a auth token  error', function (done) {
            var authlError = sysError.NotAuthorizedError('mp error' ,"mp out error message");
            assert(authlError.body.outMsg == sysMsg.SYS_AUTH_TOKEN_ERROR,"error message is matched ")
            done();
        });
    });
}