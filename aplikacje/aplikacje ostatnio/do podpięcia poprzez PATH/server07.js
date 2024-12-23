var http = require("http");


var server = http.createServer(function(req,res){    
        console.log("adres żądania: " + req.url)
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
        if(req.url=="/A"||req.url=="/a"){
            res.end("<h1 style='color:red'>adres url żądania to:"+req.url+"</h1>")
        }
        else if(req.url=="/B"||req.url=="/b"){
            res.end("<h1 style='color:blue'>adres url żądania to:"+req.url+"</h1>")
        }
        else if(req.url=="/C"||req.url=="/c"){
            res.end("<h1 style='color:green'>adres url żądania to:"+req.url+"</h1>")
        }
        else{
        res.end("<h1>adres url żądania to:"+req.url+"</h1>")
        }
})

server.listen(3000, function(){
   console.log("serwer startuje na porcie 3000")
});
