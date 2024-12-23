var http = require("http");
var server = http.createServer(function(req,res){    
        console.log("adres żądania: " + req.url)
        var logger = require('tracer').colorConsole();

logger.log('hello');
logger.trace('hello');
logger.debug('hello');
logger.info('hello');
logger.warn('hello');
logger.error('hello');
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
        res.end("<h1>adres url żądania to:"+req.url+"</h1>")
})

server.listen(3000, function(){
   console.log("serwer startuje na porcie 3000")
});
