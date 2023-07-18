var http = require('http'),
  url = require('url'),
  fs = require('fs');

var messages = ['testing'];
var clients = [];

http.createServer(function (request, response) {
  console.log(`[${new Date().toLocaleDateString()}]: ${request.method} ${request.url}`);

  var url_parts = url.parse(request.url);
  console.log(url_parts);
  console.log();

  if (url_parts.pathname == '/') {
    fs.readFile('./index.html', function (err, data) {
      response.end(data)
    });
  } else if (url_parts.pathname.substr(0,5) == '/poll') {
    // polling code here
  }

}).listen(8080, 'localhost')
console.log('Server running at port 8080');

