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
    
    pliczki(album){
    $.ajax({
        url: "/load",
        data: {
            album: album
        },
        type: "POST",
        success: function (data) {
            var obj = JSON.parse(data)
            console.log(obj);
            ui.renderowanieplikow(obj.files)
        },
        error: function (xhr, status, error) {
            console.log(xhr);
        },
    });
}
}
