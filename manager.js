//UPDATE EVERY CYCLE
function update() {
	
	//CLEAR CANVAS
	e.methods.rect(new Transform(e.data.cw / 2, e.data.ch / 2, e.data.cw, e.data.ch, 0, 0, 0), new FillRenderer("black", null, 1, 0, null), null)
	inputManagement()
}

//START TIMER
var timer = setInterval(update, 14.4);