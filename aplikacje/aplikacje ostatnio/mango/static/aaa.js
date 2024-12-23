var net;
var main;

$(document).ready(() => {
    console.log("document ready");
    net = new Net();
    main = new Main();

    net.start()
})
console.log("main.js loaded");
