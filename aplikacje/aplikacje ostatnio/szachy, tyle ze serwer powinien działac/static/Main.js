var net;
var ui;
var game;
var pionek;
$(document).ready(() => {
    console.log("document ready");
    net = new Net();
    ui = new Ui();
    game = new Game();
    pionek = new Pionek();
    net.start()
})
console.log("main.js loaded");
