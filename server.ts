import * as http from 'http';
import  { Router } from './router';
import * as fs from 'fs';

const router = new Router();
router.get('/', (request, response) => {
    response.statusCode = 200;
    response.setHeader('Contnet-Type', 'text/html');
    response.end('<h1>welcome to the world of nodejs!</h1> ')
});

router.get('/about', (request, response) => {
    response.statusCode = 200;
    response.setHeader('Contnet-Type', 'text/plain');
    response.end('This is a learning project');
});

router.get('/item/:id', (request, response, params) => {
    response.statusCode = 200;
    response.end(JSON.stringify(params, null, 4));
});

router.get('/todo', (request, response, params) => {
    fs.readFile('./vue_exp_todo/todo.html', function(err, data) {
      response.end(data);
    });
});

const server = http.createServer((request, response) => {
    console.log(`[${new Date().toLocaleDateString()}]: ${request.method} ${request.url}`);
    router.handleRequest(request, response);
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});
