console.log("wczytano plik main.js")
var setup;
var main3d;
var ui;
var net;
setup = new Setup();
main3d = new Main3d();
ui = new Ui();
net = new Net();
$(document).ready(()=>{
    net.start()
    console.log("załadowano plik main.js")
})
