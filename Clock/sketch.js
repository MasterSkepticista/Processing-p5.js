function setup() {
	createCanvas(600, 600);
	angleMode(DEGREES);

}

function draw() {
	translate(width/2, height/2);
	let h = hour();
	let m = minute();
	let s = second();
	rotate(-90);
	background(51);
	stroke(255,0,100);
	strokeWeight(8);
	noFill();
	let end = map(s,0,59,0,360);
	arc(0, 0, 300, 300,0,end);

	stroke(255,100,0);
	let end2 = map(m,0,59,0,360);
	arc(0, 0, 280, 280,0,end2);

	stroke(100,100,0);
	let end3 = map(h%12,0,11,0,360);
	arc(0, 0, 260, 260,0,end3);

	push();
	rotate(90);
	noFill();
	stroke(255);
	strokeWeight(1);
	textSize(22);
	text(h+':'+m+':'+s,-40,0);
	pop();
}
