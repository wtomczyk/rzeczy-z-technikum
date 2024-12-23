window.onload=function(){
    let aa = prompt("ile chcecsz divów")
    for(let a = 0;a<aa;a++){
        let aaa = document.createElement("div")
        aaa.className="klasa"
        document.body.append(aaa)
        
    }
}