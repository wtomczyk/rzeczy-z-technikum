window.onload = function() {
    let area = document.getElementById('area')
    area.style.borderStyle = 'dotted'
    area.style.borderColor = '#000'
    let cnt =false

    area.addEventListener('keydown', function() {
        
        if (cnt){
            area.style.borderStyle = "dashed"
            cnt=false
        }
        else{
            area.style.borderStyle = "dotted"
            cnt=true
        }
        
    })
}