tab=["imgs/a.png","imgs/b.png","imgs/c.png","imgs/d.png","imgs/e.png"]
setInterval(function(){ 
    document.getElementsByTagName("img")[0].src=tab[0]
    document.getElementsByTagName("img")[1].src=tab[1]
    document.getElementsByTagName("img")[2].src=tab[2]
    document.getElementsByTagName("img")[3].src=tab[3]
    document.getElementsByTagName("img")[4].src=tab[4]
    var aaa = tab[0]
    tab.splice(0,1)
    tab[4]=aaa
}, 1000);