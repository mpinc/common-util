/**
 * Created by ling xue on 2016/3/2.
 */

var log4js = require('log4js');

var defaultOptions ={
    level : 'DEBUG',
    config : {
        appenders: [
            { type: 'console' },
            {
                "type": "file",
                "filename": "../mp-common-util.log",
                "maxLogSize": 204800,
                "backups": 1
            }
        ]
    }
}

function createLogger(name ,options){
    if(options == null){
        options = defaultOptions;
    }
    log4js.configure(options.config);
    var logger = log4js.getLogger(name);
    logger.setLevel(options.level);
    return logger;
}

///-- Exports

module.exports = {
    createLogger : createLogger
};

