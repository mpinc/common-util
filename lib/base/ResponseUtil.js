/**
 * Created by ling xue on 2016/3/4.
 */

var sysError = require('./SystemError.js');
var sysMsg = require('./SystemMsg.js');
function resetQueryRes(res,result,errMsg,next){
    res.send(200,{success : true,result:result,msg:errMsg});
    if (next){
        return next();
    }
}

function resetCreateRes(res,result,errMsg,next){
    if(result && result.insertId){
        res.send(200,{success : true,id:result.insertId});
    }else{
        res.send(200,{success : false,msg:errMsg});
    }
    if (next){
        return next();
    }
}

function resetUpdateRes(res,result,errMsg,next){
    if(result && result.affectedRows>0){
        res.send(200,{success : true});
    }else{
        res.send(200,{success : false,msg:errMsg});
    }
    if (next){
        return next();
    }
}

function resetFailedRes(res,errMsg,next){
    res.send(200,{success:false,msg:errMsg});
    if (next){
        return next();
    }
}

function resetSuccessRes(res,next){
    res.send(200,{success : true});
    if (next){
        return next();
    }
}

function resInternalError(error , res ,next){
    return next(sysError.InternalError(sysMsg.SYS_INTERNAL_ERROR_MSG));
    //throw sysError.InternalError(error.message,sysMsg.SYS_INTERNAL_ERROR_MSG);
}

function resNoAuthorizedError(error,res,next){
    return next(sysError.NotAuthorizedError());
}

function resImageNotFoundError(error,res,next){
    return next(sysError.ResourceNotFoundError("",sysMsg.IMG_QUERY_NO_EXIST));
}

function resTenantNotFoundError(error,res,next){
    return next(sysError.MissingParameterError(sysMsg.TENANT_NOT_EXIST,sysMsg.TENANT_NOT_EXIST));
}



module.exports = {
    resetQueryRes : resetQueryRes,
    resetCreateRes : resetCreateRes,
    resetUpdateRes : resetUpdateRes ,
    resetFailedRes : resetFailedRes ,
    resetSuccessRes : resetSuccessRes ,
    resInternalError : resInternalError ,
    resNoAuthorizedError : resNoAuthorizedError,
    resImageNotFoundError: resImageNotFoundError,
    resTenantNotFoundError:resTenantNotFoundError
}