console.log("wczytano net")

class Net {
    constructor() {
        
    }
    start(){
        console.log("document ready");
        $.ajax({
            url: "/load",
            type: "POST",
            success: function (data) {
                var obj = JSON.parse(data)
                console.log(obj);
                ui.renderowaniealbumów(obj)
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
    
    pliczki(album, info){
    $.ajax({
        url: "/load",
        data: {
            album: album,
        },
        type: "POST",
        success: function (data) {
            var obj = JSON.parse(data)
            ui.renderowanieplikow(obj.files, info, obj.rozmiary)
        },
        error: function (xhr, status, error) {
            console.log(xhr);
        },
    });
    }
    
    dodanieinfo(customfolder,customplik,customrozmiar){
        $.ajax({
            url: "/dodajinfo",
            data: {  
                folder:customfolder,
                plik:customplik,
                rozmiar:customrozmiar
            },
            type: "POST",
            success: function (data) {
                //var obj = JSON.parse(data)
                //console.log(obj);
                //ui.dodanieinformacji(obj.customfolder,obj.customplik,obj.customrozmiar,info,nazwa,rozmiar)
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
    tworzplayliste(){
        $.ajax({
            url: "/czyn",
            data: {  
                
            },
            type: "POST",
            success: function (data) {
                var obj = JSON.parse(data)
                //console.log(obj);
                ui.listatworzona(obj)
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
    /*
    infooplayliscie(a,info,nazwa,rozmiar){
        $.ajax({
            url: "/load",
            data: {  
                album:a,
                customfolder:info,
                customplik:nazwa,
                customrozmiar:rozmiar
            },
            type: "POST",
            success: function (data) {
                var obj = JSON.parse(data)
                console.log(obj);
                //ui.renderowanieplikow(obj.files,info, obj.rozmiary, obj.customfolder, obj.customplik, obj.customrozmiar)
                ui.playlistafunckja(obj.customfolder,obj.customplik,obj.customrozmiar)
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
    */
}
