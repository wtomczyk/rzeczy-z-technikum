var http = require("http")
var express = require("express")
var app = express()
var path = require("path")
const PORT = 3000;

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/static/main.html")
})

app.get("/register", function (req, res) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname + "/static/register.html"))
})

app.get("/login", function (req, res) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname + "/static/login.html"))
})

app.get("/admin", function (req, res) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname + "/static/admin.html"))
})
app.post("/informacje", function (req, res) {
    console.log(__dirname)
})

app.use(express.static("static"))

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})