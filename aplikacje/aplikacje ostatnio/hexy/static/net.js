console.log("wczytano plik Net.js")

class Net {
    constructor() {
        
    }

    sendData(wyslane) {
        console.log(wyslane)
        $.ajax({
            url: "/",
            contentType: 'application/json',
            data: {data: JSON.stringify(wyslane)},
            type: "POST",
            dataType: "json",
            success: function (data) {  
                console.log(data.data);
                console.log(JSON.parse(data.data));
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        })
    }
    start() {
        $.ajax({
            url: "/load",
            contentType: 'application/json',
            type: "POST",
        
            success: function (data) {  
                script.aaa(JSON.parse(data))
                
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        })
    }
}