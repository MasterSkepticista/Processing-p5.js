var data = [];

var m = 1;
var b = 0;
function setup() {
	createCanvas(400, 400);

}


function drawLine(){

	var x1 = 0;
	var y1 = m * x1 + b;
	var x2 = 1;
	var y2 = m * x2 + b;

	x1 = map(x1, 0 ,1, 0, width);
	y1 = map(y1, 0, 1, height, 0);
	x2 = map(x2, 0 ,1, 0, width);
	y2 = map(y2, 0, 1, height, 0);

	stroke(255,255,0);
	fill(255);
	line(x1, y1, x2, y2);
}
function draw() {
	background(51);
	drawLine();

	for(let i = 0; i< data.length;i++){
		var x = map(data[i].x,0,1,0,width);
		var y = map(data[i].y,0,1,height,0);
		noStroke();
		fill(255);
		ellipse(x, y, 8,8);

	}
	linearRegression();
}

function linearRegression(){
	var lr = 0.3;
	var error;

	for(let i = 0; i< data.length;i++){
		let x = data[i].x;
		let y = data[i].y;
		error = -m*x-b+y;
		m = m + error*x*lr;
		b = b + error*lr;
	}
}
function mousePressed(){

	var x = map(mouseX, 0, width, 0, 1);
	var y = map(mouseY, 0, height, 1, 0);

	Point = createVector(x,y);
	data.push(Point);


}
