document.fonts.ready.then(function () {
	const text = new Blotter.Text("GENUARY", {
		family: "'Permanent Marker', serif",
		size : 240,
		fill : "#171717",
	});
	
	const material = new Blotter.ChannelSplitMaterial();
	const blotter = new Blotter(material, {
		texts: text,
	});

	const scope = blotter.forText(text);
	const scene = document.getElementById("scene");
	scope.appendTo(scene);

	material.uniforms.uOffset.value = 0.025;

	document.addEventListener('mousemove', (e)=> {
		let mouse = {x: e.clientX, y: e.clientY};
		let distance = calculateDistance(scene);
	});

	function calculateDistance(elem) {
		return Math.floor(elem);
	}
}.bind(this));