'use strict';

const fs = require("fs");

const server = http.createServer(function (request, response){
    console.log(request.method, request.url);
    const text = fs.readFileSync('index.html', 'utf8');
});

server.listen(3000);
console.log('Server Started');