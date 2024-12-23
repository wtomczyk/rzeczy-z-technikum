console.log("wczytano plik Ui.js")

class Ui {

    constructor() {
        console.log("konstruktor klasy Ui");
        this.pierwszygracz=null;
        this.drugigracz=null;
        this.kolor=null;
    }
    sprawdzenie(obj){
        console.log("aaa")
        game.tworzenieplanszy()
    }
    interfejs(){
        
        document.getElementById("zapytanie").innerHTML="podaj login"
        var login = document.createElement("input")
        $("#zapytanie").append(login)
        var przycisk = document.createElement("button")
        przycisk.id="przycisk"
        $("#zapytanie").append(przycisk)
        przycisk.innerHTML="login"
        var przycisk2 = document.createElement("button")
        przycisk2.id="przycisk2"
        $("#zapytanie").append(przycisk2)
        przycisk2.innerHTML="reset"
        $( przycisk ).click(function() {
            console.log(login.value)
            if(login.value!=""){
                net.info(login.value)
            }
        });
        $( przycisk2 ).click(function() {
            net.reset()
        });
    }
    obecnosc(obj){
        this.pierwszygracz=obj.pierwszygracz
        this.drugigracz=obj.drugigracz
        console.log(this.pierwszygracz)
        console.log(this.drugigracz)
    }
    infozwrotne(obj){
        document.getElementById("zapytanie").innerHTML="czekam..."
        var that=this
        var aa = setInterval(function(){ 
            net.obecnigracze(); 
            var info=that.drugigracz
            if(info!=null){
                clearInterval(aa);
                console.log(obj)
                document.getElementById("zapytanie").innerHTML=""
                if(obj.odezwa==1){
                    var a = "biale"
                    that.kolor=a
                    document.getElementById("zapytanie").innerHTML="witaj " + obj.pierwszygracz + ", grasz białymi"
                    game.gra(a)  
                }
                else if(obj.odezwa==2){
                    var a = "biale"
                    that.kolor=a
                    document.getElementById("zapytanie").innerHTML="juz jest taki gracz"
                    
                }
                else if(obj.odezwa==3){
                    var a = "czarne"
                    that.kolor=a
                    document.getElementById("zapytanie").innerHTML="witaj " + obj.drugigracz + ", grasz czarnymi"
                    game.gra(a)
                }
                else if(obj.odezwa==4){
                    var a = "czarne"
                    that.kolor=a
                    document.getElementById("zapytanie").innerHTML="juz jest taki gracz"
                
                }
                else if(obj.odezwa==5){
                    document.getElementById("zapytanie").innerHTML="wszystkie miejsca zajęte"
                }
            }
        },500);
    }
    przycisknapozycje(info){
       //console.log(this.kolor)
        var kolorek = this.kolor
        var pole = document.getElementById("pole")
        pole.innerHTML=""
        pole.style.position="relative"
        if(kolorek=="biale"){
            for(var a=0;a<8;a++){
                for(var b = 0;b<8;b++){
                    var pudelko = document.createElement("div")
                    pudelko.style.width="20px"
                    pudelko.style.height="20px"
                    pudelko.style.border="1px solid black"
                    pudelko.style.float="left"
                    pudelko.style.textAlign="center"
                    if(info[a][b]==0){
                        pudelko.innerHTML="0"
                    }
                    else if(info[a][b]==1){
                        pudelko.innerHTML="1"
                        pudelko.style.color="green"
                    }
                    else{
                        pudelko.innerHTML="2"
                        pudelko.style.color="red"
                    }
                    $(pole).append(pudelko)
                }
            }
        }
        else if(kolorek=="czarne"){
            var licznik = 140
            for(var a=0;a<8;a++){
                for(var b = 0;b<8;b++){
                    var pudelko = document.createElement("div")
                    pudelko.style.width="20px"
                    pudelko.style.height="20px"
                    pudelko.style.border="1px solid black"
                    pudelko.style.position="absolute"
                    pudelko.style.bottom=(a*20)+"px"
                    pudelko.style.left=(licznik-b*20)+"px"
                    pudelko.style.textAlign="center"
                    if(info[a][b]==0){
                        pudelko.innerHTML="0"
                    }
                    else if(info[a][b]==1){
                        pudelko.innerHTML="1"
                        pudelko.style.color="green"
                    }
                    else{
                        pudelko.innerHTML="2"
                        pudelko.style.color="red"
                    }
                    $(pole).append(pudelko)
                }

            }
        }
        console.log(info)
    }
}