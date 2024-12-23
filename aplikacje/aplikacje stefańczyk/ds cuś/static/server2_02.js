var http = require("http");
var fs = require("fs");
var qs = require("querystring")

var server = http.createServer(function(req,res){ 
    console.log(req.method) // zauważ ze przesyłane po kliknięciu butona dane, będą typu POST     
    

        switch (req.method) {
            case "GET":
                fs.readFile("static/index.html", function (error, data) {   
        
        if (error) {
            res.writeHead(404, { 'Content-Type': 'text/html ;charset=utf-8'});
            res.write("<h1>błąd 404 - nie ma pliku!<h1>");
            res.end();
        }

        else {
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
            res.write(data);
            res.end();
        }
    })
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

                    
                    var finish = qs.parse(allData)
                    console.log(finish.bt1)
                    var a = finish.txt1
                    var b = finish.txt2
                    var suma = a+b
                    var iloczyn = a*b
                    
                    res.end("odsyłam do przeglądarki" + JSON.stringify(finish));
                    
                })
            }
                                
        servResponse(req, res)
                        
                break;
                        
            } 
    });
      


server.listen(3000, function(){
   console.log("serwer startuje na porcie 3000")
});
