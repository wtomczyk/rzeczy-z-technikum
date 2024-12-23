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

            if (req.url == "/gibe") {
                function servResponse(){
                    var allData = "";
                    req.on("data", function (data) {
                        console.log("data: " + data)
                        allData += data;
                    })
                    req.on("end", function (data) {

                        mongoClient.connect("mongodb://localhost/kolekcja", function (err, db) {
                            if (err) console.log(err)
                            else console.log("mongo podłączone")
                                _db = db;
                               var coll = db.collection("kolekcja")
                                   opers.Select2(coll, function (data){
                                       console.log(data)
                                       
                                        res.end(JSON.stringify(data));
                                   })     
                        })
                    })
                    console.log("aaa")
                }
            }
            else if (req.url == "/insert") {
                function servResponse(){
                    var allData = "";
                    req.on("data", function (data) {
                        console.log("data: " + data)
                        allData += data;
                    })
                    req.on("end", function (data) {
                        mongoClient.connect("mongodb://localhost/kolekcja", function (err, db) {
                            allData=allData.split("&")
                            allData[0]=allData[0].split("=")
                            allData[1]=allData[1].split("=")
                            if (err) console.log(err)
                            else console.log("mongo podłączone")
                                _db = db;
                               var coll = db.collection("kolekcja")
                               console.log(allData)
                               opers.Insert(coll,{login: allData[0][1], password: allData[1][1]}) 
                        })
                    })
                    console.log("aaa")
                }
            }
            else if (req.url == "/delet") {
                function servResponse(){
                    var allData = "";
                    req.on("data", function (data) {
                        console.log("data: " + data)
                        allData += data;
                    })
                    req.on("end", function (data) {
                        mongoClient.connect("mongodb://localhost/kolekcja", function (err, db) {
                            allData=allData.split("&")
                            allData[0]=allData[0].split("=")
                            if (err) console.log(err)
                            else console.log("mongo podłączone")
                                _db = db;
                               var coll = db.collection("kolekcja")
                               console.log(allData)
                               opers.DeleteById(ObjectID, coll, allData[0][1])   
                        })
                    })
                    console.log("aaa")
                }
            }
            else if(req.url == "/update"){
                function servResponse(){
                    var allData = "";
                    req.on("data", function (data) {
                        console.log("data: " + data)
                        allData += data;
                    })
                    req.on("end", function (data) {
                        mongoClient.connect("mongodb://localhost/kolekcja", function (err, db) {
                            allData=allData.split("&")
                            allData[0]=allData[0].split("=")
                            allData[1]=allData[1].split("=")
                            allData[2]=allData[2].split("=")
                            var info = {
                                id:allData[0][1],
                                login:allData[1][1],
                                password:allData[2][1]
                            }
                            if (err) console.log(err)
                            else console.log("mongo podłączone")
                                _db = db;
                               var coll = db.collection("kolekcja")
                               console.log(allData[0][1])
                               opers.UpdateById(ObjectID, coll, info)
                        })
                    })
                    console.log("aaa")
                }
            }
            else{
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
        })  
    _db = db;
})