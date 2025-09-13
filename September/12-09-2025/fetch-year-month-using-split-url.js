var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
    var query = url.parse(req.url, true).query;
    console.log(query);
    var answer = "Year: " + query.year + ", Month: " + query.month;
    res.end(answer);
});

server.listen(5000);
console.log("Port 5000 is listening...");