b = Runner.instance_.clearCanvas;

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(l) {
	if (l.keyCode == "68") {
		drawline();
	}
}

function drawline() {
	if (Runner.instance_.horizon.obstacles.length > 0) {
		Runner.instance_.clearCanvas = function () {};
		Runner.instance_.canvasCtx.beginPath();
		Runner.instance_.canvasCtx.moveTo(
			Runner.instance_.tRex.xPos + 23,
			Runner.instance_.tRex.yPos + 20
		);
		Runner.instance_.canvasCtx.lineTo(
			Runner.instance_.horizon.obstacles[0].xPos + 10,
			Runner.instance_.horizon.obstacles[0].yPos + 10
		);
		Runner.instance_.canvasCtx.stroke();
		setTimeout(function () {
			Runner.instance_.clearCanvas = b;
		}, 15);
		Runner.instance_.horizon.removeFirstObstacle();
	}
}
