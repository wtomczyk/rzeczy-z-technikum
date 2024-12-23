var net;
var ui;

$(document).ready(() => {
    console.log("document ready");
    net = new Net();
    ui = new Ui();

    net.start()
})
console.log("main.js loaded");
