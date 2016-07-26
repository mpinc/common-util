/**
 * Created by ling xue on 2016/3/4.
 */

var sysError = require('./SystemError.js');
var sysMsg = require('./SystemMsg.js');
function resetQueryRes(res,result,errMsg){
    res.send(200,{success : true,result:result,msg:errMsg});
}

function resetCreateRes(res,result,errMsg){
    if(result && result.insertId){
        res.send(200,{success : true,id:result.insertId});
    }else{
        res.send(200,{success : false,msg:errMsg});
    }
}

function resetUpdateRes(res,result,errMsg){
    if(result && result.affectedRows>0){
        res.send(200,{success : true});
    }else{
        res.send(200,{success : false,msg:errMsg});
    }
}

function resetFailedRes(res,errMsg){
    res.send(200,{success:false,msg:errMsg});
}

function resetSuccessRes(res){
    res.send(200,{success : true});
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



module.exports = {
    resetQueryRes : resetQueryRes,
    resetCreateRes : resetCreateRes,
    resetUpdateRes : resetUpdateRes ,
    resetFailedRes : resetFailedRes ,
    resetSuccessRes : resetSuccessRes ,
    resInternalError : resInternalError ,
    resNoAuthorizedError : resNoAuthorizedError,
    resImageNotFoundError: resImageNotFoundError
}