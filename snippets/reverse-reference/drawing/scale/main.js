function main() {
	var scene = new g.Scene({
		game: g.game,
		assetIds: ["player"]
	});

	scene.onLoad.add(function () {
		var sprite = new g.Sprite({
			scene: scene,
			src: scene.asset.getImageById("player"),
			x: 0,
			y: 0,
			scaleX: 2,
			scaleY: 1.5
		});
		scene.append(sprite);
	});
	g.game.pushScene(scene);
}

module.exports = main;
