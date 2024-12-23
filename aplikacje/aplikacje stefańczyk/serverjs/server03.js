//zmienne
var http = require("http")
var express = require("express")
var app = express()
var bodyParser = require("body-parser")
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/static/formularz_post.html")
})

app.post("/formularz", function (req, res) {
    console.log(req.body)
    var color = req.body.color
    res.send("<html><body style='background:" + color + "'></body></html>")
})

//nasłuch na określonym porcie
app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})