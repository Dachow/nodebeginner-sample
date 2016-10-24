var server = require("./webserver");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
// 引号的内容在router文件作为handle的参数
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);