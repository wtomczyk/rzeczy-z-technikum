var ekranpoczatkowy = true
var konsola = {
    wprowadzonytekst: function (){
        wpisanawartosc = document.getElementById("dopisania").value
        document.getElementById("dopisania").value=""
        switch (wpisanawartosc.split(" ")[0]) {
            case "N": case "NORTH":
                var przemieszczaniesie=wszystkiedane.pozycja.split("")
                if(zezwoleniepolnoc){
                    przemieszczaniesie[0]--
                    przemieszczaniesie=przemieszczaniesie.join("")
                    wszystkiedane.pozycja=przemieszczaniesie
                    document.getElementById("konsolanadol").innerText = "You are going north..." 
                    setTimeout(function(){ 
                        render()
                    }, 500);
                }
                else{
                    document.getElementById("konsolanadol").innerText = "You can't go that way" 
                    setTimeout(function(){ 
                        render()
                    }, 500);
                }
                break;

            case "S": case "SOUTH":
                var przemieszczaniesie=wszystkiedane.pozycja.split("")
                if(zezwoleniepoludnie){
                    przemieszczaniesie[0]++
                    przemieszczaniesie=przemieszczaniesie.join("")
                    wszystkiedane.pozycja=przemieszczaniesie
                    document.getElementById("konsolanadol").innerText = "You are going south..." 
                    setTimeout(function(){ 
                        render()
                    }, 500);
                }
                else{
                    document.getElementById("konsolanadol").innerText = "You can't go that way" 
                    setTimeout(function(){ 
                        render()
                    }, 500);
                }
                break;

            case "E": case "EAST":
                var przemieszczaniesie=wszystkiedane.pozycja.split("")
                if(zezwoleniewschod){     
                    przemieszczaniesie[1]++
                    przemieszczaniesie=przemieszczaniesie.join("")
                    wszystkiedane.pozycja=przemieszczaniesie
                    document.getElementById("konsolanadol").innerText = "You are going east..." 
                    setTimeout(function(){ 
                        render()
                    }, 500);
                    
                }
                else{
                    document.getElementById("konsolanadol").innerText = "You can't go that way" 
                    setTimeout(function(){ 
                        render()
                    }, 500);
                }
                break;

            case "W": case "WEST":
                var przemieszczaniesie=wszystkiedane.pozycja.split("")
                if(zezwoleniezachod){
                    if(wszystkiedane.pozycja==42){
                        if(wszystkiedane.czysmokniezyje==false){
                            document.getElementById("konsolanadol").innerText = "You can't go that way..." 
                            setTimeout(function(){ 
                                document.getElementById("konsolanadol").innerText += " The dragon sleeps in a cave!"
                            }, 1500);
                            setTimeout(function(){ 
                                render()
                            }, 3000);
                        }
                        else{
                            przemieszczaniesie[1]--
                            przemieszczaniesie=przemieszczaniesie.join("")
                            wszystkiedane.pozycja=przemieszczaniesie
                            document.getElementById("konsolanadol").innerText = "You are going west..." 
                            setTimeout(function(){ 
                                render()
                            }, 500);
                            }
                    }
                    else{
                    przemieszczaniesie[1]--
                    przemieszczaniesie=przemieszczaniesie.join("")
                    wszystkiedane.pozycja=przemieszczaniesie
                    document.getElementById("konsolanadol").innerText = "You are going west..." 
                    setTimeout(function(){ 
                        render()
                    }, 500);
                    }
                }
                else{
                    document.getElementById("konsolanadol").innerText = "You can't go that way" 
                    setTimeout(function(){ 
                        render()
                    }, 500);
                }
                break;

            case "D": case "DROP":
                if(wszystkiedane.noszonyprzedmiot!=null){
                    if(wpisanawartosc.split(" ")[1]==wszystkiedane.przedmioty[wszystkiedane.noszonyprzedmiot].nazwa){
                    upuszczanyprzedmiot=wpisanawartosc.split(" ")[1]
                    flagaobecna= 0
                    if(wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item!=null){
                        flagaobecna= 0
                        licznikprzedmiotow = wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.length
                        for(var kek=0;kek<licznikprzedmiotow;kek++){
                            if(wszystkiedane.przedmioty[wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item[kek]].flaga==1){
                                flagaobecna++
                            }
                        }
                    }

                    if(wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item==null || flagaobecna<3){
                        if(wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item!=null){
                            wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.push(wszystkiedane.noszonyprzedmiot.toString())
                        }
                        else{
                            wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item=[]
                            wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item[0]=wszystkiedane.noszonyprzedmiot
                        }
                    wszystkiedane.noszonyprzedmiot=null
                    document.getElementById("konsolanadol").innerText = "You are about to drop " + upuszczanyprzedmiot
                        setTimeout(function(){ 
                            render()
                        }, 500);
                    }
                    else{
                        document.getElementById("konsolanadol").innerText = "You can't store any more here"
                        setTimeout(function(){ 
                            render()
                        }, 500);
                    }
                    }
                    
                    else{
                        document.getElementById("konsolanadol").innerText = "You are not carrying it" 
                        setTimeout(function(){ 
                            render()
                        }, 500);
                    }
                }
                else{
                    document.getElementById("konsolanadol").innerText = "You are not carrying anything" 
                    setTimeout(function(){ 
                        render()
                    }, 500);
                }
                break

            case "T": case "TAKE":
            czyprzedmiotjest = 0
                if(wszystkiedane.noszonyprzedmiot==null){
                    if(wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item!=null){
                        branyprzedmiot = wpisanawartosc.split(" ")[1]
                        iloscprzedmiotow=wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.length
                        for(a=0;a<iloscprzedmiotow;a++){
                            if(wszystkiedane.przedmioty[wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item[a]].nazwa==branyprzedmiot){
                                if(wszystkiedane.przedmioty[wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item[a]].flaga!=0){
                                    wszystkiedane.noszonyprzedmiot=wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item[a]
                                    wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.splice(a,1)
                                    if(wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.length==0){
                                            wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item=null
                                        }
                                    a=iloscprzedmiotow
                                    document.getElementById("konsolanadol").innerText = "You are taking " + branyprzedmiot
                                    setTimeout(function(){ 
                                        render()
                                    }, 500);
                                }   
                                else{
                                    a=iloscprzedmiotow
                                    document.getElementById("konsolanadol").innerText = "You can't carry it" 
                                    setTimeout(function(){ 
                                        render()
                                    }, 500);
                                }
                            }
                            else{
                                czyprzedmiotjest++
                            }
                        }
                        if(czyprzedmiotjest==iloscprzedmiotow){
                            document.getElementById("konsolanadol").innerText = "There isn't anything like that here"
                                setTimeout(function(){ 
                                    render()
                                }, 500);
                        }
                    }
                    else{
                        document.getElementById("konsolanadol").innerText = "There is nothing" 
                        setTimeout(function(){ 
                            render()
                        }, 500);
                    }
                }
                else{
                    document.getElementById("konsolanadol").innerText = "You are carrying something" 
                    setTimeout(function(){ 
                        render()
                    }, 500);
                }
                break

            case "U": case "USE":
            var uzywanyprzedmiot = wpisanawartosc.split(" ")[1]
            
            
                if(wszystkiedane.noszonyprzedmiot != null){
                    if(wszystkiedane.przedmioty[wszystkiedane.noszonyprzedmiot].nazwa==uzywanyprzedmiot && wszystkiedane.noszonyprzedmiot==36){
                        console.log("gg")
                        document.getElementById("ekran").innerHTML="<img src='hejnaliggobraz/gg.png' id='ggez'>"
                    }
                    else{
                    if(uzywanyprzedmiot!=null && wszystkiedane.przedmioty[wszystkiedane.noszonyprzedmiot].nazwa==uzywanyprzedmiot){
                        console.log("gituwa")
                        if(wszystkiedane.pozycja==wszystkiedane.przedmioty[wszystkiedane.noszonyprzedmiot].wymaganapozycja){
                            if(wszystkiedane.noszonyprzedmiot==24){
                                wszystkiedane.wydarzenia[wszystkiedane.noszonyprzedmiot]()
                                setTimeout(function(){ 
                                    render()
                                }, 6000);
                            }
                            else if(wszystkiedane.noszonyprzedmiot==37){
                                wszystkiedane.wydarzenia[wszystkiedane.noszonyprzedmiot]()
                                setTimeout(function(){ 
                                    render()
                                }, 3000);
                            }
                            else if(wszystkiedane.noszonyprzedmiot==37){
                                wszystkiedane.wydarzenia[wszystkiedane.noszonyprzedmiot]()
                                console.log("wygrana")
                            }
                            else{
                                wszystkiedane.wydarzenia[wszystkiedane.noszonyprzedmiot]()
                                setTimeout(function(){ 
                                    render()
                                }, 1000);
                            }
                        }
                        else{
                            document.getElementById("konsolanadol").innerText = "Nothing happened" 
                            setTimeout(function(){ 
                                render()
                            }, 500);
                        }
                    }
                    else{
                        document.getElementById("konsolanadol").innerText = "You aren't carrying anything like that" 
                        setTimeout(function(){ 
                            render()
                        }, 500);
                    }
                }
                }
                else{
                    document.getElementById("konsolanadol").innerText = "You aren't carrying anything like that" 
                    setTimeout(function(){ 
                        render()
                    }, 500);
                }
            
                break

            case "V": case "VOCABULARY":
                var u = 
                "NORTH or N, SOUTH or S"+ "\n"+
                "WEST or W, EAST or E"+ "\n"+
                "TAKE (object) or T (object)"+ "\n"+
                "DROP (object) or D (object)"+ "\n"+
                "USE (object) or U (object)"+ "\n"+
                "GOSSIPS or G, VOCABULARY or V"+ "\n"+
                "Press any key"
                document.getElementById("konsolanadol").style.display = "none" 
                document.getElementById("gdziemoznaisc").innerText = u
                document.addEventListener("keydown",function aaa(){
                    document.removeEventListener("keydown",aaa,false)
                    render()
                })
                break
            case "G": case "GOOSIPS":
                var u = 
                "The  woodcutter lost  his home key..."+ "\n"+
                "The butcher likes fruit... The cooper"+ "\n"+
                "is greedy... Dratewka plans to make a"+ "\n"+
                "poisoned  bait for the dragon...  The"+ "\n"+
                "tavern owner is buying food  from the"+ "\n"+
                "pickers... Making a rag from a bag..."+ "\n"+
                "Press any key"
                document.getElementById("konsolanadol").style.display = "none" 
                document.getElementById("gdziemoznaisc").innerText = u
                document.addEventListener("keydown",function aaa(){
                    document.removeEventListener("keydown",aaa,false)
                    render()
                })
                break

            default:
                document.getElementById("konsolanadol").innerText = "Invalid command" 
                setTimeout(function(){ 
                    render()
                }, 500);
        }
    }
}
class miejsce {
    constructor(id,descritpion,file,bg,move,item){
        this.id=id
        this.descritpion=descritpion
        this.file=file
        this.bg=bg
        this.move=move
        this.item=item
    }
}
class przedmiot {
    constructor(id, nazywanie, flaga, nazwa, wymaganapozycja){
        this.id=id
        this.nazywanie=nazywanie
        this.flaga=flaga
        this.nazwa=nazwa
        this.wymaganapozycja=wymaganapozycja
    }
}
var czyowcajestgotowa = function(){
    if(wszystkiedane.postep==6){
        wszystkiedane.noszonyprzedmiot="37"
        //TU ZEBY USUWAL FRAGMENTY OWCY
        licznikprzedmiotow2 = wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.length
        for(var kek=0;kek<licznikprzedmiotow2;kek++){
            if(wszystkiedane.przedmioty[wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item[kek]].flaga==0){
                console.log("aaa")
            }
        }
        var dosusuniecia = wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.indexOf("29")
        wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.splice(dosusuniecia,1)
        dosusuniecia = wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.indexOf("26")
        wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.splice(dosusuniecia,1)
        dosusuniecia = wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.indexOf("23")
        wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.splice(dosusuniecia,1)
        dosusuniecia = wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.indexOf("20")
        wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.splice(dosusuniecia,1)
        dosusuniecia = wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.indexOf("17")
        wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.splice(dosusuniecia,1)
        dosusuniecia = wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.indexOf("13")
        wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.splice(dosusuniecia,1)

        if(wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.length==0){
            wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item=null
        }
        document.getElementById("konsolanadol").innerText = "Your fake sheep is full of poison and ready to be eaten by the dragon" 
            setTimeout(function(){ 
                render()
            }, 1500);
    }
}

