console.log("wczytano net")

class Net {
    constructor() {
        
    }
    start(){
        console.log("document ready");
        $.ajax({
            url: "/load",
            data: {},
            type: "POST",
            success: function (data) {
                var obj = JSON.parse(data)
                console.log(obj);
                ui.sprawdzenie(obj)
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
    info(rzecz){
        console.log("czyn");
        $.ajax({
            url: "/czyn",
            data: {
                rzecz:rzecz
            },
            type: "POST",
            success: function (data) {
                var obj = JSON.parse(data)
                console.log(obj);
                ui.infozwrotne(obj)
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
    reset(){
        console.log("czyn");
        $.ajax({
            url: "/reset",
            data: {},
            type: "POST",
            success: function (data) {
                var obj = JSON.parse(data)
                console.log(obj);
                ui.interfejs(obj)
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
    obecnigracze(){
        console.log("czyn");
        $.ajax({
            url: "/obecnosc",
            data: {},
            type: "POST",
            success: function (data) {
                var obj = JSON.parse(data)
                console.log(obj);
                ui.obecnosc(obj)
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
    dostarczanietablicy(tab,stare,nowe,graczwysylajacy){
        console.log("czyn");
        $.ajax({
            url: "/tablica",
            data: {
                tab:tab,
                stare:stare,
                nowe:nowe,
                graczwysylajacy:graczwysylajacy
            },
            type: "POST",
            success: function (data) {
                var obj = JSON.parse(data)
                console.log(obj);
                //ui.przycisknapozycje(obj.tab)
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
    tura(){
        console.log("czyn");
        $.ajax({
            url: "/tura",
            data: {},
            type: "POST",
            success: function (data) {
                var obj = JSON.parse(data)
                //console.log(obj);
                game.zmianatury(obj)
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
}
