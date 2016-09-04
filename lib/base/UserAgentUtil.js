var BROWSER_IE = 1;
var BROWSER_CHROME  = 2;
var BROWSER_FIREFOX = 3;
var BROWSER_SAFARI = 4;
var BROWSER_OTHER  = 5;
var APP_ANDROID  =6 ;
var APP_IOS  = 7;
var DEVICE_UNKNOWEN = 8 ;

function getRequestDevice(userAgent){
    if(userAgent == null){
        return DEVICE_UNKNOWEN;
    }else{
        userAgent = userAgent.toLowerCase();
    }
    if(userAgent.startsWith('mozilla')){
        if(userAgent.indexOf('windows')>=0){
            return BROWSER_IE;
        }else if(userAgent.indexOf('safari')>=0){
            if(userAgent.indexOf('chrome')>=0){
                return BROWSER_CHROME ;
            }else{
                return BROWSER_SAFARI ;
            }
        }else if(userAgent.indexOf('firefox')>=0){
            return BROWSER_FIREFOX;
        }else{
            return BROWSER_OTHER;
        }
    }else{
        return APP_ANDROID;
    }
}

module.exports = {
    getRequestDevice : getRequestDevice
}