var net;
var ui;
var game;

$(document).ready(() => {
    console.log("document ready");
    net = new Net();
    ui = new Ui();
    game = new Game();

    net.start()
})
console.log("main.js loaded");
