/**
 * Created by ling xue on 2016/3/17.
 */

var loginModuleUrl = {
    host:"127.0.0.1",
    port:"8080"
};
var paymentModuleUrl = {
    host:"127.0.0.1",
    port:"8088"
};;

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