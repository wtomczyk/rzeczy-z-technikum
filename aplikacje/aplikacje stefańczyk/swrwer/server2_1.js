var http = require("http")
var express = require("express")
var app = express()
const PORT = 3000;

var path = require("path")
app.get("/formularz", function (req, res) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname + "/static/formularz.html"))

})

app.use(express.static('static'))

app.get("/handleForm", function (req, res) {
    console.log(req.query.color)
    console.log(req.query.radio)
    console.log(req.query.aaa)
    console.log(req.query.hidden)

})
app.get("/handleForm", function (req, res) {
    res.send('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
})
app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})