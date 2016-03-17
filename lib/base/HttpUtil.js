/**
 * Created by ling xue on 2016/3/17.
 */

var http = require('http');

function httpGet(url,callback){
    console.log(url);
    http.get(url,function(result){
        var data = "";
        result.on('data', function(d) {
            data += d;
        }).on('end',function(){
            var resObj = eval("(" + data + ")");
            callback(null,resObj);
        });

    }).on('error', function(e) {
        callback(e,null);
    })
}

function httpRequest(host,url,params,callback,method){
    var paramStr = JSON.stringify(params);
    var options = {
        host: host,
        port: 8080,
        path: "/api/userToken",
        method: method!=null?method:'post',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length' : Buffer.byteLength(paramStr, 'utf8')
        }
    }
    try{
        var req = http.request(options, function(res) {
            var data = "";
            res.on('data', function(d){
                data += d;
            });
            res.on('end', function(){
                var resObj = eval("(" + data + ")");
                callback(null,resObj);
            });
        });
        req.write(paramStr);
        req.end();
        req.on('error', function(e) {
            callback(e,null);
        });
    }catch(e){
        console.log(e);
    }

}
function httpPost(host,url,params,callback){
    httpRequest(host,url,params,callback,'post');
}

function httpPut(host,url,params,callback){
    httpRequest(host,url,params,callback,'put');
}

function httpDelete(host,url,params,callback){
    httpRequest(host,url,params,callback,'delete');
}

module.exports ={
    httpGet : httpGet ,
    httpPost  :httpPost,
    httpPut : httpPut ,
    httpDelete : httpDelete
}