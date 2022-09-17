
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
    else if(req.url === "/Practical_11"){
        fs.readFile("Practical_11.html",(err, data)=>{
            if (err) throw err;
            res.end(data);
        });
    }
    else if(req.url === "/Practical_12"){
        fs.readFile("Practical_12.html",(err, data)=>{
            if (err) throw err;
            res.end(data);
        });
    }
    else if(req.url === "/Practical_13"){
        fs.readFile("Practical_13.html",(err, data)=>{
            if (err) throw err;
            res.end(data);
        });
    }
    else if(req.url === "/Practical_14"){
        fs.readFile("Practical_14.html",(err, data)=>{
            if (err) throw err;
            res.end(data);
        });
    }
    else if(req.url === "/Practical_15"){
        fs.readFile("Practical_15.html",(err, data)=>{
            if (err) throw err;
            res.end(data);
        });
    }
    else if(req.url === "/Practical_16"){
        fs.readFile("Practical_16.html",(err, data)=>{
            if (err) throw err;
            res.end(data);
        });
    }
    else{
        res.end("404 PAGE NOT FOUND");
    }
}).listen(8081);
