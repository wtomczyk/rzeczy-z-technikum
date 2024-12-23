var http = require("http");
var fs = require("fs");
var qs = require("querystring")
var pliki = {
    pierwszygracz:null,
    drugigracz:null,
    odezwa:null             
}
var przesuniecie = {
    tab:[],
    starapozycja:null,
    nowapozycja:null,
    gracz:"czarne"
}
var tablicapionkow=[
    [0, 2, 0, 2, 0, 2, 0, 2],
    [2, 0, 2, 0, 2, 0, 2, 0],
    [0, 2, 0, 2, 0, 2, 0, 2],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0]
]

var server = http.createServer(function(req,res){ 
        switch (req.method) {
            case "GET":
            if (req.url === "/") {
                fs.readFile("static/index.html", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url === "/style.css") {
                fs.readFile("static/style.css", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'text/css' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url === "/Main.js") {
                fs.readFile("static/Main.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url === "/Net.js") {
                fs.readFile("static/Net.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url === "/Ui.js") {
                fs.readFile("static/Ui.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url === "/Net.js") {
                fs.readFile("static/Net.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url === "/Pionek.js") {
                fs.readFile("static/Pionek.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if(req.url.indexOf(".png") != -1) {
                fs.readFile(__dirname + decodeURI(req.url), function (error, data) {
                   res.writeHead(200, { "Content-type": "image/png;charset=utf-8" });
                   res.write(data);
                   res.end();
                })
             }
             else if(req.url.indexOf(".jpg") != -1) {
                fs.readFile(__dirname + decodeURI(req.url), function (error, data) {
                   res.writeHead(200, { "Content-type": "image/jpg;charset=utf-8" });
                   res.write(data);
                   res.end();
                })
             }
            else if (req.url === "/Game.js") {
                fs.readFile("static/Game.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url === "/three_ver97.js") {
                fs.readFile("static/three_ver97.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            /*else if(req.url.indexOf(".js") != -1) {
                fs.readFile(__dirname + decodeURI(req.url), function (error, data) {
                   res.writeHead(200, { "Content-type": 'application/javascript' });
                   res.write(data);
                   res.end();
                })
             }*/
             
                break;
            case "POST":
            if (req.url == "/czyn") {
                var allData = "";
                req.on("data", function (data) {
                    console.log("data: " + data)
                    allData += data;
                })
                req.on("end", function (data) {
                    var finish = qs.parse(allData)
                    console.log(finish)
                    console.log(pliki)
                    var rzecz = finish.rzecz
                    if(pliki.pierwszygracz==null){
                        pliki.pierwszygracz=rzecz
                        pliki.odezwa=1
                    }else if(pliki.pierwszygracz==rzecz){
                        pliki.odezwa=2
                    }
                    else if(pliki.drugigracz==null){
                        pliki.drugigracz=rzecz
                        pliki.odezwa=3
                    }
                    else if(pliki.drugigracz==rzecz){
                        pliki.odezwa=4
                    }
                    else{
                        pliki.odezwa=5
                    }
                    tablicapionkow=[
                        [0, 2, 0, 2, 0, 2, 0, 2],
                        [2, 0, 2, 0, 2, 0, 2, 0],
                        [0, 2, 0, 2, 0, 2, 0, 2],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [1, 0, 1, 0, 1, 0, 1, 0],
                        [0, 1, 0, 1, 0, 1, 0, 1],
                        [1, 0, 1, 0, 1, 0, 1, 0]
                    ]
                    przesuniecie = {
                        tab:[],
                        starapozycja:null,
                        nowapozycja:null,
                        gracz:"czarne"
                    }
                    //res.writeHead(200, { 'Content-Type': 'text/plain;;charset=utf-8' });
                    res.end(JSON.stringify(pliki, null, 4));
                })
            }
            if (req.url == "/obecnosc") {
                var allData = "";
                req.on("data", function (data) {
                    //console.log("data: " + data)
                    allData += data;
                })
                req.on("end", function (data) {
                    //res.writeHead(200, { 'Content-Type': 'text/plain;;charset=utf-8' });
                    res.end(JSON.stringify(pliki, null, 4));
                })
            }
            if (req.url == "/reset") {
                var allData = "";
                req.on("data", function (data) {
                    console.log("data: " + data)
                    allData += data;
                })
                req.on("end", function (data) {
                    pliki.pierwszygracz=null
                    pliki.drugigracz=null
                    pliki.odezwa=null
                    //res.writeHead(200, { 'Content-Type': 'text/plain;;charset=utf-8' });
                    res.end(JSON.stringify(pliki, null, 4));
                })
            }
            if (req.url == "/tablica") {
                req.on("data", function (data) {
                    //console.log("data: " + data)
                    allData += data;
                })
                req.on("end", function (data) {
                    var finish = qs.parse(allData)
                    //console.log(finish)
                    
                    var stare=finish.stare.split("_")
                    var nowe = finish.nowe.split("_")
                    if(finish.graczwysylajacy=="biale"){
                        tablicapionkow[stare[2]][stare[1]]=0
                        tablicapionkow[nowe[2]][nowe[1]]=1
                    }
                    else{
                        tablicapionkow[stare[2]][stare[1]]=0
                        tablicapionkow[nowe[2]][nowe[1]]=2
                    }
                    przesuniecie.tab=tablicapionkow
                    przesuniecie.starapozycja=finish.stare
                    przesuniecie.nowapozycja=finish.nowe
                    przesuniecie.gracz=finish.graczwysylajacy
                    console.log(przesuniecie)
                    //res.writeHead(200, { 'Content-Type': 'text/plain;;charset=utf-8' });
                    res.end(JSON.stringify(przesuniecie, null, 4));
                })
            }
            if (req.url == "/tura") {
                req.on("data", function (data) {
                    //console.log("data: " + data)
                    allData += data;
                })
                req.on("end", function (data) {
                    przesuniecie.tab=tablicapionkow
                    res.end(JSON.stringify(przesuniecie, null, 4));
                })
            }
                // tu wywołaj funkcję "servResponse", która pobierze dane przesłane 
                // w formularzu i odpowie do przeglądarki 
                // (uwaga - adres żądania się nie zmienia)
                function servResponse(){
                    var allData = "";

                //kiedy przychodzą dane POSTEM, w postaci pakietów,
                //łącza się po kolei do jednej zmiennej "allData"
                // w poniższej funkcji nic nie modyfikujemy

                req.on("data", function (data) {
                    console.log("data: " + data)
                    allData += data;
                })

                //kiedy przyjdą już wszystkie dane
                //parsujemy je do obiektu "finish"
                //i odsyłamy do przeglądarki

                req.on("end", function (data) {
                    
                    res.end(JSON.stringify(pliki, null, 4));
                
                })
            }                     
        servResponse(req, res)
                break;
            } 
    });
      


server.listen(3000, function(){
   console.log("serwer startuje na porcie 3000")
});
