/**
 * Created by ling xue on 2016/3/2.
 */

/**
 * The module of customer
 * @type {string}
 */
var CUST_SIGNUP_EMAIL_REGISTERED = "该邮箱已被注册";//Cutomer do signup ,but the current email has been exist in system.
var CUST_LOGIN_USER_UNREGISTERED = "用户尚未注册"; //Customer use a email that not exist in system to login.
var CUST_LOGIN_PSWD_ERROR = "登陆密码错误" ; // Customer enter a wrong password on login
var CUST_ORIGIN_PSWD_ERROR = "初始密码错误" ; //Customer need enter origin password before change new login password
var CUST_ACTIVE_STATE_ERROR = "用户未被激活" // User do active when user state is active.
var CUST_FORBIDDEN_STATE_ERROR = "该用户已被禁用" // User status is forbidden.
var CUST_SIGNUP_PHONE_REGISTERED = "手机号已被注册";//Cutomer do signup ,but the current phone has been exist in system.
var CUST_SMS_CAPTCHA_ERROR = "短信验证码错误";

var ACCESS_TOKEN_ERROR = "当前用户验证信息已失效";
var ACCESS_TOKEN_EXPIRED = "当前登陆已过期";
var ACCESS_TOKEN_NOT_ACTIVE = "当前用户尚未激活";
var ACCESS_TOKEN_NOT_MATCH = "当前用户身份不匹配";

var SYS_INTERNAL_ERROR_MSG = "Web Service Internal Error . ";
var SYS_AUTH_TOKEN_ERROR ="Access token error ,the Api can't be accessed" ;
var SYS_MESSAGE_QUEUE_ERROR_MSG = "Message queue error !" ;

var IMG_QUERY_NO_EXIST = "图片不存在"; //can not get image by meta data.
var TENANT_NOT_EXIST = "Tenant does not exist";

/**
 * Export
  */
module.exports = {
    CUST_SIGNUP_EMAIL_REGISTERED :CUST_SIGNUP_EMAIL_REGISTERED,
    CUST_LOGIN_USER_UNREGISTERED : CUST_LOGIN_USER_UNREGISTERED,
    CUST_ORIGIN_PSWD_ERROR : CUST_ORIGIN_PSWD_ERROR,
    CUST_LOGIN_PSWD_ERROR : CUST_LOGIN_PSWD_ERROR,
    CUST_ACTIVE_STATE_ERROR : CUST_ACTIVE_STATE_ERROR,
    CUST_FORBIDDEN_STATE_ERROR : CUST_FORBIDDEN_STATE_ERROR  ,
    ACCESS_TOKEN_ERROR : ACCESS_TOKEN_ERROR ,
    ACCESS_TOKEN_EXPIRED : ACCESS_TOKEN_EXPIRED,
    ACCESS_TOKEN_NOT_ACTIVE : ACCESS_TOKEN_NOT_ACTIVE ,
    ACCESS_TOKEN_NOT_MATCH : ACCESS_TOKEN_NOT_MATCH ,
    SYS_INTERNAL_ERROR_MSG : SYS_INTERNAL_ERROR_MSG ,
    SYS_AUTH_TOKEN_ERROR : SYS_AUTH_TOKEN_ERROR ,
    SYS_MESSAGE_QUEUE_ERROR_MSG : SYS_MESSAGE_QUEUE_ERROR_MSG ,
    CUST_SIGNUP_PHONE_REGISTERED : CUST_SIGNUP_PHONE_REGISTERED ,
    CUST_SMS_CAPTCHA_ERROR : CUST_SMS_CAPTCHA_ERROR  ,
    IMG_QUERY_NO_EXIST : IMG_QUERY_NO_EXIST,
    TENANT_NOT_EXIST    : TENANT_NOT_EXIST
}