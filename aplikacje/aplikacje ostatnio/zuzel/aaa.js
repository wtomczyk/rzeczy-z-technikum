window.onload=function(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth=3
    ctx.arc(75, 75, 75, Math.PI*0.5,  Math.PI*1.5);
    ctx.arc(225, 75, 75, Math.PI*1.5,  Math.PI*0.5);
    ctx.lineTo(75, 150);
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.stroke(); 
    ctx.beginPath();
    ctx.lineWidth=3
    ctx.arc(75, 75, 25, Math.PI*0.5,  Math.PI*1.5);
    ctx.arc(225, 75, 25, Math.PI*1.5,  Math.PI*0.5);
    ctx.lineTo(75, 100);
    ctx.stroke(); 
    ctx.fillStyle = "#FFFF00";
    ctx.fill();
    ctx.stroke(); 
    for(var i = 0; i < 4; i++){
        document.getElementsByTagName("input")[i].addEventListener("keypress", function(e){
            this.value=""
            setTimeout(() => {
                this.value = e.code
            })
        })
    }
    for(var a = 0;a<4;a++){
        var motorek = document.createElement("div")
        motorek.id="motor"+(a+1)
        this.document.getElementById("main").append(motorek)
    }
}
gra=function(){
    var tablica = []
    var kolorki = []
    kolorki[0]="lightgray"
    kolorki[1]="black"
    kolorki[2]="blue"
    kolorki[3]="red"
    class gracz {
        constructor(numer) {
            this.canvas = document.getElementById("canvas");
            this.numer = numer
            this.ctx = this.canvas.getContext("2d")
            this.kolorki = kolorki[numer]
            this.okrazenie = 1
            var sumaokrozen = document.getElementById("iloscokrazen").value
            document.getElementById("gracz" + (numer + 1)+"okrozenia").innerHTML = this.okrazenie + " / " + sumaokrozen
            this.position = { 
                x: 162.5,
                y: 210 + (numer * 10) 
            }
            this.kat = Math.PI / 2
            this.przycisk = document.getElementById("gracz" + (numer + 1)).value
            this.kierunek = false
            this.przegrana = false
            this.motor()
            this.start()
        }
        motor(){
            this.motor = document.getElementById("motor"+(this.numer+1))
            this.motor.style.backgroundImage = "url('gfx/player" + (this.numer + 1) + ".png')"
            this.motor.style.transform = "rotate(" + ((this.kat * 180) / Math.PI) + "deg)"
            this.motor.style.top = "400px"
            this.motor.style.left = "325px"
        } 
        start() {
            this.moveFunction = setInterval(() => {      
                this.ctx.beginPath()
                this.ctx.lineWidth = 1
                this.ctx.strokeStyle = this.kolorki
                this.ctx.moveTo(this.position.x/2, this.position.y/2)
                this.x = Math.sin(this.kat)
                this.y = Math.cos(this.kat)
                this.position.x += this.x
                this.position.y += this.y
                this.ctx.lineTo(this.position.x/2, this.position.y/2)
                if(this.position.x - this.x < 162.5 && this.position.x > 162.5){
                    this.okrazenie++
                    var sumaokrozen = document.getElementById("iloscokrazen").value
                    if(this.okrazenie - parseInt(sumaokrozen) == 1){
                        this.zwyciestwo(this.numer + 1)
                    } 
                    else{
                        document.getElementById("gracz" + (this.numer + 1)+"okrozenia").innerHTML = this.okrazenie + " / " + sumaokrozen
                    } 
                }
                this.ctx.stroke()
                this.motor.style.transform = "rotate(" + ( -(this.kat * 180) / Math.PI ) + "deg)"
                this.motor.style.top = (this.position.y - 17.5) + "px"
                this.motor.style.left = (this.position.x - 10) + "px"
                this.czysiewywalil()
            })
        }
        czysiewywalil(){
            if(this.position.x > 150 && this.position.x < 450){
                if(this.position.y < 2.5 || (this.position.y > 97.5 && this.position.y < 202.5) || this.position.y > 297.5){
                   this.przegrana = true 
                } 
            }
            else if(this.position.x > 450){
                var aaa = Math.pow( (this.position.y - 150), 2) + Math.pow( (this.position.x - 450), 2)
                if( aaa > Math.pow(147.5,2) || aaa < Math.pow(52.5,2)){
                    this.przegrana = true
                } 
            }
            else if(this.position.x < 150){
                var aaa = Math.pow( (this.position.y - 150), 2) + Math.pow( (this.position.x - 150), 2)
                if( aaa > Math.pow(147.5,2) || aaa < Math.pow(52.5,2)){
                    this.przegrana = true
                } 
            }
            if(this.przegrana == true){
                clearInterval(this.moveFunction)
                var playing = []
                for (var i = 0; i < document.getElementById("liczbagraczy").value; i++){
                    if(tablica[i].przegrana == false) {
                        playing.push(tablica[i].numer)
                    }
                }
                if(playing.length == 1) {
                    this.zwyciestwo(playing[0] + 1)
                }
            }
        }
        zezwolenienaskret() {
            this.kierunek = setInterval(() => { 
                this.kat += 0.015 
                }) 
            }
        zabronienieskretu() {
            clearInterval(this.kierunek)
            this.kierunek = false
        }
        zwyciestwo(player){
            for (var i = 0; i < document.getElementById("liczbagraczy").value; i++) clearInterval(tablica[i].moveFunction)
            alert("wygrał gracz " +  player)
        }   
    }
    for (var i = 0; i < document.getElementById("liczbagraczy").value; i++) {
        tablica[i] = new gracz(i)
    }
    window.addEventListener("keypress", function (e) {
        for (var i = 0; i < document.getElementById("liczbagraczy").value; i++) {
            if (tablica[i].kierunek == false && e.code == tablica[i].przycisk) {
                tablica[i].zezwolenienaskret()
            }
        }
    })
    window.addEventListener("keyup", function (e) {
        for (var i = 0; i < document.getElementById("liczbagraczy").value; i++) {
            if (e.code == tablica[i].przycisk) {
                tablica[i].zabronienieskretu()
            }
        }
    })
}