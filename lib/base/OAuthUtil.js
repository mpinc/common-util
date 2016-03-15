/**
 * Created by ling xue on 2016/3/3.
 */

var serializer = require('serializer');
var serverLogger = require('./ServerLogger.js');
var logger = serverLogger.createLogger('OAuthUtil.js');

var options ={
    crypt_key: 'mp',
    sign_key: 'biz'
};

var clientType = {
    user : 'user'
};

var headerTokenMeta = "auth-token";

//The expired time 30 days
var expiredTime = 30*24*60*60*1000;

function _extend(dst,src) {

    var srcs = [];
    if ( typeof(src) == 'object' ) {
        srcs.push(src);
    } else if ( typeof(src) == 'array' ) {
        for (var i = src.length - 1; i >= 0; i--) {
            srcs.push(this._extend({},src[i]))
        };
    } else {
        throw new Error("Invalid argument")
    }

    for (var i = srcs.length - 1; i >= 0; i--) {
        for (var key in srcs[i]) {
            dst[key] = srcs[i][key];
        }
    };
    return dst;
}


function createAccessToken(userId,clientType,active){
    var extraData = "";
    var out = _extend({}, {
        access_token: serializer.stringify([userId, clientType, +new Date,active, extraData]),
        refresh_token: null
    });
    return out.access_token;
}

function parseAccessToken(accessToken){
    try{
        var data = serializer.parse(accessToken);
        var tokenInfo ={};
        tokenInfo.userId = data[0];
        tokenInfo.clientType = data[1];
        tokenInfo.grantDate = data[2];
        tokenInfo.active = data[3];
        tokenInfo.extraData = data[4];
        return tokenInfo;
    }catch(e){
        logger.error(' parseAccessToken :'+ e.message);
        return null;
    }
}

function checkUserAccessToken(req){
    var cookiesToken = req.headers[headerTokenMeta] ;
    if(cookiesToken == undefined){
        return null;
    }
    var tokenInfo = parseAccessToken(cookiesToken);
    if(tokenInfo == undefined){
        return null;
    }
    var resultObj = {};
    if(tokenInfo.clientType == undefined || tokenInfo.clientType != clientType.user){
        return null;
    }else if((tokenInfo.grantDate == undefined) || ((tokenInfo.grantDate + expiredTime)<(new Date().getTime()))){
        logger.warn(' checkAccessToken :'+ "Token info is expired");
        return null;
    }else if(tokenInfo.clientType == clientType.user){
        resultObj = {id:tokenInfo.userId,type:clientType.user,active:tokenInfo.active};
        return resultObj;
    }else{
        logger.warn(' checkAccessToken :'+ "Token info is error");
        return  null;
    }
}

module.exports = {
    clientType : clientType ,
    expiredTime : expiredTime ,
    createAccessToken : createAccessToken ,
    parseAccessToken : parseAccessToken ,
    checkUserAccessToken : checkUserAccessToken
}