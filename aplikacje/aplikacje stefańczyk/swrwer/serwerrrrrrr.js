var http = require("http")
var express = require("express")
var app = express()
var path = require("path")
const PORT = 3000;
var hbs = require('express-handlebars');

app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({ defaultLayout: 'main.hbs' }));
app.set('view engine', 'hbs');

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/static/ccc.html")
})

app.get("/aaa", function (req, res) {
    res.render('aaa.hbs', { layout: "main.hbs" });
});

app.get("/bbb", function (req, res) {
    res.render('bbb.hbs', { layout: "main.hbs" });
});


app.use(express.static("static"))

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})