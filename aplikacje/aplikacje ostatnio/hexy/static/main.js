var net;
var script;
var hex3d;
var level;
var main3d;
var door;
var light;
var player;
var grid;
var model;
var player;
var ally;
var model2;

$(document).ready(() => {
    console.log("document ready");
    net = new Net();
    player = new Player();
    script = new Script();
    hex3d= new Hex3D();
    level= new Level();
    model = new Model();
    grid=new Grid();
    player = new Player();
    main3d = new Main3D();
    model2 = new Model2();
    ally = new Ally();
    door = new Door();
    light = new Light

    //net.start();
})