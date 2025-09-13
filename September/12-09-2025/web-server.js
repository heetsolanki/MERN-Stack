var http = require('http');
var server = http.createServer(function (req, res) {
    res.end('Hello, World!');
});

server.listen(5000);
console.log("Port 5000 is listening...");