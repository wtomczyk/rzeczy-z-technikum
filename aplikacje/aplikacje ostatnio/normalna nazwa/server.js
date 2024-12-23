var http = require("http");
var fs = require("fs");
var qs = require("querystring");

var gracze = {
    pierwszygracz:null,
    drugigracz:null,
    odezwa:null    
}

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
         
        else if (req.url === "/three_ver97.js") {
            fs.readFile("static/three_ver97.js", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
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
        else if (req.url === "/FBXLoader.js") {
            fs.readFile("static/FBXLoader.js", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
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
        
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //jak ogarniesz by wsszystkie pliki js czytało bez nazw podawania to będe wdzięczny
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //a no i wczytywanie obrazków sie zjebało raz jeszcze
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        /*
        else if(req.url.indexOf(".js") != -1) {
            fs.readFile(__dirname + decodeURI(req.url), function (error, data) {
               res.writeHead(200, { "Content-type": 'application/javascript' });
               res.write(data);
               res.end();
            })
        }
        */
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
                var rzecz = finish.rzecz
                if(gracze.pierwszygracz==null){
                    gracze.pierwszygracz=rzecz
                    gracze.odezwa=1
                    //pierwszy gracz sie zalogowal
                }else if(gracze.pierwszygracz==rzecz){
                    gracze.odezwa=2
                    //nazwa ta sama co pierwyj gracz
                }
                else if(gracze.drugigracz==null){
                    gracze.drugigracz=rzecz
                    gracze.odezwa=3
                    //drugi gracz sie zalogowal
                }
                else if(gracze.drugigracz==rzecz){
                    gracze.odezwa=4
                    //nazwa ta sama co wtaroj gracz
                }
                else{
                    gracze.odezwa=5
                    //nazwa sie nie powtorzyla, lecz miejsca zapelnione
                }
                console.log(gracze)
                //res.writeHead(200, { 'Content-Type': 'text/plain;;charset=utf-8' });
                res.end(JSON.stringify(gracze, null, 4));
            })
        }
        else if (req.url == "/aaa") {
            var allData = "";
            req.on("data", function (data) {
                //console.log("data: " + data)
                allData += data;
            })
            req.on("end", function (data) {
                var finish = qs.parse(allData)
                //res.writeHead(200, { 'Content-Type': 'text/plain;;charset=utf-8' });
                res.end(JSON.stringify(gracze, null, 4));
            })
        }


            function servResponse(){
                var allData = "";

            req.on("data", function (data) {
                console.log("data: " + data)
                allData += data;
            })

            req.on("end", function (data) {
                
                res.end(JSON.stringify(gracze, null, 4));
            
            })
        }                     
    servResponse(req, res)
            break;
        } 
});
server.listen(3000, function(){
    console.log("serwer startuje na porcie 3000")
 });