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
    var options = {
        host: host,
        port: 80,
        path: url,
        method: method!=null?method:'post',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length' : Buffer.byteLength(params, 'utf8')
        }
    }
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