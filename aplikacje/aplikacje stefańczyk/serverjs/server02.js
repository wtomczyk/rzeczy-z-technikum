//zmienne
var http = require("http")
var express = require("express")
var app = express()
const PORT = 3000;

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/static/formularz.html")
})

app.get("/formularz", function (req, res) {
    console.log(req.query)
    var color = req.query.color
    res.send("<html><body style='background:" + color + "'>Przesłano kolor: " + color + "</body></html>")
})

//nasłuch na określonym porcie
app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})