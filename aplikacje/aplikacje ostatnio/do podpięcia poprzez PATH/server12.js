var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){ 
    console.log("żądany przez przeglądarkę adres: " + req.url)

if (req.url === "/strona3.html") {
    fs.readFile("static/third.html", function (error, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    })
}
else if (req.url === "/style.css") {
    fs.readFile("static/style.css", function (error, data) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(data);
        res.end();
    })
}
else if (req.url === "/script.js") {
    fs.readFile("static/script.js", function (error, data) {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.write(data);
        res.end();
    })
}
else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write("<h1>404 - brak takiej strony</h1>");
    res.end();
}
});


server.listen(3000, function(){
   console.log("serwer startuje na porcie 3000")
});
