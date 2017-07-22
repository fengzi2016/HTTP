let http=require('http');
let url=require('url');
let fs=require('fs');
let host='127.0.0.1',
    port=8080;
function start(route,handle) {
    function onRequest(req,res) {
        let pathname = url.parse(req.url).pathname;
        console.log(`Request for ${pathname} received.`);
        route(handle,pathname,res,req);
    }
    http.createServer(onRequest).listen(port,host);
    console.log(`Sever has started and listening on ${host} : port`);
}
exports.start=start;