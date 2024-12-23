window.onload = function(){
    for(let a=0;a<6;a++){
        button = document.createElement("button")
        button.addEventListener("click",function(){
            window.alert(a+1)
        })
        document.body.append(button)
    }
}