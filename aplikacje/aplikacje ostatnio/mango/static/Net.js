console.log("wczytano net")

class Net {
    constructor() {
        
    }
    start(){
        console.log("document ready");
        $.ajax({
            url: "/gibe",
            data: {},
            type: "POST",
            success: function (data) {
                var obj = JSON.parse(data)
                console.log(obj);
                main.aaaaaa(obj)
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
    wysłanieinfo(info){
        console.log("document ready");
        console.log(info.login)
        $.ajax({
            url: "/insert",
            data: {
                login:info.login,
                password:info.password
            },
            type: "POST",
            success: function (data) {
                var obj = JSON.parse(data)
                console.log(obj);
                main.aaaaaa(obj)
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
    update(info){
        $.ajax({
            url: "/update",
            data: {
                id:info.id,
                login:info.login,
                password:info.password
            },
            type: "POST",
            success: function (data) {
                var obj = JSON.parse(data)
                console.log(obj);
                main.aaaaaa(obj)
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
    usun(id){
        $.ajax({
            url: "/delet",
            data: {
                id:id
            },
            type: "POST",
            success: function (data) {
                var obj = JSON.parse(data)
                console.log(obj);
                main.aaaaaa(obj)
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
}
