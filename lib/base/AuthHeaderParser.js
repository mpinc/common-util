var serverLogger = require('./ServerLogger.js');
var userAgentUtil= require('./UserAgentUtil.js');
var httpreq = require('httpreq');
var resUtil = require('./ResponseUtil.js');
var headerTokenMeta = "auth-token";
var headerTenant = "tenant";
var headerUserAgent="user-agent";
var defaultAuthUrl= "http://127.0.0.1:8091/api/auth/tokens";

var logger= serverLogger.createLogger("AuthHeaderParser.js");

//move to util module
function authHeaderParser(option) {
    option=option||{};
    var authURL= option.authUrl;
    logger = option.logger || logger;
    if (authURL==null){
        authURL=defaultAuthUrl;
    }
    function parseAuthHeader(req, res, next) {
        var tenant = req.headers[headerTenant];
        var token = req.headers[headerTokenMeta];
        var userAgent=req.headers[headerUserAgent];

        //put device type in params
        req.params.deviceType=userAgentUtil.getRequestDevice(userAgent);
        //tenant is required
        if (tenant != undefined) {
            req.params.tenant = tenant;
        }

        //token is not required for some apis
        if (token == undefined) {
            return next();
        }
        return  authToken(req, token,tenant, next);
    }

    function authToken(req, token,tenant, next) {
        //validate the token against server and get user information
        var result,tokenInfo=null;
        httpreq.post(authURL, {
            body: '{"method": "token","token": "'+token+'"}',
            headers:{
                'tenant': tenant,
                'Content-Type': 'application/json'
            }
        }, function (err, res){
            if (err){
                logger.error("validate auth token failed",err);
            }else{
                if (res.statusCode==200){
                    result=JSON.parse(res.body);
                    logger.debug("validate token response body:",result);
                    if (result.success==true){
                        tokenInfo = result.result;
                        logger.debug("token info:",tokenInfo);
                        if (tokenInfo && tokenInfo.user) {
                            req.params.authUser = tokenInfo.user;
                            logger.debug("user info:",tokenInfo.user);
                        }
                    }
                }
            }
            return next();
        });
    }
    return (parseAuthHeader);
}

///--- Exports

module.exports = {
    authHeaderParser:  authHeaderParser
}