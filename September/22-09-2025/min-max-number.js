var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
    var query = url.parse(req.url, true).query;
    console.log(query);
    var max;
    var numOne = parseInt(query.num1);
    var numTwo = parseInt(query.num2);
    if(numOne > numTwo) {
        max = numOne;
    } else if(numTwo > numOne) {
        max = numTwo;
    }
    var answer = "Max is: " + max;
    res.end(answer);
});

server.listen(5000);
console.log("Port 5000 is listening...");