var http = require("http")
var express = require("express")
var app = express()
const PORT = 3000;
app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

var cookieParser = require("cookie-parser")

app.use(cookieParser())

app.get('/', function (req, res) {
    res
        .cookie("cookieA", "aaa", { expires: new Date(Date.now() + 1000 * 60 * 60 * 2), httpOnly: true })
        .send('cookieA zostało ustawione')

    console.log("cookies :  ", req.cookies);

});