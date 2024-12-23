console.log("wczytano plik script.js")

class Script {
    constructor() {
        this.kliknietyelement=""
        this.typ = "sciana"
        this.mapa = {
            wielkosc: null,
            poziom:[] ,
        }
        this.licznik=0,
        this.tekst=""
    }
    aaa(aa){
        document.getElementById("dane").innerHTML=""
        this.tekst=""
        this.mapa.poziom=[]
        aa=JSON.parse(aa.data)
        this.licznik=aa.wielkosc
        script.myFunction()
        var dlugosc = aa.poziom.length
        var idobraza = ""
        var dzialajze = aa.poziom
        this.mapa.poziom = aa.poziom
        for(var kek=0;kek<dlugosc;kek++){
            idobraza = dzialajze[kek].id
            console.log(idobraza)
            var aa=new Image
            aa.classList.add("strzala")  
            aa.src="strzala.jpg"
            if(dzialajze[kek].dirOut==0){
                aa.style.transform="rotate(90deg)"
            }
            else if(dzialajze[kek].dirOut==1){
                aa.style.transform="rotate(150deg)"
            }
            else if(dzialajze[kek].dirOut==2){
                aa.style.transform="rotate(210deg)"
            }
            else if(dzialajze[kek].dirOut==3){
                aa.style.transform="rotate(270deg)"
            }
            else if(dzialajze[kek].dirOut==4){
                aa.style.transform="rotate(330deg)"
            }
            else if(dzialajze[kek].dirOut==5){
                aa.style.transform="rotate(390deg)"
            }
            aa.style.zIndex="4"
            var div = document.createElement('div');
            div.innerHTML=dzialajze[kek].dirOut
            div.classList.add("numer") 
            div.style.width="25px"
            div.style.height="25px"
            div.style.display="block"
            div.style.position="absolute"
            div.style.top="12.5px"
            div.style.left="12.5px"
            div.style.lineHeight="25px"
            div.style.textAlign="center"
            div.style.transform="rotate(0deg)"
            if(dzialajze[kek].type=="sciana"){
                div.style.backgroundColor="gray"
            }
            else if(dzialajze[kek].type=="potwor"){
                div.style.backgroundColor="red"
            }
            else if(dzialajze[kek].type=="skarb"){
                div.style.backgroundColor="gold"
            }
            else if(dzialajze[kek].type=="swiatlo"){
                div.style.backgroundColor="lightgray"
            }
            else if(dzialajze[kek].type=="ally"){
                div.style.backgroundColor="white"
            }
            document.getElementById(idobraza).appendChild(aa)
            document.getElementById(idobraza).appendChild(div)
            
        }
        this.tekst="wielkosc: " +this.licznik + "<br/>"
        for(var c=0;c<dzialajze.length;c++){
            this.tekst+="{" + "<br/> id: " + dzialajze[c].id + "<br/> col: " + dzialajze[c].col + "<br/> row:" +dzialajze[c].row + "<br/> dirout:" +dzialajze[c].dirOut + "<br/>  dirin: " + dzialajze[c].dirIn + "<br/>type:" + dzialajze[c].type + "<br/>"+ "}" + "<br/>"
        }
        document.getElementById("dane").innerHTML=this.tekst
        //ładowanie hexów
    }
    sciana(){
    this.typ="sciana"
        }
    potwor(){
    this.typ="potwor"
    }
    skarb(){
    this.typ="skarb"
    }
    swiatlo(){
        this.typ="swiatlo"
        }
    ally(){
        this.typ="ally"
        }
    czytajliczbe(){
        this.mapa.poziom=[]
    this.tekst=""
    this.licznik=document.getElementById("select").value
    document.getElementById("dane").innerHTML=""
    }
    graj(){
        Settings.tab=this.mapa
        Settings.zezwolenie=true
        console.log(Settings.radius)
        console.log(Settings.material1)
        console.log(Settings.material2)
        console.log(this.mapa.poziom)
        main3d.tworzenieplanszy(this.mapa.poziom,this.mapa.wielkosc)
    }
myFunction(){
    document.getElementById("prawo").innerHTML = ""
    var aa = 0
    var bb = 0
    var sprawdzenie=true
    this.mapa.wielkosc=this.licznik
    console.log(this.licznik)
    for(var a=0;a<this.licznik;a++){        
        for(var b=0;b<this.licznik;b++){
            var obrazek = document.createElement("div")
            obrazek.classList.add("hex")    
            document.getElementById("prawo").appendChild(obrazek)
            obrazek.style.backgroundImage = "url('hex.jpg')";
            obrazek.style.backgroundSize="100% 100%"
            obrazek.style.top=aa+"px"
            obrazek.style.left=bb+"px"
            obrazek.id="obraz_"+a+"_"+b
            aa+=50
            obrazek.onclick = function(){
                var elementy = this.id.split("_")
                a=elementy[1]
                b=elementy[2]
                script.clickanie(a,b) 
            }
            }
            bb+=38
            if(sprawdzenie){
                aa=25
                sprawdzenie=false
            }
            else{
                aa=0
                sprawdzenie=true
            }
        }
    }
clickanie(a,b){
    this.kliknietyelement=document.getElementById("obraz_"+a+"_"+b)
    console.log(this.kliknietyelement)
    document.getElementById("dane").innerHTML=""
    if(document.getElementById("obraz_"+a+"_"+b).children.length==0){
        var aa=new Image
        aa.classList.add("strzala")  
        aa.src="strzala.jpg"
        aa.style.transform="rotate(90deg)"
        aa.style.zIndex="4"
        document.getElementById("obraz_"+a+"_"+b).appendChild(aa)
        var div = document.createElement('div');
        div.innerHTML=0
        //style
        div.classList.add("numer") 
        div.style.width="25px"
        div.style.height="25px"
        div.style.display="block"
        div.style.position="absolute"
        div.style.top="12.5px"
        div.style.left="12.5px"
        div.style.lineHeight="25px"
        div.style.textAlign="center"
        div.style.transform="rotate(0deg)"
        var entry = this.mapa.poziom.find(hexagon => hexagon.id == this.kliknietyelement.id)
        this.mapa.poziom.push(
            {
                id: this.kliknietyelement.id,
                col: parseFloat(a)+1,
                row: parseFloat(b)+1,
                dirOut: 0,
                dirIn: Settings.dirIn,
                type:this.typ
            }
        )

        Settings.dirIn=3
        if(this.typ=="sciana"){
            div.style.backgroundColor="gray"
        }
        else if(this.typ=="potwor"){
            div.style.backgroundColor="red"
        }
        else if(this.typ=="skarb"){
            div.style.backgroundColor="gold"
        }
        else if(this.typ=="light"){
            div.style.backgroundColor="lightgray"
        }
        else{
            div.style.backgroundColor="white"
        }
        document.getElementById("obraz_"+a+"_"+b).appendChild(div)
        console.log("aaa")
        entry = this.mapa.poziom.find(hexagon => hexagon.id == this.kliknietyelement.id)
        this.tekst="wielkosc: " +this.mapa.wielkosc + "<br/>"
        for(c=0;c<this.mapa.poziom.length;c++){
            this.tekst+="{" + "<br/> id: " + this.mapa.poziom[c].id + "<br/> col: " + this.mapa.poziom[c].col + "<br/> row:" +this.mapa.poziom[c].row + "<br/> dirout:" +this.mapa.poziom[c].dirOut + "<br/>  dirin: " + this.mapa.poziom[c].dirIn + "<br/>type:" + this.mapa.poziom[c].type + "<br/>"+ "}" + "<br/>"
        }
        document.getElementById("dane").innerHTML=this.tekst
    }
    else{
        if(this.typ=="sciana"){
            document.getElementById("obraz_"+a+"_"+b).children[1].style.backgroundColor="gray"
        }
        else if(this.typ=="potwor"){
            document.getElementById("obraz_"+a+"_"+b).children[1].style.backgroundColor="red"
        }
        else if(this.typ=="skarb"){
            document.getElementById("obraz_"+a+"_"+b).children[1].style.backgroundColor="gold"
        }
        else if(this.typ=="swiatlo"){
            document.getElementById("obraz_"+a+"_"+b).children[1].style.backgroundColor="lightgray"
        }
        else{
            document.getElementById("obraz_"+a+"_"+b).children[1].style.backgroundColor="white" 
        }
        this.tekst="wielkosc: " +this.mapa.wielkosc + "<br/>"
        var entry = this.mapa.poziom.find(hexagon => hexagon.id == this.kliknietyelement.id)
        var info =document.getElementById("obraz_"+a+"_"+b).children[0].style.transform
        info = info.slice(7)
        info = info.slice(0,-4)
        info=parseInt(info)+60
        console.log(info)
        document.getElementById("obraz_"+a+"_"+b).children[0].style.transform="rotate("+info+"deg)"
        var liczba = document.getElementById("obraz_"+a+"_"+b).children[1].innerHTML
        if(liczba==5){
            liczba=0
        }
        else{
            liczba++
        }

        if (entry.dirOut == 5) {
            entry.dirOut = 0
        }
        else {
            entry.dirOut++
        }
        //entry.dirIn = (3 + entry.dirOut) % 6
        entry.type=this.typ
        //entry.type = variables.typeOfNextHex
        document.getElementById("dane").innerHTML=""
        for(var c=0;c<this.mapa.poziom.length;c++){
            this.tekst+="{" + "<br/> id: " + this.mapa.poziom[c].id + "<br/> col: " + this.mapa.poziom[c].col + "<br/> row:" +this.mapa.poziom[c].row + "<br/> dirout:" +this.mapa.poziom[c].dirOut + "<br/>  dirin: " + this.mapa.poziom[c].dirIn + "<br/>type:" + this.mapa.poziom[c].type + "<br/>"+ "}" + "<br/>"
        }
        document.getElementById("dane").innerHTML=this.tekst
        document.getElementById("obraz_"+a+"_"+b).children[1].innerHTML=liczba
        Settings.dirIn=(3 + entry.dirOut) % 6
    }
}


save(){
    console.log(this.mapa)
    net.sendData(this.mapa)
}

load(){
    this.mapa.poziom=[]
    document.getElementById("dane").innerHTML=""
    this.tekst=""
    net.start()
}
myFunction22(){
    Settings.dirIn=3
    Settings.tab={
        wielkosc: 1,
        poziom:[{
            id: "obraz_0_0",
            col: 0,
            row: 0,
            dirOut: 0,
            dirIn: Settings.dirIn,
            type:"sciana"
        }] ,
    }
    Settings.zezwolenie=true
    main3d.tworzenieplanszy(Settings.tab.poziom)
}
myFunction33(){
    console.log("aaa")
    Settings.zezwolenie=false
    main3d.tworzenieplanszy2()
}
myFunction44(){
    console.log("aaa")
    Settings.zezwolenie=false
    main3d.tworzenieplanszy3()
}
myFunction55(){
    Settings.dirIn=3
    Settings.tab={
        wielkosc: 1,
        poziom:[{
            id: "obraz_0_0",
            col: 0,
            row: 0,
            dirOut: 0,
            dirIn: Settings.dirIn,
            type:"sciana"
        },
        {
            id: "obraz_0_1",
            col: 0,
            row: 0,
            dirOut: 0,
            dirIn: Settings.dirIn,
            type:"swiatlo"
        }] ,
    }
    Settings.zezwolenie=true
    main3d.tworzenieplanszy(Settings.tab.poziom,2)
}
}