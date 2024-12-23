window.onload=function(){
    setInterval(function(){
        var aaa=Math.random()*300
        var bbb=Math.random()*150
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(150, 75);
        ctx.lineTo(aaa, bbb);
        ctx.strokeStyle='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
        ctx.stroke(); 
    },10)
}