$(document).ready(function () {
    console.log("ready");
    $("#panel1").on("click", function () {
        var div = $("<div>")
        div.addClass("newdiv")
        $("#panel1").append(div)
        var cords = {
            x: event.clientX - $("#panel1").offset().left,
            y: event.clientX - $("#panel1").offset().top
        }
        console.log(cords);
        /* $.ajax({
            url: "/",
            data: {
                a: $("#inp1").val(),
            },
            type: "POST",
            success: function (data) {
                //czytamy odesłane z serwera dane
                var obj = JSON.parse(data)
                console.log(obj.b);
                $("#inp2").val(obj.b)

            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        }); */
    })

})