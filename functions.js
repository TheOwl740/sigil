function inputManagement() {
	if(e.data.pressedKeys.includes("ArrowUp")) {
		camera.t.y -= speed;
	}
	if(e.data.pressedKeys.includes("ArrowDown")) {
		camera.t.y += speed;
	}
	if(e.data.pressedKeys.includes("ArrowRight")) {
		camera.t.x += speed;
	}
	if(e.data.pressedKeys.includes("ArrowLeft")) {
		camera.t.x -= speed;
	}
}

function modifyTransform(transform) {
	return new Transform((transform.x - camera.t.x) / camera.zoom, (transform.y - camera.t.y) / camera.zoom, transform.w / camera.zoom, transform.h / camera.zoom, transform.r, transform.xo, transform.yo)
}

function renderMapObjects() {
	if(camera.t.x + (e.data.w * camera.zoom) < -10000) {
		for(i = 0; i < mapObjects[0].length; i++) {
			if(/*!e.methods.colliding(mapObjects[i].transform, new Transform(camera.x + (e.data.w / 2), camera.y + (e.data.h / 2), e.data.w, e.data.h))*/ false) {
				continue;
			} else {
				e.methods.image(modifyTransform(mapObjects[0][i].transform), mapObjects[0][i].imageRenderer, mapObjects[00][i].borderRenderer)
			}
		}
	} else if(camera.t.x > 10000) {
		for(i = 0; i < mapObjects[2].length; i++) {
			if(/*!e.methods.colliding(mapObjects[i].transform, new Transform(camera.x + (e.data.w / 2), camera.y + (e.data.h / 2), e.data.w, e.data.h))*/ false) {
				continue;
			} else {
				e.methods.image(modifyTransform(mapObjects[2][i].transform), mapObjects[2][i].imageRenderer, mapObjects[2][i].borderRenderer)
			}
		}
	} else {
		for(i = 0; i < mapObjects[1].length; i++) {
			if(/*!e.methods.colliding(mapObjects[i].transform, new Transform(camera.x + (e.data.w / 2), camera.y + (e.data.h / 2), e.data.w, e.data.h))*/ false) {
				continue;
			} else {
				e.methods.image(modifyTransform(mapObjects[1][i].transform), mapObjects[1][i].imageRenderer, mapObjects[1][i].borderRenderer)
			}
		}
	}
}