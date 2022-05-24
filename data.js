//ASSETS OBJECT FOR MODULE REFERENCE
const assets = {
	images: {
		buildings: {
			single: new Image(),
			long: new Image(),
			cornerDark: new Image()
		}
	},
	sounds: {
		
	}
}
assets.images.buildings.single.src = "assets/images/buildings/single.png";
assets.images.buildings.long.src = "assets/images/buildings/long.png";
assets.images.buildings.cornerDark.src = "assets/images/buildings/cornerDark.png";

//OTHER VARIABLES
var speed = 20;

//ARRAYS

//OBJECTS

//CAMERA OBJECT FOR FOCUS
const camera = {
	t: new Transform(0, 0, 1, 1),
	zoom: 100
}

//ISLAND OBJECTS
const islands = {
	left: {
		transform: new Transform(0, 0),
		fillRenderer: new FillRenderer("#090905", null, 1, null, null),
		borderRenderer: new BorderRenderer("#030017", 0.5, 0),
		polygonRenderer: new PolygonRenderer([]),
		shoreVel: 0.1,
		shoreUpdater: 0,
		update: () => {
			islands.left.transform.x = -20000 / camera.zoom;
			islands.left.polygonRenderer.points = [
				new Transform((-1800 - camera.t.x) / camera.zoom, (0 - camera.t.y) / camera.zoom),
				new Transform((-1700 - camera.t.x) / camera.zoom, (-7500 - camera.t.y) / camera.zoom),
				new Transform((-1300 - camera.t.x) / camera.zoom, (-15000 - camera.t.y) / camera.zoom),
				new Transform((-700 - camera.t.x) / camera.zoom, (-19000 - camera.t.y) / camera.zoom),
				new Transform((-600 - camera.t.x) / camera.zoom, (-20500 - camera.t.y) / camera.zoom),
				new Transform((-700 - camera.t.x) / camera.zoom, (-21000 - camera.t.y) / camera.zoom),
				new Transform((-800 - camera.t.x) / camera.zoom, (-21500 - camera.t.y) / camera.zoom),
				new Transform((-1300 - camera.t.x) / camera.zoom, (-22500 - camera.t.y) / camera.zoom),
				new Transform((-1600 - camera.t.x) / camera.zoom, (-23250 - camera.t.y) / camera.zoom),
				new Transform((-2200 - camera.t.x) / camera.zoom, (-24000 - camera.t.y) / camera.zoom),
				new Transform((-4050 - camera.t.x) / camera.zoom, (-24200 - camera.t.y) / camera.zoom),
				new Transform((-5240 - camera.t.x) / camera.zoom, (-24000 - camera.t.y) / camera.zoom),
				new Transform((-6200 - camera.t.x) / camera.zoom, (-23500 - camera.t.y) / camera.zoom),
				new Transform((-6910 - camera.t.x) / camera.zoom, (-22500 - camera.t.y) / camera.zoom),
				new Transform((-7520 - camera.t.x) / camera.zoom, (-21500 - camera.t.y) / camera.zoom),
				new Transform((-8020 - camera.t.x) / camera.zoom, (-19500 - camera.t.y) / camera.zoom),
				new Transform((-8430 - camera.t.x) / camera.zoom, (-18000 - camera.t.y) / camera.zoom),
				new Transform((-8800 - camera.t.x) / camera.zoom, (-16500 - camera.t.y) / camera.zoom),
				new Transform((-9260 - camera.t.x) / camera.zoom, (-15000 - camera.t.y) / camera.zoom),
				new Transform((-9520 - camera.t.x) / camera.zoom, (-13000 - camera.t.y) / camera.zoom),
				new Transform((-9710 - camera.t.x) / camera.zoom, (-11000 - camera.t.y) / camera.zoom),
				new Transform((-9830 - camera.t.x) / camera.zoom, (-9000 - camera.t.y) / camera.zoom),
				new Transform((-9920 - camera.t.x) / camera.zoom, (-6000 - camera.t.y) / camera.zoom),
				new Transform((-9980 - camera.t.x) / camera.zoom, (-3000 - camera.t.y) / camera.zoom),
				new Transform((-10000 - camera.t.x) / camera.zoom, (0 - camera.t.y) / camera.zoom),
				new Transform((-9980 - camera.t.x) / camera.zoom, (3000 - camera.t.y) / camera.zoom),
				new Transform((-9920 - camera.t.x) / camera.zoom, (6000 - camera.t.y) / camera.zoom),
				new Transform((-9830 - camera.t.x) / camera.zoom, (9000 - camera.t.y) / camera.zoom),
				new Transform((-9710 - camera.t.x) / camera.zoom, (11000 - camera.t.y) / camera.zoom),
				new Transform((-9520 - camera.t.x) / camera.zoom, (13000 - camera.t.y) / camera.zoom),
				new Transform((-9260 - camera.t.x) / camera.zoom, (15000 - camera.t.y) / camera.zoom),
				new Transform((-8800 - camera.t.x) / camera.zoom, (16500 - camera.t.y) / camera.zoom),
				new Transform((-8430 - camera.t.x) / camera.zoom, (18000 - camera.t.y) / camera.zoom),
				new Transform((-8020 - camera.t.x) / camera.zoom, (19500 - camera.t.y) / camera.zoom),
				new Transform((-7520 - camera.t.x) / camera.zoom, (21500 - camera.t.y) / camera.zoom),
				new Transform((-6910 - camera.t.x) / camera.zoom, (22500 - camera.t.y) / camera.zoom),
				new Transform((-6200 - camera.t.x) / camera.zoom, (23500 - camera.t.y) / camera.zoom),
				new Transform((-5240 - camera.t.x) / camera.zoom, (24000 - camera.t.y) / camera.zoom),
				new Transform((-4050 - camera.t.x) / camera.zoom, (24200 - camera.t.y) / camera.zoom),
				new Transform((-2200 - camera.t.x) / camera.zoom, (24000 - camera.t.y) / camera.zoom),
				new Transform((-1600 - camera.t.x) / camera.zoom, (23250 - camera.t.y) / camera.zoom),
				new Transform((-1300 - camera.t.x) / camera.zoom, (22500 - camera.t.y) / camera.zoom),
				new Transform((-800 - camera.t.x) / camera.zoom, (21500 - camera.t.y) / camera.zoom),
				new Transform((-700 - camera.t.x) / camera.zoom, (21000 - camera.t.y) / camera.zoom),
				new Transform((-600 - camera.t.x) / camera.zoom, (20500 - camera.t.y) / camera.zoom),
				new Transform((-700 - camera.t.x) / camera.zoom, (19000 - camera.t.y) / camera.zoom),
				new Transform((-1300 - camera.t.x) / camera.zoom, (15000 - camera.t.y) / camera.zoom),
				new Transform((-1700 - camera.t.x) / camera.zoom, (7500 - camera.t.y) / camera.zoom),
				new Transform((-1800 - camera.t.x) / camera.zoom, (0 - camera.t.y) / camera.zoom),
			];
			islands.left.shoreUpdater += islands.left.shoreVel;
			islands.left.borderRenderer.alpha = (islands.left.shoreUpdater - 80) / -100
			if(islands.left.shoreUpdater < 10) {
				islands.left.shoreUpdater = 10
				islands.left.shoreVel = 0.1;
			}
			if(islands.left.shoreUpdater > 30) {
				islands.left.shoreUpdater = 30;
				islands.left.shoreVel = -0.1;
			}
			islands.left.borderRenderer.lw = islands.left.shoreUpdater / camera.zoom;
			e.methods.polygon(islands.left.transform, islands.left.polygonRenderer, islands.left.fillRenderer, islands.left.borderRenderer)
		}
	},
	right: {
		transform: new Transform(0, 0),
		fillRenderer: new FillRenderer("#090905", null, 1, null, null),
		borderRenderer: new BorderRenderer("#030017", 0.5, 0),
		polygonRenderer: new PolygonRenderer([]),
		shoreVel: 0.1,
		shoreUpdater: 0,
		update: () => {
			islands.right.transform.x = 20000 / camera.zoom;
			islands.right.polygonRenderer.points = [
				new Transform((1800 - camera.t.x) / camera.zoom, (0 - camera.t.y) / camera.zoom),
				new Transform((1700 - camera.t.x) / camera.zoom, (-7500 - camera.t.y) / camera.zoom),
				new Transform((1300 - camera.t.x) / camera.zoom, (-15000 - camera.t.y) / camera.zoom),
				new Transform((700 - camera.t.x) / camera.zoom, (-19000 - camera.t.y) / camera.zoom),
				new Transform((600 - camera.t.x) / camera.zoom, (-20500 - camera.t.y) / camera.zoom),
				new Transform((700 - camera.t.x) / camera.zoom, (-21000 - camera.t.y) / camera.zoom),
				new Transform((800 - camera.t.x) / camera.zoom, (-21500 - camera.t.y) / camera.zoom),
				new Transform((1300 - camera.t.x) / camera.zoom, (-22500 - camera.t.y) / camera.zoom),
				new Transform((1600 - camera.t.x) / camera.zoom, (-23250 - camera.t.y) / camera.zoom),
				new Transform((2200 - camera.t.x) / camera.zoom, (-24000 - camera.t.y) / camera.zoom),
				new Transform((4050 - camera.t.x) / camera.zoom, (-24200 - camera.t.y) / camera.zoom),
				new Transform((5240 - camera.t.x) / camera.zoom, (-24000 - camera.t.y) / camera.zoom),
				new Transform((6200 - camera.t.x) / camera.zoom, (-23500 - camera.t.y) / camera.zoom),
				new Transform((6910 - camera.t.x) / camera.zoom, (-22500 - camera.t.y) / camera.zoom),
				new Transform((7520 - camera.t.x) / camera.zoom, (-21500 - camera.t.y) / camera.zoom),
				new Transform((8020 - camera.t.x) / camera.zoom, (-19500 - camera.t.y) / camera.zoom),
				new Transform((8430 - camera.t.x) / camera.zoom, (-18000 - camera.t.y) / camera.zoom),
				new Transform((8800 - camera.t.x) / camera.zoom, (-16500 - camera.t.y) / camera.zoom),
				new Transform((9260 - camera.t.x) / camera.zoom, (-15000 - camera.t.y) / camera.zoom),
				new Transform((9520 - camera.t.x) / camera.zoom, (-13000 - camera.t.y) / camera.zoom),
				new Transform((9710 - camera.t.x) / camera.zoom, (-11000 - camera.t.y) / camera.zoom),
				new Transform((9830 - camera.t.x) / camera.zoom, (-9000 - camera.t.y) / camera.zoom),
				new Transform((9920 - camera.t.x) / camera.zoom, (-6000 - camera.t.y) / camera.zoom),
				new Transform((9980 - camera.t.x) / camera.zoom, (-3000 - camera.t.y) / camera.zoom),
				new Transform((10000 - camera.t.x) / camera.zoom, (0 - camera.t.y) / camera.zoom),
				new Transform((9980 - camera.t.x) / camera.zoom, (3000 - camera.t.y) / camera.zoom),
				new Transform((9920 - camera.t.x) / camera.zoom, (6000 - camera.t.y) / camera.zoom),
				new Transform((9830 - camera.t.x) / camera.zoom, (9000 - camera.t.y) / camera.zoom),
				new Transform((9710 - camera.t.x) / camera.zoom, (11000 - camera.t.y) / camera.zoom),
				new Transform((9520 - camera.t.x) / camera.zoom, (13000 - camera.t.y) / camera.zoom),
				new Transform((9260 - camera.t.x) / camera.zoom, (15000 - camera.t.y) / camera.zoom),
				new Transform((8800 - camera.t.x) / camera.zoom, (16500 - camera.t.y) / camera.zoom),
				new Transform((8430 - camera.t.x) / camera.zoom, (18000 - camera.t.y) / camera.zoom),
				new Transform((8020 - camera.t.x) / camera.zoom, (19500 - camera.t.y) / camera.zoom),
				new Transform((7520 - camera.t.x) / camera.zoom, (21500 - camera.t.y) / camera.zoom),
				new Transform((6910 - camera.t.x) / camera.zoom, (22500 - camera.t.y) / camera.zoom),
				new Transform((6200 - camera.t.x) / camera.zoom, (23500 - camera.t.y) / camera.zoom),
				new Transform((5240 - camera.t.x) / camera.zoom, (24000 - camera.t.y) / camera.zoom),
				new Transform((4050 - camera.t.x) / camera.zoom, (24200 - camera.t.y) / camera.zoom),
				new Transform((2200 - camera.t.x) / camera.zoom, (24000 - camera.t.y) / camera.zoom),
				new Transform((1600 - camera.t.x) / camera.zoom, (23250 - camera.t.y) / camera.zoom),
				new Transform((1300 - camera.t.x) / camera.zoom, (22500 - camera.t.y) / camera.zoom),
				new Transform((800 - camera.t.x) / camera.zoom, (21500 - camera.t.y) / camera.zoom),
				new Transform((700 - camera.t.x) / camera.zoom, (21000 - camera.t.y) / camera.zoom),
				new Transform((600 - camera.t.x) / camera.zoom, (20500 - camera.t.y) / camera.zoom),
				new Transform((700 - camera.t.x) / camera.zoom, (19000 - camera.t.y) / camera.zoom),
				new Transform((1300 - camera.t.x) / camera.zoom, (15000 - camera.t.y) / camera.zoom),
				new Transform((1700 - camera.t.x) / camera.zoom, (7500 - camera.t.y) / camera.zoom),
				new Transform((1800 - camera.t.x) / camera.zoom, (0 - camera.t.y) / camera.zoom),
			];
			islands.right.shoreUpdater += islands.right.shoreVel;
			islands.right.borderRenderer.alpha = (islands.right.shoreUpdater - 80) / -100
			if(islands.right.shoreUpdater < 10) {
				islands.right.shoreUpdater = 10
				islands.right.shoreVel = 0.1;
			}
			if(islands.right.shoreUpdater > 30) {
				islands.right.shoreUpdater = 30;
				islands.right.shoreVel = -0.1;
			}
			islands.right.borderRenderer.lw = islands.right.shoreUpdater / camera.zoom;
			e.methods.polygon(islands.right.transform, islands.right.polygonRenderer, islands.right.fillRenderer, islands.right.borderRenderer)
		}
	},
	center: {
		transform: new Transform(0, 0),
		fillRenderer: new FillRenderer("#090905", null, 1, null, null),
		br: new BorderRenderer("#030017", 0.5, 0),
		polygonRenderer: new PolygonRenderer([]),
		shoreVel: 0.1,
		shoreUpdater: 0,
		update: () => {
			islands.center.polygonRenderer.points = [
				new Transform((0 - camera.t.x) / camera.zoom, (-8000 - camera.t.y) / camera.zoom),
				new Transform((2000 - camera.t.x) / camera.zoom, (-7500 - camera.t.y) / camera.zoom),
				new Transform((4000 - camera.t.x) / camera.zoom, (-6000 - camera.t.y) / camera.zoom),
				new Transform((7000 - camera.t.x) / camera.zoom, (-2000 - camera.t.y) / camera.zoom),
				new Transform((7000 - camera.t.x) / camera.zoom, (2000 - camera.t.y) / camera.zoom),
				new Transform((6500 - camera.t.x) / camera.zoom, (4000 - camera.t.y) / camera.zoom),
				new Transform((5000 - camera.t.x) / camera.zoom, (6000 - camera.t.y) / camera.zoom),
				new Transform((2000 - camera.t.x) / camera.zoom, (8000 - camera.t.y) / camera.zoom),
				new Transform((0 - camera.t.x) / camera.zoom, (8000 - camera.t.y) / camera.zoom),
				new Transform((-2000 - camera.t.x) / camera.zoom, (6000 - camera.t.y) / camera.zoom),
				new Transform((-7000 - camera.t.x) / camera.zoom, (2000 - camera.t.y) / camera.zoom),
				new Transform((-8000 - camera.t.x) / camera.zoom, (0 - camera.t.y) / camera.zoom),
				new Transform((-6000 - camera.t.x) / camera.zoom, (-3000 - camera.t.y) / camera.zoom),
				new Transform((-4000 - camera.t.x) / camera.zoom, (-4500 - camera.t.y) / camera.zoom),
				new Transform((-2000 - camera.t.x) / camera.zoom, (-5500 - camera.t.y) / camera.zoom),
				new Transform((-1500 - camera.t.x) / camera.zoom, (-6000 - camera.t.y) / camera.zoom),
				new Transform((0 - camera.t.x) / camera.zoom, (-8000 - camera.t.y) / camera.zoom),
			];
			islands.center.shoreUpdater += islands.center.shoreVel;
			islands.center.br.alpha = (islands.center.shoreUpdater - 80) / -100
			if(islands.center.shoreUpdater < 10) {
				islands.center.shoreUpdater = 10
				islands.center.shoreVel = 0.1;
			}
			if(islands.center.shoreUpdater > 30) {
				islands.center.shoreUpdater = 30;
				islands.center.shoreVel = -0.1;
			}
			islands.center.br.lw = islands.center.shoreUpdater / camera.zoom;
			e.methods.polygon(islands.center.transform, islands.center.polygonRenderer, islands.center.fillRenderer, islands.center.br)
		}
	}
}

const mapObjects = [
	[
	],
	[
		{
			type: "building",
			transform: new Transform(0, 0, 750, 750, 0, 0, 0),
			imageRenderer: new ImageRenderer(assets.images.buildings.single, 1, false, false),
			borderRenderer: null
		}
	],
	[	
	]
]