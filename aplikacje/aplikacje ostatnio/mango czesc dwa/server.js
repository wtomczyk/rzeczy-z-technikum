var http = require("http");
var fs = require("fs");
var qs = require("querystring")

var mongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID;
var Operations = require("./modules/Operations.js")
var opers = new Operations()

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
            else if (req.url === "/aaa.js") {
                fs.readFile("static/aaa.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url === "/Main.js") {
                fs.readFile("static/Main.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url === "/Net.js") {
                fs.readFile("static/Net.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
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
                    res.end(JSON.stringify(data, null, 4));
                })
            }
                       
        servResponse(req, res)
                break;
            } 
    });
      


server.listen(3000, function(){
   console.log("serwer startuje na porcie 3000")
});



mongoClient.connect("mongodb://localhost/kolekcja", function (err, db) {
    if (err) console.log(err)
    else console.log("mongo podłączone")
        db.createCollection("kolekcja", function (err, coll) {
            //coll.insert({a:1}, function (err, result) {                
            //    console.log(result)
            // });
            //console.log(coll)
            
        })
    //tu można operować na utworzonej bazie danych db lub podstawić jej obiekt 
    // pod zmienną widoczną na zewnątrz    
    _db = db;
})