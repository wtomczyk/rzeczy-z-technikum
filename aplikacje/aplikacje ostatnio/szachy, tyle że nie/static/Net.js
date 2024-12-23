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
                game.czynplansze(obj)
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
}