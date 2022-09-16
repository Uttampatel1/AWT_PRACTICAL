
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if(req.url === "/"){
        fs.readFile("home.html",(err, data)=>{
            if (err) throw err;
            res.end(data);
        });
    }
    else if(req.url === "/Practical_1"){
        fs.readFile("Practical_1.html",(err, data)=>{
            if (err) throw err;
            res.end(data);
        });
    }
    else if(req.url === "/Practical_2"){
        fs.readFile("Practical_2.html" ,(err,data)=>{
            if (err) throw err;
            res.end(data);
        });
    }
    else if(req.url === "/Practical_3"){
        fs.readFile("Practical_3.html",(err, data)=>{
            if (err) throw err;
            res.end(data);
        });
    }
    else if(req.url === "/Practical_4"){
        fs.readFile("Practical_4.html",(err, data)=>{
            if (err) throw err;
            res.end(data);
        });
    }
    else if(req.url === "/Practical_5"){
        fs.readFile("Practical_5.html",(err, data)=>{
            if (err) throw err;
            res.end(data);
        });
    }
    else if(req.url === "/Practical_6"){
        fs.readFile("Practical_6.html",(err, data)=>{
            if (err) throw err;
            res.end(data);
        });
    }
    else if(req.url === "/Practical_7"){
        fs.readFile("Practical_7.html",(err, data)=>{
            if (err) throw err;
            res.end(data);
        });
    }
    else if(req.url === "/Practical_8"){
        fs.readFile("Practical_8.html",(err, data)=>{
            if (err) throw err;
            res.end(data);
        });
    }
    else if(req.url === "/Practical_9"){
        fs.readFile("Practical_9.html",(err, data)=>{
            if (err) throw err;
            res.end(data);
        });
    }
    else if(req.url === "/Practical_10"){
        fs.readFile("Practical_10.html",(err, data)=>{
            if (err) throw err;
            res.end(data);
        });
    }
}).listen(8081);
