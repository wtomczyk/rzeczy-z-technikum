var http = require("http")
var express = require("express")
var app = express()
var path = require("path")
const PORT = 3000;
var hbs = require('express-handlebars');

var Datastore = require('nedb')

var coll1 = new Datastore({
    filename: 'kolekcja.db',
    autoload: true
});

var doc = {
    ubezpieczenie: "",
    benzyna: "",
    uszkodzenie: "",
    naped: ""
}

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/static/ccc.html")
})

app.get("/aaa", function (req, res) {

    doc.ubezpieczenie = req.query.ubezpieczenie
    doc.benzyna = req.query.benzyna
    doc.uszkodzenie = req.query.uszkodzenie
    doc.naped = req.query.naped

    coll1.insert(doc, function (err, newDoc) {
        console.log("dodano dokument (obiekt):")
        console.log(newDoc)
        console.log("losowe id dokumentu: " + newDoc._id)
    });

})

app.use(express.static("static"))

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})