console.log("wczytano net")
//dzban od servera połączenia
class Net {
    constructor() {
        
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
}