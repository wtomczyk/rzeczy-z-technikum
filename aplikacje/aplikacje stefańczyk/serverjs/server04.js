//zmienne
var http = require("http")
var express = require("express")
var app = express()
var bodyParser = require("body-parser")
const PORT = 3000;
var formidable = require('formidable');

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/static/formularz_upload.html")
})


app.post('/upload', function (req, res) {
    var form = new formidable.IncomingForm();
    form.uploadDir = __dirname + '/static/upload/' // folder do zapisu zdjęcia
    form.parse(req, function (err, fields, files) {  
        console.log("---------------- fields ------------------"); 
        console.log(fields); 
        console.log("---------------- files ------------------"); 
        console.log(files);
        res.send(files)
    });
}); 

//nasłuch na określonym porcie
app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})