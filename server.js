const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(`HTTP ${req.method}: ${req.url}`);

    switch(req.url) {
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hello, Nodejs\n');
            break;
        case '/about':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1> this is a website running on node.js </h1>');
            break;
        default: 
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1> 404 </h1>');
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

// function theaserver() {
//     return new TheaServer();
// }

// class TheaServer {
//     constructor() {
//         this.routes = {}
//     }

//     get(route,  {

//     }
// }

// const app = theaserver();
