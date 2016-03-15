/**
 * Created by ling xue on 2016/3/2.
 */

var sysMsg = require('./SystemMsg.js');
var restifyError = require('restify-errors');

var CODES = {
    BadDigest: 400,
    BadMethod: 405,
    Internal: 500, // Don't have InternalErrorError
    InvalidArgument: 409,
    InvalidContent: 400,
    InvalidCredentials: 401,
    InvalidHeader: 400,
    InvalidVersion: 400,
    MissingParameter: 409,
    NotAuthorized: 403,
    PreconditionFailed: 412,
    RequestExpired: 400,
    RequestThrottled: 429,
    ResourceNotFound: 404,
    WrongAccept: 406
};

function InvalidArgumentError(msg , outMsg){
    var error = new restifyError.InvalidArgumentError(msg);
    if(outMsg){
        error.body.outMsg = outMsg;
    }
    return error;
}

function NotAuthorizedError(){
    var error = new restifyError.NotAuthorizedError(sysMsg.SYS_AUTH_TOKEN_ERROR);
    error.body.outMsg = sysMsg.SYS_AUTH_TOKEN_ERROR;

    return error;
}

function BadMethodError(msg , outMsg){
    var error = new restifyError.BadMethodError(msg);
    if(outMsg){
        error.body.outMsg = outMsg;
    }
    return error;
}

function MissingParameterError(msg , outMsg){
    var error = new restifyError.MissingParameterError(msg);
    if(outMsg){
        error.body.outMsg = outMsg;
    }
    return error;
}

function ResourceNotFoundError(msg , outMsg){
    var error = new restifyError.ResourceNotFoundError(msg);
    if(outMsg){
        error.body.outMsg = outMsg;
    }
    return error;
}

function InternalError(msg , outMsg){
    var error = new restifyError.InternalError(msg);
    if(outMsg){
        error.body.outMsg = outMsg;
    }
    return error;
}
module.exports = {
    InvalidArgumentError : InvalidArgumentError ,
    NotAuthorizedError : NotAuthorizedError ,
    MissingParameterError : MissingParameterError ,
    ResourceNotFoundError : ResourceNotFoundError ,
    BadMethodError : BadMethodError,
    InternalError : InternalError
}