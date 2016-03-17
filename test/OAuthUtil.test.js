/**
 * Created by ling xue  on 2016/3/17.
 */
var assert = require("assert");
var commonUtil = require('../lib/index.js');
var moduleUtil = commonUtil.ModuleUtil;
var oAuthUtil = commonUtil.oAuthUtil ;

moduleUtil.setLoginUrl('localhost');
exports.test = function (client) {
    describe('service: oauth test', function () {
        it('should get a oauth error', function (done) {
            var params = {userId:1,token:'abc'};
            var req ={params:params};
            var res ={};
            var next={}
            oAuthUtil.checkUser(req,res,function(){
                console.log("success");
            });
        });
    })
};
