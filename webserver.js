const http = require('http');
const url = require('url');

function start(route, handle) {
  const hostname = '127.0.0.1';
  const port = 3000;
  var i = 0;
  const server = http.createServer((req, res) => {
    console.log("Request received." + (++i) + " >> " + new Date());

    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(handle, pathname, res);

  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}

exports.start = start;