var http = require("http");
var server = http.createServer(function(req,res){        
        res.writeHead(200,{"content-type":"text/plain;charset=utf-8"})
        if(req.headers["user-agent"].includes("Chrome")){
            res.end(JSON.stringify("twoja przeglądarka to chrome", null,5))
        }
        else if(req.headers["user-agent"].includes("Firefox")){
            res.end(JSON.stringify("twoja przegladarka to firefox", null,5))
        }
})

server.listen(3000, function(){
   console.log("serwer startuje na porcie 3000")
});