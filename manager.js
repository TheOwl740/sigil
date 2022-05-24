//UPDATE EVERY CYCLE
function update() {
	
	//CLEAR CANVAS
	e.methods.rect(new Transform(e.data.cw / 2, e.data.ch / 2, e.data.cw, e.data.ch, 0, 0, 0), new FillRenderer("#000009", null, 1, 0, null), null)
	inputManagement();
	islands.left.update();
	islands.right.update();
	islands.center.update();
	renderMapObjects();
	console.log(camera.t.x + (e.data.w * camera.zoom) < -10000)
}

//START TIMER
var timer = setInterval(update, 14.4);