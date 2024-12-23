var http = require("http")
var express = require("express")
var app = express()
var path = require("path")
const PORT = 3000;
var bodyParser = require("body-parser")
var uczniowie = [];
var a=0;
var zezwolenie = true;
app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/static/main.html")
})
app.use(express.static("static"))

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
app.get("/informacje", function (req, res) {
    var username=req.query.login
    var haslo = req.query.password
    var age = req.query.wiek
    var czyuczen = req.query.uczen
    if(czyuczen==undefined){
        czyuczen="unchecked"
    }
    var plec = req.query.plec
    var id=a
    if(a==0){
        uczniowie[a]={id:id+1,log:username,pass:haslo,wiek:age,uczen:czyuczen,plec:plec}
    console.log(uczniowie[a])
    console.log(__dirname)
    a=a+1;
    res.sendFile(__dirname + "/static/register.html")
    }
    else{
    for(b=0;b<uczniowie.length;b++){
        if(username==uczniowie[b].log){
            zezwolenie=false
        }
    }
    if(zezwolenie){
    uczniowie[a]={id:id+1,log:username,pass:haslo,wiek:age,uczen:czyuczen,plec:plec}
    console.log(uczniowie[a])
    console.log(__dirname)
    a=a+1;
    res.sendFile(__dirname + "/static/register.html")
    }
    else{
        res.send("<html><head><meta http-equiv='refresh' content='2; url=/register' /></head><body>Takie konto już istnieje</body></html>")
    }
}
zezwolenie=true;
})
app.get("/logowanie", function(req, res){
    var login = req.query.login
    var haslo = req.query.password
    var b=a
    var pozwolenie=false
    var d=0;
    if(b==0){
        res.send("<html><head><meta http-equiv='refresh' content='2; url=/login' /></head><body>Brak kont</body></html>")
    }
    else{
        for(let c=0; c<b; c++){
            if(uczniowie[c].log==login){
                pozwolenie=true
                d=c
            }
        }
        if(pozwolenie==false){
            res.send("<html><head><meta http-equiv='refresh' content='2; url=/login' /></head><body>Nie ma takiego konta</body></html>")
        }
        else{
            if(uczniowie[d].pass==haslo){
                res.redirect("/admin")
            }
            else{
                res.send("<html><head><meta http-equiv='refresh' content='2; url=/login' /></head><body>złe hasło</body></html>")
            }
        }
    }
})
app.get('/sort', function (req, res) {
    sort = req.query.sort
    var options = ""
    if (sort == 1) {
        uczniowie.sort(function (a, b) {
            return parseFloat(a.wiek) - parseFloat(b.wiek);
        }).reverse();
        console.log(uczniowie);
        for (i = 0; i < uczniowie.length; i++) {
            options += '<tr><td>id:' + uczniowie[i].id + '</td>' + '<td>login:' + uczniowie[i].pass + '</td>' + '<td>age:' + uczniowie[i].wiek + '</td>' + '</tr>'
        }
        res.send('<a href="/sort">sort</a>  <a href="/show">show</a>    <a href="/gender">gender</a><br><form method="GET" action="/sort" onchange="this.submit()"><input type="radio" value="0" name="sort">rosnąco<input type="radio" value="1" checked name="sort">malejąco</form><br><table>' + options + '</table>')
    } else {
        uczniowie.sort(function (a, b) {
            return parseFloat(a.wiek) - parseFloat(b.wiek);
        });
        console.log(uczniowie);
        for (i = 0; i < uczniowie.length; i++) {
            options += '<tr><td>id:' + uczniowie[i].id + '</td>' + '<td>login:' + uczniowie[i].pass + '</td>' + '<td>age:' + uczniowie[i].wiek + '</td>' + '</tr>'
        }
        res.send('<a href="/sort">sort</a>  <a href="/show">show</a>    <a href="/gender">gender</a><br><form method="GET" action="/sort" onchange="this.submit()"><input type="radio" value="0" checked name="sort">rosnąco<input type="radio" value="1" name="sort">malejąco</form><br><table>' + options + '</table>')
    }
})
/*app.get("/sort", function(req, res){
    var x= "<form onchange='this.submit()' /> <input type='radio' name='sortowanie' value='rosnaca'>rosnaca<input type='radio' name='sortowanie' value='malejaca'>malejaca<br/><table>"
    var kierunek=req.query.sortowanie
    uczniowie.sort();
    console.log(uczniowie)
    if(kierunek=="malejaca"){
        uczniowie.reverse();
        
    }
    for(let a=0; a<uczniowie.length; a++){
        x=x+"<tr><th>"+ uczniowie[a].id+"</th><th>" +uczniowie[a].log +"</th><th>"+uczniowie[a].wiek +"</th></tr>"
    }
    x=x+"</table>"
    res.send("<html><body><ul><li><a href='/sort'>sort</a></li><li><a href='/gender'>gender</a></li><li><a href='/show'>show</a></li></ul>"+x+ "</body></html>")
})
*/
app.get("/gender", function(req, res){
    var x=""
    var tab1=[]
    var tab2=[]
    var y=0
    var z=0
    for(let a=0;a<uczniowie.length;a++){
        if(uczniowie[a].plec=="K"){
            tab1[y]=uczniowie[a]
            y=y+1;
        }
        else{
            tab2[z]=uczniowie[a]
            z=z+1
        }
    }
    x=x+"<table>"
    for(let a=0; a<tab1.length;a++){
        x=x+"<tr><th>"+ tab1[a].id+"</th><th>" +tab1[a].plec +"</th></tr>"
    }
    x=x+"</table><br/><table>"
    for(let a=0; a<tab2.length;a++){
        x=x+"<tr><th>"+ tab2[a].id+"</th><th>" +tab2[a].plec +"</th></tr>"
    }
    x=x+"</table>"
    res.send("<html><body><ul><li><a href='/sort'>sort</a></li><li><a href='/gender'>gender</a></li><li><a href='/show'>show</a></li></ul>" +x+ "</body></html>")
})

app.get("/show", function(req, res){


    res.send("<html><body><ul><li><a href='/sort'>sort</a></li><li><a href='/gender'>gender</a></li><li><a href='/show'>show</a></li></ul> </body></html>")
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})