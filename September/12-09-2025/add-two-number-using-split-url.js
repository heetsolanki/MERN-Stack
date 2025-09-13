var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
    var query = url.parse(req.url, true).query;
    console.log(query);
    var addition = parseInt(query.num1) + parseInt(query.num2);
    var answer = "The addition of " + query.num1 + " and " + query.num2 + " is: " + addition;
    res.end(answer);
});

server.listen(5000);
console.log("Port 5000 is listening...");