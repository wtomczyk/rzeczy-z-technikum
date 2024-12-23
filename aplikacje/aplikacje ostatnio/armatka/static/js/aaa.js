//var main3d;
var ball;
var cannon;
var net;

$(document).ready(() => {
    console.log("document ready");
    client = io()
    main3d = new Main3D();
    ball = new Ball();
    cannon = new Cannon();
    net = new Net();
    main3d.start();
})