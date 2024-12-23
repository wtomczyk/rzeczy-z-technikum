var http = require("http");
var colors = require("colors");
var fs = require("fs");
var http = require("http");
var qs = require("querystring")
var server = http.createServer(function (req, res) {
    // parametr res oznacza obiekt odpowiedzi serwera (response)
    // parametr req oznacza obiekt żądania klienta (request)

    switch (req.method) {
        case "GET":
            if (req.url === "/style.css") {
                fs.readFile("static/style.css", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'text/css' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url === "/") {
                fs.readFile("static/index1.html", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'text/html;;charset=utf-8' });
                    res.write(data);
                    res.end();
                })
            }
            break;
        case "POST":
            // tu wywołaj funkcję "servResponse", która pobierze dane przesłane 
            // w formularzu i odpowie do przeglądarki 
            // (uwaga - adres żądania się nie zmienia)

            servResponse(req, res)

            break;

    }
})

function servResponse(req, res) {
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
        res.writeHead(200, { 'Content-Type': 'text/html;;charset=utf-8' });
        res.end("odsyłam do przeglądarki" + JSON.stringify(finish));
    })

}

server.listen(3000, function () {
    console.log("serwer startuje na porcie 3000")
});