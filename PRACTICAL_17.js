
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url === "/") {
        res.end("<h1> Welcome To Home Page.");
    }
    else if (req.url === "/about") {
        res.end("<h1> Welcome To About Page.");
    }
    else if (req.url === "/contact") {
        res.end("<h1> Welcome To Contact Page.");
    }
    else{
        res.end("<h1> Page Not Found.");
    }
}).listen(8081);
