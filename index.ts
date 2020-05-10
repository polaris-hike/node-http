import * as http from 'http';
import { IncomingMessage, ServerResponse } from 'http';
import * as fs from 'fs';
import * as p from 'path';

const server = http.createServer();
const publicDir = p.resolve(__dirname, 'public')

server.on('request', (request: IncomingMessage, response: ServerResponse) => {
    const { method, url, headers } = request;
    switch (url) {
        case '/index.html':
            response.setHeader('Content-Type', 'test/html;charset=utf-8');
            fs.readFile(p.resolve(publicDir, 'index.html'), (error, data) => {
                if (error) throw error;
                response.end(data.toString());
            })
            break;
        case '/style.css':
            response.setHeader('Content-Type', 'test/css;charset=utf-8');
            fs.readFile(p.resolve(publicDir, 'style.css'), (error, data) => {
                if (error) throw error;
                response.end(data.toString());
            })
            break;
        case '/main.ts':
            response.setHeader('Content-Type', 'test/javascript;charset=utf-8');
            fs.readFile(p.resolve(publicDir, 'main.ts'), (error, data) => {
                if (error) throw error;
                response.end(data.toString());
            })
            break;
    }
});

server.listen(8888, () => {
    console.log(server.address())
});
