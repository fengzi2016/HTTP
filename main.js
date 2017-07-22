let server=require('./server');
let route=require('./route');
let requestHandlers=require('./requestHandlers');
let handle={};
handle['/']=requestHandlers.home;
handle['/about']=requestHandlers.about;
server.start(route.route,handle);
