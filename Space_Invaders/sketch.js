
var ship;
var flower = [];
var drops = [];
function setup() {
	createCanvas(600, 400);
	ship = new Ship();

	for(let i = 0;i<1000 ; i++){
		flower[i] = new Flower(random(width), 50);
	}

}

function draw() {
	background(51);
	ship.show();


	for(let j = 0; j<flower.length; j++){
		flower[j].show();
	}

	for(let i = 0; i<drops.length; i++){
		drops[i].show();
		drops[i].move();
		for(let j = 0; j<flower.length; j++){
			if(drops[i].hits(flower[j])){
				console.log("BOOM");
				flower[j].die();
				drops[i].evap();
			}
		}
	}


	for(let i = drops.length-1; i>=0; i--){
		if(drops[i].toDelete){
			drops.splice(i,1);
		}
	}

	for(let i = flower.length-1; i>=0; i--){
		if(flower[i].death){
			flower.splice(i,1);

		}
	}
	for(let i = 0; i<flower.length;i++){
		if(flower[i].y> height){

				console.log("GAME OVER");
				setup();

		}
	}

	ship.move();
}
function keyPressed(){

	if(key === ' '){
		var drop = new Drop(ship.x, ship.y);
		drops.push(drop);
	}
/*	if(keyCode === LEFT_ARROW){
		ship.move(-1);
	}else if(keyCode === RIGHT_ARROW){
		ship.move(1);
	}*/
}
