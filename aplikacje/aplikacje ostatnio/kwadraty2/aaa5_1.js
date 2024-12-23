var http = require("http")
var express = require("express")
var app = express()
const PORT = 3000;

var path = require("path")

app.use(express.static('static'))



/*
var server = http.createServer(function(req,res){ 
    switch (req.method) {
        case "GET":
        if (req.url === "/") {
            fs.readFile("static/index.html", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            })
        }
         else if(req.url.indexOf(".png") != -1) {
            fs.readFile(__dirname + decodeURI(req.url), function (error, data) {
               res.writeHead(200, { "Content-type": "image/png" });
               res.write(data);
               res.end();
            })
        } 
            break;
        case "POST":
            function servResponse(){
                var allData = "";

            req.on("data", function (data) {
                console.log("data: " + data)
                allData += data;
            })

            req.on("end", function (data) {
                var pliki = {
                    aaa:[],
                }           
                res.end(JSON.stringify(pliki, null, 4));
            })
        }                     
    servResponse(req, res)
            break;
        } 
});
*/


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})