'use strict';

const http = require('http');

const server = http.createServer(function (request, response) {
    console.log('hello');
});

server.listen(3000);
console.log('Server Started');