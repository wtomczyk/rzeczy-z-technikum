var http = require("http")
var express = require("express")
var app = express()
const PORT = 3000;
app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

app.get('/', function (req, res) {
    res.status(404).send("brak strony takiego produktu")
})