var wszystkiedane= {
    pozycja:"47",
    postep:0,
    noszonyprzedmiot:null,
    czysmokniezyje:false,
    umiejscowienia:{
        11: new miejsce(`11`, "You are inside a brimstone mine", "11.gif", "rgb(235,211,64)", ["E"]),
        12: new miejsce(`12`, "You are at the entrance to the mine", "12.gif", "rgb(89,93,87)", ["W", "E"]),
        13: new miejsce(`13`, "A hill", "13.gif", "rgb(117,237,243)", ["S", "W", "E"], [`31`]),
        14: new miejsce(`14`, "Some bushes", "14.gif", "rgb(202,230,51)", ["W", "E"]),
        15: new miejsce(`15`, "An old deserted hut", "15.gif", "rgb(220,204,61)", ["W", "E"], [`27`]),
        16: new miejsce(`16`, "The edge of a forest", "16.gif", "rgb(167,245,63)", ["W", "E"]),
        17: new miejsce(`17`, "A dark forest", "17.gif", "rgb(140,253,99)", ["S", "W"], [`14`]),
        21: new miejsce(`21`, "A man nearby making tar", "21.gif", "rgb(255,190,99)", ["S", "E"]),
        22: new miejsce(`22`, "A timber yard", "22.gif", "rgb(255,190,99)", ["S", "W", "E"]),
        23: new miejsce(`23`, "You are by a roadside shrine", "23.gif", "rgb(167,245,63)", ["N", "S", "W", "E"], ["10"]),
        24: new miejsce(`24`, "You are by a small chapel", "24.gif", "rgb(212,229,36)", ["W", "E"]),
        25: new miejsce(`25`, "You are on a road leading to a wood", "25.gif", "rgb(167,245,63)", ["S", "W", "E"]),
        26: new miejsce(`26`, "You are in a forest", "26 i 65.gif", "rgb(167,245,63)", ["W", "E"]),
        27: new miejsce(`27`, "You are in a deep forest", "27 i 67.gif", "rgb(140,253,99)", ["N", "W"], [`18`]),
        31: new miejsce(`31`, `You are by the Vistula River`, `31.gif`, `rgb(122,232,252)`, ["N", "E"]),
        32: new miejsce(`32`, `You are by the Vistula River`, `32.gif`, `rgb(140,214,255)`, ["N", "W"], [`32`]),
        33: new miejsce(`33`, `You are on a bridge over river`, `33.gif`, `rgb(108,181,242)`, ["N", "S"]),
        34: new miejsce(`34`, `You are by the old tavern`, `34.gif`, `rgb(255,189,117)`, ["E"]),
        35: new miejsce(`35`, `You are at the town's end`, `35.gif`, `rgb(255,190,99)`, ["N", "S", "W"]),
        36: new miejsce(`36`, `You are in a butcher's shop`, `36.gif`, `rgb(255,188,102)`, ["S"]),
        37: new miejsce(`37`, `You are in a cooper's house`, `37.gif`, `rgb(255,188,102)`, ["S"]),
        41: new miejsce(`41`, `You are in the Wawel Castle`, `41.gif`, `rgb(255,176,141)`, ["E"]),
        42: new miejsce(`42`, `You are inside a dragon's cave`, `42.gif`, `rgb(198,205,193)`, ["E","W"]),
        43: new miejsce(`43`, `A perfect place to set a trap`, `43.gif`, `rgb(255,176,141)`, ["N", "W"]),
        44: new miejsce(`44`, `You are by the water mill`, `44.gif`, `rgb(255,190,99)`, ["E"], [`21`]),
        45: new miejsce(`45`, `You are at a main crossroad`, `45.gif`, `rgb(255,190,99)`, ["N", "S", "W", "E"]),
        46: new miejsce(`46`, `You are on a town street`, `46.gif`, `rgb(255,190,99)`, ["N", "W", "E"]),
        47: new miejsce(`47`, `You are in a frontyard of your house`, `47.gif`, `rgb(255,190,99)`, ["N", "S", "W"]),
        54: new miejsce(`54`, `You are by a swift stream`, `54.gif`, `rgb(108,181,242)`, ["E"]),
        55: new miejsce(`55`, `You are on a street leading forest`, `55.gif`, `rgb(255,190,99)`, ["N", "S", "W"], [`33`]),
        56: new miejsce(`56`, `You are in a woodcutter's backyard`, `56.gif`, `rgb(255,190,99)`, ["S"]),
        57: new miejsce(`57`, `You are in a shoemaker's house`, `57.gif`, `rgb(254,194,97)`, ["N"]),
        64: new miejsce(`64`, `You are in a bleak funeral house`, `64.gif`, `rgb(254,194,97)`, ["E"], [`24`]),
        65: new miejsce(`65`, `You are on a path leading to the wood`, `26 i 65.gif`, `rgb(167,245,63)`, ["N", "W", "E"]),
        66: new miejsce(`66`, `You are at the edge of a forest`, `66.gif`, `rgb(167,245,63)`, ["N", "W", "E"]),
        67: new miejsce(`67`, `You are in a deep forest`, `27 i 67.gif`, `rgb(140,253,99)`, ["W"]),
    },
    przedmioty:{
        10: new przedmiot(`10`, "a KEY", 1, "KEY", "56"),
        11: new przedmiot(`11`, "an AXE", 1, "AXE", `67`),
        12: new przedmiot(`12`, `STICKS`, 1, `STICKS`, `43`),
        13: new przedmiot(`13`, `sheeplegs`, 0, `sheeplegs`),
        14: new przedmiot(`14`, `MUSHROOMS`, 1, `MUSHROOMS`, `34`),
        15: new przedmiot(`15`, `MONEY`, 1, `MONEY`, `37`),
        16: new przedmiot(`16`, `a BARREL`, 1, `BARREL`, `43`),
        17: new przedmiot(`17`, `a sheeptrunk`, 0, `sheeptrunk`),
        18: new przedmiot(`18`, `BERRIES`, 1, `BERRIES`, `36`),
        19: new przedmiot(`19`, `WOOL`, 1, `WOOL`, `43`),
        20: new przedmiot(`20`, `a sheepskin`, 0, `sheepskin`),
        21: new przedmiot(`21`, `a BAG`, 1, `BAG`, `57`),
        22: new przedmiot(`22`, `a RAG`, 1, `RAG`, `43`),
        23: new przedmiot(`23`, `a sheephead`, 0, `sheephead`),
        24: new przedmiot(`24`, `a SPADE`, 1, `SPADE`, `11`),
        25: new przedmiot(`25`, `SULPHUR`, 1, `SULPHUR`, `43`),
        26: new przedmiot(`26`, `a solid poison`, 0, `solid poison`),
        27: new przedmiot(`27`, `a BUCKET`, 1, `BUCKET`, `21`),
        28: new przedmiot(`28`, `TAR`, 1, `TAR`, `43`),
        29: new przedmiot(`29`, `a liquid poison`, 0, `liquid poison`),
        30: new przedmiot(`30`, `a dead dragon`, 0, `dead dragon`),
        31: new przedmiot(`31`, `a STONE`, 1, `STONE`),
        32: new przedmiot(`32`, `a FISH`, 1, `FISH`),
        33: new przedmiot(`33`, `a KNIFE`, 1, `KNIFE`, `42`),
        34: new przedmiot(`34`, `a DRAGONSKIN`, 1, `DRAGONSKIN`, `57`),
        35: new przedmiot(`35`, `a dragonskin SHOES`, 1, `SHOES`, `41`),
        36: new przedmiot(`36`, `a PRIZE`, 1, `PRIZE`, `wygrana`),
        37: new przedmiot(`37`, `a SHEEP`, 1, `SHEEP`, `42`),
    },
    wydarzenia:{
        "10": function(){
            wszystkiedane.noszonyprzedmiot = "11"
            document.getElementById("konsolanadol").innerText = "You opened a tool shed and took an axe"
        },
        "11": function() {
            wszystkiedane.noszonyprzedmiot = "12"
            document.getElementById("konsolanadol").innerText = "You cut sticks for sheeplegs"
        },
        "12": function() {
            if(wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item==null){
                wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item=["13"]
            }
            else{
                wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.push("13")
            }
            document.getElementById("konsolanadol").innerText = "You prepared legs for your fake sheep"
            wszystkiedane.noszonyprzedmiot = null
            wszystkiedane.postep++
            czyowcajestgotowa()
        },
        "14": function() {
            wszystkiedane.noszonyprzedmiot = "15"
            document.getElementById("konsolanadol").innerText = "The tavern owner paid you money"
        },
        "15": function() {
            wszystkiedane.noszonyprzedmiot = "16"
            document.getElementById("konsolanadol").innerText ="The cooper sold you a new barrel"
        },
        "16": function() {
            if(wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item==null){
                wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item=["17"]
            }
            else{
                wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.push("17")
            }
            document.getElementById("konsolanadol").innerText ="You made a nice sheeptrunk"
            wszystkiedane.noszonyprzedmiot = null
            wszystkiedane.postep++
            czyowcajestgotowa()
        },
        "18": function() {
            wszystkiedane.noszonyprzedmiot = "19"
            document.getElementById("konsolanadol").innerText ="The butcher gave you wool"
        },
        "19": function() {
            if(wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item==null){
                wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item=["20"]
            }
            else{
                wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.push("20")
            }
            document.getElementById("konsolanadol").innerText ="You prepared skin for your fake sheep"
            wszystkiedane.noszonyprzedmiot = null
            wszystkiedane.postep++
            czyowcajestgotowa()
        },
        "21": function() {
            wszystkiedane.noszonyprzedmiot = "22"
            document.getElementById("konsolanadol").innerText ="You used your tools to make a rag"
        },
        "22": function() {
            if(wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item==null){
                wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item=["23"]
            }
            else{
                wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.push("23")
            }
            document.getElementById("konsolanadol").innerText ="You made a fake sheephead"
            wszystkiedane.noszonyprzedmiot = null
            wszystkiedane.postep++
            czyowcajestgotowa()
        },
        "24": function() {
            document.getElementById("konsolanadol").innerText = "You are digging..."
            setTimeout(function(){
                document.getElementById("konsolanadol").innerText = "You are digging... and digging..."
            }, 1500);
            setTimeout(function(){ 
                document.getElementById("konsolanadol").innerText += " That's enough sulphur for you"
            }, 3000);
            setTimeout(function(){ 
                wszystkiedane.noszonyprzedmiot = "25"
            }, 4500);
        },
        "25": function() {
            if(wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item==null){
                wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item=["26"]
            }
            else{
                wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.push("26")
            }
            document.getElementById("konsolanadol").innerText ="You prepared a solid poison"
            wszystkiedane.noszonyprzedmiot = null
            wszystkiedane.postep++
            czyowcajestgotowa()
        },
        "27": function() {
            wszystkiedane.noszonyprzedmiot = "28"
            document.getElementById("konsolanadol").innerText ="You got a bucket full of tar"
        },
        "28": function() {
            if(wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item==null){
                wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item=["29"]
            }
            else{
                wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.push("29")
            }
            document.getElementById("konsolanadol").innerText ="You prepared a liquid poison"
            wszystkiedane.noszonyprzedmiot = null
            wszystkiedane.postep++
            czyowcajestgotowa()
        },
        "37": function() {
            document.getElementById("konsolanadol").innerText = "The dragon noticed your gift..."
            setTimeout(function () {
                document.getElementById("konsolanadol").innerText = "The dragon ate your sheep and died!"
                wszystkiedane.czysmokniezyje=true
                wszystkiedane.umiejscowienia[wszystkiedane.pozycja].file = "DS68.bmp"
                wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item=["30"]
                wszystkiedane.noszonyprzedmiot=null
            }, 1500)
        },
        "33": function() {
            if (wszystkiedane.czysmokniezyje) {
                wszystkiedane.noszonyprzedmiot = "34"
                document.getElementById("konsolanadol").innerText ="You cut a piece of dragon's skin"
            }
            else {
                wszystkiedane.noszonyprzedmiot = "33"
                document.getElementById("konsolanadol").innerText ="Dragon isn't dead yet, you can't skin it"
            }
        },
        "34": function() {
            wszystkiedane.noszonyprzedmiot = "35"
            document.getElementById("konsolanadol").innerText ="You used your tools to make shoes"
        },
        "35": function() {
            wszystkiedane.noszonyprzedmiot = "36"
            document.getElementById("konsolanadol").innerText ="The King is impressed by your shoes"
        }
    }
}
function render(){
    document.body.innerHTML = ""
    var ekran=document.createElement("div")
    var miejscebycia=document.createElement("div")
    var obrazek=new Image()
    var kompas=new Image()
    var gdziemoznaisc=document.createElement("div")
    var konsolanadol=document.createElement("div")
    var dopisania=document.createElement("input")
    var tekstzkonsoli=document.createElement("div")
    var zaslonapolnoc=document.createElement("div")
    var zaslonapoludnie=document.createElement("div")
    var zaslonawschod=document.createElement("div")
    var zaslonazachod=document.createElement("div")
    zezwoleniepolnoc=false;
    zezwoleniepoludnie=false;
    zezwoleniewschod=false;
    zezwoleniezachod=false;

    var tekstnagore = wszystkiedane.umiejscowienia[wszystkiedane.pozycja].descritpion

    var dostepnekierunki = "You can go "
    for(var a=0;a<wszystkiedane.umiejscowienia[wszystkiedane.pozycja].move.length;a++){
        if(wszystkiedane.umiejscowienia[wszystkiedane.pozycja].move[a]=="N"){
            dostepnekierunki+="NORTH"
            zezwoleniepolnoc=true;
        }
        else if(wszystkiedane.umiejscowienia[wszystkiedane.pozycja].move[a]=="S"){
            dostepnekierunki+="SOUTH"
            zezwoleniepoludnie=true;
        }
        else if(wszystkiedane.umiejscowienia[wszystkiedane.pozycja].move[a]=="W"){
            dostepnekierunki+="WEST"
            zezwoleniezachod=true;
        }
        else if(wszystkiedane.umiejscowienia[wszystkiedane.pozycja].move[a]=="E"){
            dostepnekierunki+="EAST"
            zezwoleniewschod=true;
        }
        if(a<wszystkiedane.umiejscowienia[wszystkiedane.pozycja].move.length-1){
            dostepnekierunki+=", "
        }
    }
    var dostepnyprzedmiot = ""
    
    if(wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item!=null){
        dostepnyprzedmiot="You see " 
        wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item
        for(a=0;a<wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.length;a++){
        dostepnyprzedmiot+=wszystkiedane.przedmioty[wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item[a]].nazywanie
            if(a<wszystkiedane.umiejscowienia[wszystkiedane.pozycja].item.length-1){
                dostepnyprzedmiot+=","
            }
        }
    }
    else{
        dostepnyprzedmiot="You see nothing"
    }
    
    var czycosmasz = ""
    if(wszystkiedane.noszonyprzedmiot!=null){
        czycosmasz= "You are carrying " + wszystkiedane.przedmioty[wszystkiedane.noszonyprzedmiot].nazywanie
    }
    else{
        czycosmasz= "You are carrying nothing"
    }

    ekran.id="ekran"
    miejscebycia.id="miejscebycia"
    obrazek.id="obrazek"
    kompas.id="kompas"
    gdziemoznaisc.id="gdziemoznaisc"
    konsolanadol.id="konsolanadol"
    dopisania.id="dopisania"
    tekstzkonsoli.id="tekstzkonsoli"
    zaslonapolnoc.id="zaslonapolnoc"
    zaslonapoludnie.id="zaslonapoludnie"
    zaslonawschod.id="zaslonawschod"
    zaslonazachod.id='zaslonazachod'

    document.body.appendChild(ekran)
    ekran.appendChild(miejscebycia)
    ekran.appendChild(obrazek)
    ekran.appendChild(kompas)
    ekran.appendChild(gdziemoznaisc)
    ekran.appendChild(konsolanadol)
    konsolanadol.appendChild(tekstzkonsoli)
    konsolanadol.appendChild(dopisania)
    ekran.appendChild(zaslonapolnoc)
    ekran.appendChild(zaslonapoludnie)
    ekran.appendChild(zaslonawschod)
    ekran.appendChild(zaslonazachod)
    obrazek.src = "./img/" + wszystkiedane.umiejscowienia[wszystkiedane.pozycja].file
    kompas.src = "./img/kompas.bmp"
    obrazek.style.backgroundColor = wszystkiedane.umiejscowienia[wszystkiedane.pozycja].bg
    tekstzkonsoli.innerText = "What now? "
    miejscebycia.innerText = tekstnagore
    gdziemoznaisc.innerHTML=dostepnekierunki + "</br>" + dostepnyprzedmiot + "</br>" + czycosmasz 
    if(zezwoleniepolnoc){
        document.getElementById("zaslonapolnoc").style.display="none"
    }
    if(zezwoleniepoludnie){
        document.getElementById("zaslonapoludnie").style.display="none"
    }
    if(zezwoleniewschod){
        document.getElementById("zaslonawschod").style.display="none"
    }
    if(zezwoleniezachod){
        document.getElementById("zaslonazachod").style.display="none"
    }
    dopisania.onblur = function (){
        dopisania.focus()
        }
    dopisania.focus()
    dopisania.addEventListener("keyup", function () {
        if (event.keyCode === 13) {
            konsola.wprowadzonytekst()
        }
    })
    if(ekranpoczatkowy){
        document.getElementById("konsolanadol").innerText =""
        var obrazek1=new Image()
        obrazek1.id="obrazek1"
        obrazek1.src = "./img/opis_B.jpg"
        var obrazek2=new Image()
        obrazek2.id="obrazek2"
        obrazek2.src = "./img/opis_A.jpg"
        var obrazek3=new Image()
        obrazek3.id="obrazek1"
        obrazek3.src = "./img/czolowka.jpg"
        ekran.appendChild(obrazek1)
        ekran.appendChild(obrazek2)
        ekran.appendChild(obrazek3)
        var huehue = new Audio
        huehue.id = "myAudio"
        huehue.src = "hejnaliggobraz/hejnal-mariacki.mp3"
        huehue.canPlayType="audio/mpeg"
        huehue.autoplay="true"
        ekran.appendChild(huehue)
        obrazek3.onclick = function(){
            document.getElementById("myAudio").play() 
            obrazek3.style.display="none"
        };
        obrazek2.onclick = function(){
            
            obrazek2.style.display="none"
        };
        obrazek1.onclick = function(){
            render()
        };
        ekranpoczatkowy=false 
    }
}
document.addEventListener("DOMContentLoaded", render)