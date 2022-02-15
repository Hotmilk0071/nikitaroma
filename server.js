'use strict';
const http = require('http');
const fs = require("fs");

const server = http.createServer(function (request, response){
    console.log(request.method, request.url);
    if (request.url === '/NR_project.css') {
        const css = fs.readFileSync('NR_project.css', 'utf8');
        response.end(css);
    } else {
        const html = fs.readFileSync('Nikita_and_Roma.html', 'utf8');
        response.end(html);
    }
});

console.log('port = ', process.env.PORT);

server.listen(process.env.PORT || 3000);


console.log('Server Started');
