
        var licznik=document.getElementById("select").value
        console.log(licznik)
        for(var a=0;a<licznik;a++){
            var obrazek = document.createElement("div")
            obrazek.classList.add("hex")
            obrazek.style.backgroundImage = "url('hex.png')";
            document.getElementById("prawo").appendChild(obrazek)
        }
    