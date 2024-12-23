var http = require("http")
var express = require("express")
var app = express()
const PORT = 3000;
var tab = [
    { id: 1, log: "MMMM", uczen: true, wiek: 10, plec: "m" },
    { id: 2, log: "AAAA", uczen: true, wiek: 12, plec: "m" },
    { id: 3, log: "CCCC", uczen: true, wiek: 19, plec: "m" },
    { id: 4, log: "IIII", uczen: true, wiek: 18, plec: "m" },
    { id: 5, log: "EEEE", uczen: true, wiek: 19, plec: "m" },
    { id: 6, log: "JJJJ", uczen: true, wiek: 13, plec: "m" },
    { id: 7, log: "---", uczen: false, wiek: 14, plec: "x" },
    { id: 8, log: "AAA", uczen: false, wiek: 14, plec: "k" },
    { id: 9, log: "BBB", uczen: false, wiek: 14, plec: "k" },
    { id: 10, log: "CCC", uczen: false, wiek: 14, plec: "k" }
]
app.use(express.static('static'))

app.get("/", function (req, res) {
    var tabela = "<html><body><table>"

    for (a = 0; a < 10; a++) {
        if (tab[a].plec == "m") {
            if (tab[a].uczen == true) {
                aa = "<input type='checkbox' checked disabled>"
            }
            else {
                aa = "<input type='checkbox'disabled>"
            }
            tabela = tabela + "<tr ><td style='border: 1px solid blue'>id: " + tab[a].id + "</td><td style='border: 1px solid blue'>log: " + tab[a].log + "</td><td <tr style='border: 1px solid blue'>uczen: " + aa + "</td><td <tr style='border: 1px solid blue'>wiek: " + tab[a].wiek + "</td><td <tr style='border: 1px solid blue'>plec: " + tab[a].plec + "</td></tr>"

        }
        else if (tab[a].plec == "k") {
            if (tab[a].uczen == true) {
                aa = "<input type='checkbox' checked disabled>"
            }
            else {
                aa = "<input type='checkbox' disabled>"
            }
            tabela = tabela + "<tr ><td style='border: 1px solid pink'>id: " + tab[a].id + "</td><td style='border: 1px solid pink'>log: " + tab[a].log + "</td><td style='border: 1px solid pink'>uczen: " + aa + "</td><td style='border: 1px solid pink'>wiek: " + tab[a].wiek + "</td><td style='border: 1px solid pink'>plec: " + tab[a].plec + "</td></tr>"

        }
        else {
            if (tab[a].uczen == true) {
                aa = "<input type='checkbox' checked disabled>"
            }
            else {
                aa = "<input type='checkbox' disabled>"
            }
            tabela = tabela + "<tr ><td style='border: 1px solid black'>id: " + tab[a].id + "</td><td style='border: 1px solid black'>log: " + tab[a].log + "</td><td style='border: 1px solid black'>uczen: " + aa + "</td><td style='border: 1px solid black'>wiek: " + tab[a].wiek + "</td><td style='border: 1px solid black'>plec: " + tab[a].plec + "</td></tr>"

        }
    }
    tabela = tabela + "</table></body></html>"


    res.send(tabela)
})


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})