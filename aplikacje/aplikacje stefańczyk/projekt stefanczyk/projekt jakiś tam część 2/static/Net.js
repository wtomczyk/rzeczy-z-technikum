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
            album: album
        },
        type: "POST",
        success: function (data) {
            var obj = JSON.parse(data)
            console.log(obj);
            console.log(obj.rozmiary)
            ui.renderowanieplikow(obj.files, info, obj.rozmiary)
        },
        error: function (xhr, status, error) {
            console.log(xhr);
        },
    });
}
}
