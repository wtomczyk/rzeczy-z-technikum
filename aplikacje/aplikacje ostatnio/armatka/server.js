var bodyParser = require("body-parser")
var http = require("http")
var express = require("express")
var app = express()
var server = http.Server(app)
var path = require("path")
const PORT = 3000
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('static'))

server.listen(PORT, function(){
    console.log("serwer startuje na porcie " + PORT)
})

var clients = []
var socketio = require("socket.io")(server)
var io = socketio.listen(server)
io.sockets.on("connection", function (client) {
    clients.push(client.id)
	
	io.sockets.emit("onconnect", {
       players:clients.length,
	   first:clients[0]
	})
	
	

	client.on("disconnect", function () {
        clients = []
    })

})

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/index.html"))
})