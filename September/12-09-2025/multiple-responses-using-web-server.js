var  http = require('http');
var server = http.createServer(function (req, res) {
    if(req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h1>Home Page</h1></body></html>');
        res.end();
    } else if(req.url == '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h1>About Us</h1><p>This is the about page.</p></body></html>');
        res.end();
    } else if(req.url == '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h1>Contact Us</h1><p>This is the contact page.</p></body></html>');
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<html><body><h1>404 Not Found</h1></body></html>');
        res.end();
    }
});

server.listen(5000);
console.log("Port 5000 is listening...");