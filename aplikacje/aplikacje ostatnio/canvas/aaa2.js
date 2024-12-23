window.onload=function(){
    setInterval(function(){
        function getMousePos(canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            return {
              x: evt.clientX - rect.left,
              y: evt.clientY - rect.top
            };
        }

        document.getElementById("canvas").addEventListener("mousemove",function(e){
            var a = e.clientX
            var b = e.clientY
            var c = document.getElementById("canvas");
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.arc(getMousePos(document.getElementById("canvas"),e).x, getMousePos(document.getElementById("canvas"),e).y, 50, 1.5 * Math.PI, 1 * Math.PI);
            ctx.stroke();
        })
    },100)
}