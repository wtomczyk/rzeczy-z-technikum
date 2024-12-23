//zmienne
var http = require("http")
var express = require("express")
var app = express()
var bodyParser = require("body-parser")
const PORT = 3000;
var tablica = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/static/addUser.html")
})

app.post("/addUser", function (req, res) {
    console.log(req.body)
    var dane = req.body
    var nowyMail = req.body.email
    var jest = false;
    for (let i = 0; i < tablica.length; i++) {
        if (dane.email == tablica[i]) {
            jest = true;
            break;
        }
    }
    if (jest) {
        res.send("<html><head><meta http-equiv='refresh' content='3; url=/' /></head><body>Ten email jest już w bazie</body></html>")
    }
    else {
        tablica.push(nowyMail)
        console.log("dodano mail " + nowyMail + " do tablicy");
        console.log(tablica);
        res.send("<html><head><meta http-equiv='refresh' content='3; url=/' /></head><body>Dodano email " + nowyMail + " do bazy.</body></html>")
    }
})

app.get("/removeUser1", function (req, res) {
    var x = ""
    for (let i = 0; i < tablica.length; i++) {
        x += "<option value='" + tablica[i] + "'> email: " + tablica[i] + "</option>"
    }
    res.send("<html><body><form action='/remove' method='POST'><select name='email'>" + x + "</select><input type='submit' value='usuń'></form></body></html>")
})

app.get("/removeUser2", function (req, res) {
    var x = ""
    for (let i = 0; i < tablica.length; i++) {
        x += "<input type='radio' name='email' value='" + tablica[i] + "'><label>" + tablica[i] + "</label><br>"
    }
    res.send("<html><body><form action='/remove' method='POST'>" + x + "<input type='submit' value='usuń'></form></body></html>")
})


app.post("/remove", function (req, res) {
    console.log(req.body)
    var index
    for (let i = 0; i < tablica.length; i++) {
        if (tablica[i] == req.body.email) {
            index = i
            break;
        }
    }
    console.log(index);
    tablica.splice(index, 1)
    console.log(tablica);
    res.send("<html><head><meta http-equiv='refresh' content='3; url=/' /></head><body>Email "+ req.body.email +" został usunięty z bazy</body></html>")
})

app.get("/list", function (req, res) {
    var x = ""
    for (let i = 0; i < tablica.length; i++) {
        x += "<li>" + tablica[i] + "</li>"
    }
    res.send("<html><body><h3>Adresy zapisane na newsletter:</h3><ul>"+ x +"</ul></body></html>")
})

//nasłuch na określonym porcie
app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})