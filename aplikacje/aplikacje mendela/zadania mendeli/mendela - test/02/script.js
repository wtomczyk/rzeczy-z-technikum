window.onload = function() {
	if(window.confirm('czy chcesz wylosować liczbę?')) {
		document.getElementsByTagName('input')[0].value = '' + (Math.random() * (9-3) + 3)
	} else {
		window.alert('szkoda : (')
	}
}