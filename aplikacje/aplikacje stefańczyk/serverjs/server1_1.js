var http = require("http")
var express = require("express")
var app = express()
const PORT = 3000;
app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

var path = require("path")


app.get("/", function (req, res) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname + "/static/pages/aaa.html"))
    res.sendFile(path.join(__dirname + "/static/pages/bbb.html"))
    res.sendFile(path.join(__dirname + "/static/pages/ccc.html"))

})

app.use(express.static('static'))