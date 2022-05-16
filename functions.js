function inputManagement() {
	if(e.data.pressedKeys.includes("ArrowUp")) {
		camera.y -= speed;
	}
	if(e.data.pressedKeys.includes("ArrowDown")) {
		camera.y += speed;
	}
	if(e.data.pressedKeys.includes("ArrowRight")) {
		camera.x += speed;
	}
	if(e.data.pressedKeys.includes("ArrowLeft")) {
		camera.x -= speed;
	}
}