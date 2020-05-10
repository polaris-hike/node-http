import * as http from 'http';
import { IncomingMessage, ServerResponse } from 'http';

const server = http.createServer();


server.on('request', (request: IncomingMessage, response: ServerResponse) => {
    console.log('request.url');
    console.log(request.url);
    console.log('request.method');
    console.log(request.method);
    console.log('request.headers');
    console.log(request.headers);
    const arr = []
    request.on('data', (chunk) => {
        console.log('chunk')
        console.log(chunk)
        arr.push(chunk)
    })
    request.on('end', () => {
        const body = Buffer.concat(arr).toString()
        console.log('body')
        console.log(body)
        response.end('hi')
    })

});

server.listen(8888, () => {
    console.log(server.address())
});
