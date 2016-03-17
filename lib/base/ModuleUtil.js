/**
 * Created by ling xue on 2016/3/17.
 */

var loginModuleUrl = "http://127.0.0.1:8888";
var paymentModuleUrl = "http://127.0.0.1:8887";

function setLoginUrl (url){
   loginModuleUrl = url;
}

function setPaymentUrl (url){
    paymentModuleUrl = url;
}

function getPaymentUrl(){
    return paymentModuleUrl ;
}

function getLoginUrl(){
    return loginModuleUrl;
}

module.exports = {
    setLoginUrl : setLoginUrl ,
    getLoginUrl : getLoginUrl ,
    setPaymentUrl : setPaymentUrl ,
    getPaymentUrl : getPaymentUrl
}