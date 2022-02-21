'use strict'

const http = require('http');
const fs = require("fs");
const server = http.createServer(function (request, response) {
    console.log(request.method, request.url);
    if (request.url === '/style.css') {
        const css = fs.readFileSync('style.css', 'utf8');
        response.end(css);
    } else if (request.url === '/sitemap.xml'){
        const xml = fs.readFileSync('sitemap.xml', 'utf8');
        response.end(xml);
    } else if (request.url === '/robots.txt'){
        const txt = fs.readFileSync('robots.txt', 'utf8');
        response.end(txt);
    } else {
        const html = fs.readFileSync('index.html', 'utf8');
        response.end(html);
    }
});




console.log('port = ', process.env.PORT);

server.listen(3000);


console.log('Server Started');