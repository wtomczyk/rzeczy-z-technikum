var http = require("http")
var fs = require("fs");
var path = require("path")
var qs = require("querystring");
var http = require("http")
var express = require("express")
var app = express()
const PORT = 3000;

var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('static'))

var tab=[]

app.post("/", function (req, res) {
    var allData = "";

    // w poniższej funkcji nic nie modyfikujemy
    req.on("data", function (data) {
        allData += data;
    })

    //odsyłane
    req.on("end", function (data) {
        var x = qs.parse(allData);
        tab = x;
        

        res.writeHead(200, {
            "content-type": "text/plain:charset=utf-8"
        })
        res.end(JSON.stringify(tab, null, 4))
    })
})
app.post("/load", function (req, res) {
    var allData = "";

    // w poniższej funkcji nic nie modyfikujemy
    req.on("data", function (data) {
        allData += data;
    })
    //odsyłane
    req.on("end", function (data) {
        console.log(tab);
        res.writeHead(200, {
            "content-type": "text/plain:charset=utf-8"
        })
        res.end(JSON.stringify(tab))
    })
})
app.get("/hex", function (req, res) {
    console.log()
    res.sendFile(path.join(__dirname + "/static/index2.html"))
})
app.get("/chodzenietest", function (req, res) {
    console.log()
    res.sendFile(path.join(__dirname + "/static/index3.html"))
})

app.listen(3000, function () {
    console.log("start serwera na porcie 3000")
})