var http = require("http");
var fs = require("fs");
var qs = require("querystring")
var zezwolenie = true;
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
            else if (req.url === "/Music.js") {
                fs.readFile("static/Music.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if(req.url.indexOf(".mp3") != -1) {
                fs.readFile(__dirname + decodeURI(req.url), function (error, data) {
                   res.writeHead(200, { "Content-type": "audio/mpeg" });
                   res.write(data);
                   res.end();
                })
             }
             else if(req.url.indexOf(".png") != -1) {
                fs.readFile(__dirname + decodeURI(req.url), function (error, data) {
                   res.writeHead(200, { "Content-type": "image/png" });
                   res.write(data);
                   res.end();
                })
             }
             
                break;
            case "POST":
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
                    var pliki = {
                        albums: [],
                        files: []
                    }
                    test = ""
                    test = allData.split("=")
                    console.log(test)
                if(test!=''){
                        fs.readdir(__dirname + "/static/mp3/" + test[1], function (err, files) {
                            if (err) {
                                return console.log(err);
                            }
                            files.forEach(function (nazwapliku) {
                                console.log(nazwapliku);
                                pliki.files.push(nazwapliku)
                            });
                            res.end(JSON.stringify(pliki, null, 4));
                });
                }
                else{
                    fs.readdir(__dirname + "/static/mp3", function (err, files) {
                        if (err) {
                            return console.log(err);
                        }
                        files.forEach(function (nazwapliku) {
                            console.log(nazwapliku);
                            pliki.albums.push(nazwapliku)
                        });
                        fs.readdir(__dirname + "/static/mp3/" + pliki.albums[0], function (err, files) {
                            if (err) {
                                return console.log(err);
                            }
                            files.forEach(function (nazwapliku) {
                                console.log(nazwapliku);
                                pliki.files.push(nazwapliku)
                            });
                            console.log(pliki.images)
                            res.end(JSON.stringify(pliki, null, 4));
                        });
                    });
                }
                })
            }                     
        servResponse(req, res)
                break;
            } 
    });
      


server.listen(3000, function(){
   console.log("serwer startuje na porcie 3000")
});
