var http = require("http");
var fs = require("fs");
var qs = require("querystring")
var zezwolenie = true;
var tabela={
    customfolder:[],
    customplik:[],
    customrozmiar:[],
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
             else if(req.url.indexOf(".jpg") != -1) {
                fs.readFile(__dirname + decodeURI(req.url), function (error, data) {
                   res.writeHead(200, { "Content-type": "image/jpg" });
                   res.write(data);
                   res.end();
                })
             }
             
                break;
            case "POST":
                if (req.url == "/dodajinfo") {
                    var allData = "";
                    req.on("data", function (data) {
                        console.log("data: " + data)
                        allData += data;
                    })
                    req.on("end", function (data) {
                        var finish = qs.parse(allData)
                        console.log(finish)
                        
                        tabela.customfolder.push(finish.folder)
                        tabela.customplik.push(finish.plik)
                        tabela.customrozmiar.push(finish.rozmiar)
                        console.log(tabela)
                        
                        //res.writeHead(200, { 'Content-Type': 'text/plain;;charset=utf-8' });
                        res.end(JSON.stringify());
                    })
                    console.log("aaa")
                }
                else if(req.url == "/czyn"){
                    res.end(JSON.stringify(tabela));
                }
                else{
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
                        files: [],
                        rozmiary:[],
                        pierwszyclick: true,
                        customfolder:[],
                        customplik:[],
                        customrozmiar:[],

                    }
                    test = ""
                    
                    test=allData.split("&")
                    customowerzeczy = test
                    console.log(customowerzeczy)
                    test = test[0].split("=")
                    
                    console.log(test)
                if(test==undefined){
                    res.end(JSON.stringify(pliki, null, 4));
                }
                else if(test!=''){
                    console.log(pliki)
                        fs.readdir(__dirname + "/static/mp3/" + test[1], function (err, files) {
                            if (err) {
                                return console.log(err);
                            }
                            files.forEach(function (nazwapliku) {
                                console.log(nazwapliku);
                                pliki.files.push(nazwapliku)

                                var stats = fs.statSync(__dirname + "/static/mp3/" + test[1]+ "/" +nazwapliku)
                                pliki.rozmiary.push(stats.size)
                            });
                            /*
                            if(customowerzeczy[1]!=undefined){
                                a1 = customowerzeczy[1].split("=")
                                pliki.customfolder.push(a1[1])
                                a2 = customowerzeczy[2].split("=")
                                a2[1] = a2[1].replace("+"," ")
                                pliki.customplik.push(a2[1])
                                a3 = customowerzeczy[3].split("=")
                                pliki.customrozmiar.push(a3[1])
                                console.log(pliki)
                            }
                            console.log("")
                            console.log(pliki.customfolder)
                            console.log("")
                            */
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

                                var stats = fs.statSync(__dirname + "/static/mp3/" + pliki.albums[0]+ "/"+nazwapliku)
                                pliki.rozmiary.push(stats.size)
                            });
                            res.end(JSON.stringify(pliki, null, 4));
                        });
                    });
                }
                })
            } 
                      
        servResponse(req, res)
                break;
            } 
        }
    });
      


server.listen(3000, function(){
   console.log("serwer startuje na porcie 3000")
});
