import _ from 'lodash';
import Kolorki from '../pliki/Kolorki'
import Settings from '../pliki/Settings'
import Punkty from '../pliki/Punkty'


//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////npm run build///////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

var tab = []
var wybrany = ""
var zezwolenie = false
var kolejne = Kolorki.losowatablica
var zezwolenie2 = true
var punkt = 0
var dostepnepola = []

function component() {
    const element = document.createElement('div');
    element.innerHTML = "punkty: 0"
    element.id = "test"
    element.className="aaa_0"
    element.onclick = function(){    
        document.getElementById("test").innerHTML="punkty: 0"
        console.log(Kolorki.losowatablica)
    }
    return element;
  }

function kulka(val1,a,b){
    var kula = document.createElement("div")
    kula.style.width="30px"
    kula.style.height="30px"
    kula.style.backgroundColor = val1
    kula.style.position = "absolute"
    kula.style.top=a*50+1+"px"
    kula.style.left=b*50+1+"px"
    kula.id="bbb_"+a+"_"+b
    kula.onclick = function(){
        var info = this.id.split("_")
        var zezwolenie3 = false
        if((parseInt(info[1])+1)<9){
            if(tab[parseInt(info[1])+1][info[2]]==0){
                zezwolenie3=true
            }
        }
        if((parseInt(info[2])+1)<9){
            if(tab[info[1]][parseInt(info[2])+1]==0){
                zezwolenie3=true
            }
        }
        if((parseInt(info[1])-1)>-1){
            if(tab[parseInt(info[1])-1][info[2]]==0){
                zezwolenie3=true
            }
        }
        if((parseInt(info[2])-1)>-1){
            if(tab[info[1]][parseInt(info[2])-1]==0){
                zezwolenie3=true
            }
        }
        if(zezwolenie3){
           if(wybrany==""){
            wybrany = this.id
            this.style.width="40px"
            this.style.height="40px"
            dostepnepola = []
            var dostepne = true
            var terazwziete = [this.id]
            var dotablicy = []
            while(dostepne == true){
                dostepne = false
                for(var licznik = 0;licznik<terazwziete.length;licznik++){
                   var info = terazwziete[licznik].split("_") 
                   if((parseInt(info[1])+1)<9){
                        if(tab[parseInt(info[1])+1][info[2]]==0){
                            var czyjuzjest = false
                            for(var a = 0;a<dostepnepola.length;a++){
                                if("aaa_"+(parseInt(info[1])+1)+"_"+[info[2]]==dostepnepola[a]){
                                    czyjuzjest = true
                                }
                            }
                            if(czyjuzjest == false){
                                dostepnepola.push("aaa_"+(parseInt(info[1])+1)+"_"+[info[2]])
                                dostepne = true
                                dotablicy.push("aaa_"+(parseInt(info[1])+1)+"_"+[info[2]])
                            }
                        }
                    }
                    if((parseInt(info[2])+1)<9){
                        if(tab[info[1]][parseInt(info[2])+1]==0){
                            var czyjuzjest = false
                            for(var a = 0;a<dostepnepola.length;a++){
                                if("aaa_"+[info[1]]+"_"+[parseInt(info[2])+1]==dostepnepola[a]){
                                    czyjuzjest = true
                                }
                            }
                            if(czyjuzjest == false){
                                dostepnepola.push("aaa_"+[info[1]]+"_"+[parseInt(info[2])+1])
                                dostepne = true
                                dotablicy.push("aaa_"+[info[1]]+"_"+[parseInt(info[2])+1])
                            }
                        }
                    }
                    if((parseInt(info[1])-1)>-1){
                        if(tab[parseInt(info[1])-1][info[2]]==0){
                            var czyjuzjest = false
                            for(var a = 0;a<dostepnepola.length;a++){
                                if("aaa_"+[parseInt(info[1])-1]+"_"+[info[2]]==dostepnepola[a]){
                                    czyjuzjest = true
                                }
                            }
                            if(czyjuzjest == false){
                                dostepnepola.push("aaa_"+[parseInt(info[1])-1]+"_"+[info[2]])
                                dostepne = true
                                dotablicy.push("aaa_"+[parseInt(info[1])-1]+"_"+[info[2]])
                            }
                        }
                    }
                    if((parseInt(info[2])-1)>-1){
                        if(tab[info[1]][parseInt(info[2])-1]==0){
                            var czyjuzjest = false
                            for(var a = 0;a<dostepnepola.length;a++){
                                if("aaa_"+[info[1]]+"_"+[parseInt(info[2])-1]==dostepnepola[a]){
                                    czyjuzjest = true
                                }
                            }
                            if(czyjuzjest == false){
                                dostepnepola.push("aaa_"+[info[1]]+"_"+[parseInt(info[2])-1])
                                dostepne = true
                                dotablicy.push("aaa_"+[info[1]]+"_"+[parseInt(info[2])-1])
                            }
                        }
                    }
                }
                terazwziete = dotablicy
                dotablicy = []
            }
            console.log(dostepnepola)
            }
            else if(wybrany==this.id){
                wybrany=""
                this.style.width="30px"
                this.style.height="30px"
                dostepnepola = []
            }
            else{
                dostepnepola = []
                document.getElementById(wybrany).style.width="30px"
                document.getElementById(wybrany).style.height="30px"
                this.style.width="40px"
                this.style.height="40px"
                wybrany = this.id

                var dostepne = true
                var terazwziete = [this.id]
                var dotablicy = []
                while(dostepne == true){
                    dostepne = false
                    for(var licznik = 0;licznik<terazwziete.length;licznik++){
                    var info = terazwziete[licznik].split("_") 
                    if((parseInt(info[1])+1)<9){
                            if(tab[parseInt(info[1])+1][info[2]]==0){
                                var czyjuzjest = false
                                for(var a = 0;a<dostepnepola.length;a++){
                                    if("aaa_"+(parseInt(info[1])+1)+"_"+[info[2]]==dostepnepola[a]){
                                        czyjuzjest = true
                                    }
                                }
                                if(czyjuzjest == false){
                                    dostepnepola.push("aaa_"+(parseInt(info[1])+1)+"_"+[info[2]])
                                    dostepne = true
                                    dotablicy.push("aaa_"+(parseInt(info[1])+1)+"_"+[info[2]])
                                }
                            }
                        }
                        if((parseInt(info[2])+1)<9){
                            if(tab[info[1]][parseInt(info[2])+1]==0){
                                var czyjuzjest = false
                                for(var a = 0;a<dostepnepola.length;a++){
                                    if("aaa_"+[info[1]]+"_"+[parseInt(info[2])+1]==dostepnepola[a]){
                                        czyjuzjest = true
                                    }
                                }
                                if(czyjuzjest == false){
                                    dostepnepola.push("aaa_"+[info[1]]+"_"+[parseInt(info[2])+1])
                                    dostepne = true
                                    dotablicy.push("aaa_"+[info[1]]+"_"+[parseInt(info[2])+1])
                                }
                            }
                        }
                        if((parseInt(info[1])-1)>-1){
                            if(tab[parseInt(info[1])-1][info[2]]==0){
                                var czyjuzjest = false
                                for(var a = 0;a<dostepnepola.length;a++){
                                    if("aaa_"+[parseInt(info[1])-1]+"_"+[info[2]]==dostepnepola[a]){
                                        czyjuzjest = true
                                    }
                                }
                                if(czyjuzjest == false){
                                    dostepnepola.push("aaa_"+[parseInt(info[1])-1]+"_"+[info[2]])
                                    dostepne = true
                                    dotablicy.push("aaa_"+[parseInt(info[1])-1]+"_"+[info[2]])
                                }
                            }
                        }
                        if((parseInt(info[2])-1)>-1){
                            if(tab[info[1]][parseInt(info[2])-1]==0){
                                var czyjuzjest = false
                                for(var a = 0;a<dostepnepola.length;a++){
                                    if("aaa_"+[info[1]]+"_"+[parseInt(info[2])-1]==dostepnepola[a]){
                                        czyjuzjest = true
                                    }
                                }
                                if(czyjuzjest == false){
                                    dostepnepola.push("aaa_"+[info[1]]+"_"+[parseInt(info[2])-1])
                                    dostepne = true
                                    dotablicy.push("aaa_"+[info[1]]+"_"+[parseInt(info[2])-1])
                                }
                            }
                        }
                    }
                    terazwziete = dotablicy
                    dotablicy = []
                }
                console.log(dostepnepola)
            } 
        }
        
    }
    return kula
}
function zbicie(a,b){
    var tabpoziomy = []
    var tabpionowy = []
    var tabukos1 = []
    var tabukos2 = []
    var dousuniecia = []
    console.log(tab[a][b])
    console.log("ccc_"+a+"_"+b)
    for(var licznik = 0;licznik<9;licznik++){
        tabpoziomy.push("ccc_"+a+"_"+licznik)
    }
    console.log(tabpoziomy)
    for(var licznik = 0;licznik<9;licznik++){
        tabpionowy.push("ccc_"+licznik+"_"+b)
    }
    console.log(tabpionowy)
    var pierwszezezwolenie = false
    if(a>b){
        var c = a-b
        var licznik=0
        while(pierwszezezwolenie == false){
            tabukos1.push("ccc_"+(c+licznik)+"_"+licznik)
            licznik++
            if(c+licznik==9){
                pierwszezezwolenie=true
            }
        }
    }
    else if(a<b){
        var c = b-a
        var licznik=0
        while(pierwszezezwolenie == false){
            tabukos1.push("ccc_"+licznik+"_"+(c+licznik))
            licznik++
            if(licznik+c==9){
                pierwszezezwolenie=true
            }
        }
    }
    else{
        for(var licznik=0;licznik<9;licznik++){
            tabukos1.push("ccc_"+licznik+"_"+licznik)
        }
    }
    console.log(tabukos1)
    var drugiezezwolenie = false
    if(a>(8-b)){
        var c = 8-b
        var licznik=0
        while(drugiezezwolenie == false){
            tabukos2.push("ccc_"+(parseInt(a)-parseInt(c)+licznik)+"_"+(parseInt(b)+parseInt(c)-licznik))
            licznik++
            if((parseInt(a)-parseInt(c)+licznik)==9){
                drugiezezwolenie=true
            }
        }
    }
    else if(a<(8-b)){
        var c = b-a
        var licznik=0
        while(drugiezezwolenie == false){
            tabukos2.push("ccc_"+(licznik)+"_"+(parseInt(b)+parseInt(a)-licznik))
            licznik++
            if((parseInt(b)+parseInt(a)-licznik)==-1){
                drugiezezwolenie=true
            }
        }
    }
    else{
        for(var licznik=0;licznik<9;licznik++){
            tabukos2.push("ccc_"+licznik+"_"+(8-licznik))
        }
    }
    console.log(tabukos2)
    console.log("/////////////////////////////")
    var poziomeusun = []
    if(tabpoziomy.length>4){
        for(var licznik=0;licznik<tabpoziomy.length;licznik++){
            if(tab[a][b]==tab[tabpoziomy[licznik].split("_")[1]][tabpoziomy[licznik].split("_")[2]]){
                poziomeusun.push(tabpoziomy[licznik])
            }
            else if(tab[a][b]!=tab[tabpoziomy[licznik].split("_")[1]][tabpoziomy[licznik].split("_")[2]] && poziomeusun.length>4){
                licznik = 10
            }
            else{
                poziomeusun = []
            }
        }
        if(poziomeusun.length<5){
            poziomeusun = []
        }
        console.log(poziomeusun)
    }
    var pionoweusun = []
    if(tabpionowy.length>4){
        for(var licznik=0;licznik<tabpionowy.length;licznik++){
            if(tab[a][b]==tab[tabpionowy[licznik].split("_")[1]][tabpionowy[licznik].split("_")[2]]){
                pionoweusun.push(tabpionowy[licznik])
            }
            else if(tab[a][b]!=tab[tabpionowy[licznik].split("_")[1]][tabpionowy[licznik].split("_")[2]] && pionoweusun.length>4){
                licznik = 10
            }
            else{
                pionoweusun = []
            }
        }
        if(pionoweusun.length<5){
            pionoweusun = []
        }
        console.log(pionoweusun)
    }
    var ukosneusun1 = []
    if(tabukos1.length>4){
        for(var licznik=0;licznik<tabukos1.length;licznik++){
            if(tab[a][b]==tab[tabukos1[licznik].split("_")[1]][tabukos1[licznik].split("_")[2]]){
                ukosneusun1.push(tabukos1[licznik])
            }
            else if(tab[a][b]!=tab[tabukos1[licznik].split("_")[1]][tabukos1[licznik].split("_")[2]] && ukosneusun1.length>4){
                licznik = 10
            }
            else{
                ukosneusun1 = []
            }
        }
        if(ukosneusun1.length<5){
            ukosneusun1 = []
        }
        console.log(ukosneusun1)
    }
    var ukosneusun2 = []
    if(tabukos2.length>4){
        for(var licznik=0;licznik<tabukos2.length;licznik++){
            if(tab[a][b]==tab[tabukos2[licznik].split("_")[1]][tabukos2[licznik].split("_")[2]]){
                ukosneusun2.push(tabukos2[licznik])
            }
            else if(tab[a][b]!=tab[tabukos2[licznik].split("_")[1]][tabukos2[licznik].split("_")[2]] && ukosneusun2.length>4){
                licznik = 10
            }
            else{
                ukosneusun2 = []
            }
        }
        if(ukosneusun2.length<5){
            ukosneusun2 = []
        }
        console.log(ukosneusun2)
    }
    if(poziomeusun.length==0 && pionoweusun.length==0 && ukosneusun1.length==0 && ukosneusun2.length==0){
        zezwolenie2 = true
        console.log("nico")
    }
    else{
        for(var licznik=0;licznik<poziomeusun.length;licznik++){
            if("ccc_"+a+"_"+b!=poziomeusun[licznik]){
                dousuniecia.push(poziomeusun[licznik])
            }
        }
        for(var licznik=0;licznik<pionoweusun.length;licznik++){
            if("ccc_"+a+"_"+b!=pionoweusun[licznik]){
                dousuniecia.push(pionoweusun[licznik])
            }
        }
        for(var licznik=0;licznik<ukosneusun1.length;licznik++){
            if("ccc_"+a+"_"+b!=ukosneusun1[licznik]){
                dousuniecia.push(ukosneusun1[licznik])
            }
        }
        for(var licznik=0;licznik<ukosneusun2.length;licznik++){
            if("ccc_"+a+"_"+b!=ukosneusun2[licznik]){
                dousuniecia.push(ukosneusun2[licznik])
            }
        }
        dousuniecia.push("ccc_"+a+"_"+b)
        console.log(dousuniecia)
        for(var licznik = 0;licznik<dousuniecia.length;licznik++){
            var info = dousuniecia[licznik].split("_")
            var plansza = document.getElementById("plansza")
            var element = document.getElementById("bbb_"+info[1]+"_"+info[2])
            tab[info[1]][info[2]]=0
            plansza.removeChild(element);
        }
        punkt = dousuniecia.length
        console.log(punkt)
        document.getElementById("test").className = "aaa_"+punkt
        document.getElementById("test").innerHTML="punkty: " + Punkty.aaa
        dousuniecia = []
        zezwolenie2 = false
        var czywygrales = true
        for(var licznik = 0;licznik<9;licznik++){
            for(var licznik2 = 0;licznik2<9;licznik2++){
                if(tab[licznik][licznik2]!=0){
                    czywygrales = false
                }
            }
        }
        if(czywygrales){
            alert("wygrales")
        }
    }
}
function plansza(){
    var plansza = document.createElement("div")
    plansza.style.position = "relative"
    plansza.id="plansza"
    plansza.style.width="450px"
    plansza.style.height="450px"
    for(var a=0;a<9;a++){
        tab[a] = []
        for(var b = 0;b<9;b++){ 
            tab[a][b]=0
            var div = document.createElement("div")
            div.className = "pole"
            div.style.position="absolute"
            div.style.border="1px solid black"
            div.style.width="48px"
            div.style.height="48px"
            div.style.top=a*50+"px"
            div.style.left=b*50+"px"
            div.id="aaa_"+a+"_"+b
            div.onclick = function(){
                console.log(wybrany)
                if(wybrany != ""){
                    var klikniecielubnie = false
                    for(var kolejnylicznikojaniemogejakfajnie = 0;kolejnylicznikojaniemogejakfajnie<dostepnepola.length;kolejnylicznikojaniemogejakfajnie++){
                        if(dostepnepola[kolejnylicznikojaniemogejakfajnie]==this.id){
                            klikniecielubnie = true
                        }
                    }
                    if(klikniecielubnie==true){
                       var a = this.id.split("_")
                        console.log(a)
                        if(tab[a[1]][a[2]]==0){
                            document.getElementById(wybrany).style.top = this.style.top
                            document.getElementById(wybrany).style.left = this.style.left
                            var kolor = document.getElementById(wybrany).style.backgroundColor
                            document.getElementById(wybrany).style.width="30px"
                            document.getElementById(wybrany).style.height="30px"
                            var info = this.id.split("_")
                            var info2 = document.getElementById(wybrany).id.split("_")
                            document.getElementById(wybrany).id="bbb_"+info[1]+"_"+info[2]
                            tab[info[1]][info[2]]= kolor
                            tab[info2[1]][info2[2]] = 0
                            zbicie(info[1],info[2])
                            wybrany = ""
                            dostepnepola = []
                            if(zezwolenie2){
                                for(var c = 0;c<3;c++){
                                zezwolenie = false
                                while(zezwolenie==false){
                                    var x = Math.floor(Math.random() * 9)
                                    var y = Math.floor(Math.random() * 9)
                                    if(tab[y][x] == 0){
                                        var kula = kulka(kolejne[c],y,x)
                                        tab[y][x] = kolejne[c]
                                        plansza.appendChild(kula)
                                        zbicie(y,x)
                                        zezwolenie = true
                                        var czyniezyjesz = true
                                        for(var licznik = 0;licznik<9;licznik++){
                                            for(var licznik2 = 0;licznik2<9;licznik2++){
                                                if(tab[licznik][licznik2]==0){
                                                    czyniezyjesz = false
                                                }
                                            }
                                        }
                                        if(czyniezyjesz){
                                            c=4
                                            console.log("rip")
                                            alert("przegrałeś")
                                        }
                                    }
                                }
                            }
                            kolejne = Kolorki.losowatablica
                            document.getElementById("kula1").style.backgroundColor = kolejne[0]
                            document.getElementById("kula2").style.backgroundColor = kolejne[1]
                            document.getElementById("kula3").style.backgroundColor = kolejne[2]
                            punkt = 0
                            }
                            zezwolenie2 = true
                            console.log(tab) 
                        } 
                    }
                    
                }
            }
            plansza.appendChild(div)
        }
    }
    console.log(tab)

    var pierwszekule = Kolorki.losowatablica

    var x = Math.floor(Math.random() * 9)
    var y = Math.floor(Math.random() * 9)
    tab[y][x] = pierwszekule[0]
    var kula = kulka(pierwszekule[0],y,x)
    plansza.appendChild(kula)
    while(zezwolenie==false){
        x = Math.floor(Math.random() * 9)
        y = Math.floor(Math.random() * 9)
        if(tab[y][x] == 0){
            var kula = kulka(pierwszekule[1],y,x)
            tab[y][x] = pierwszekule[1]
            plansza.appendChild(kula) 
            zezwolenie = true
        }
    }
    zezwolenie = false
    while(zezwolenie==false){
        x = Math.floor(Math.random() * 9)
        y = Math.floor(Math.random() * 9)
        if(tab[y][x] == 0){
            tab[y][x] = pierwszekule[2]
            var kula = kulka(pierwszekule[2],y,x)
            plansza.appendChild(kula) 
            zezwolenie = true
        }
    }

    console.log(tab)
    return plansza
}
function previewkolorkow(){
    var box = document.createElement("div")
    box.style.width="200px"
    box.style.height="75px"
    box.style.border="1px solid black"
    box.style.position = "relative"

    var text = document.createElement("p")
    text.innerHTML = "kolejne kolory"
    text.style.position = "absolute"
    text.style.top = "-15px"
    text.style.left = "5px"
    box.appendChild(text)

    var kula1 = document.createElement("div")
    kula1.style.width="30px"
    kula1.style.height="30px"
    kula1.style.backgroundColor = kolejne[0]
    kula1.style.position = "absolute"
    kula1.id="kula1"
    kula1.style.top = "20px"
    kula1.style.left="10px"
    box.appendChild(kula1)

    var kula2 = document.createElement("div")
    kula2.style.width="30px"
    kula2.style.height="30px"
    kula2.style.backgroundColor = kolejne[1]
    kula2.style.position = "absolute"
    kula2.id="kula2"
    kula2.style.top = "20px"
    kula2.style.left="60px"
    box.appendChild(kula2)

    var kula3 = document.createElement("div")
    kula3.style.width="30px"
    kula3.style.height="30px"
    kula3.style.backgroundColor = kolejne[2]
    kula3.style.position = "absolute"
    kula3.id="kula3"
    kula3.style.top = "20px"
    kula3.style.left="110px"
    box.appendChild(kula3)

    return box
}
document.body.appendChild(plansza())
document.body.appendChild(previewkolorkow())
document.body.appendChild(component());

export default punkt
