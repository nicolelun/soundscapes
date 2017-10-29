// var musicTrack; 
// var amplitude;
var r = 20;
var g = 10;
var b = 40;
var rIncrease = true; 
var gIncrease = true; 
var bIncrease = true;
var rStep; 
var gStep; 
var bStep;
var maxChannel = 150;
var minChannel = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	// musicTrack = loadSound("../media/AlleyChildrenLoud.mp3", loaded);
	// background(0);
	// amplitude = new p5.Amplitude();
	rStep = random(0.1, 0.3); 
	gStep = random(0.1, 0.3); 
	bStep = random(0.1, 0.3);
}

function loaded() {
	// musicTrack.play();
}

function draw() {

	if (rIncrease == true) {
		r = (r + rStep);
		if (r >= maxChannel) {
			rIncrease = false;
		}
	} else if (rIncrease == false) {
		r = (r - rStep);
		if (r <= minChannel) {
			rIncrease = true;
		}
	}

	if (gIncrease == true) {
		g = (g + gStep);
		if (g >= maxChannel) {
			gIncrease = false;
		}
	} else if (gIncrease == false) {
		g = (g - gStep);
		if (g <= minChannel) {
			gIncrease = true;
		}
	}

	if (bIncrease == true) {
		b = (b + bStep);
		if (b >= maxChannel) {
			bIncrease = false;
		}
	} else if (bIncrease == false) {}; {
		b = (b - bStep);
		if (b <= minChannel) {
			bIncrease = true;
		}
	}

	// background(0, 100);
	background(r, g, b);

	// Get the volume of the track.
	// var level = amplitude.getLevel(); // Between 0 and 1
	// var x = width/2 + level*500 ;
	// var y = height - level*500 ;
	// stroke(0);
	// line(0, y, width, y);
}

