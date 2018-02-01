
var inp = [22,28,29,70];
var tar = [0.522,0.1212,0.88,0.296];
var test = [0,0,0,0];


function setup() {
	createCanvas(600, 600);

	nn = new NeuralNetwork(4,10,4,0.1);



}

function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}
function draw(){
	background(255);


	nn.train(inp, tar);



		let guess = nn.feedForward(test);

		stroke(0);
		fill(0);
		textSize(50);
		text(precisionRound(guess[0], 3),100,50);
		text(precisionRound(guess[1], 3),100,100);
		text(precisionRound(guess[2], 3),100,150);
		text(precisionRound(guess[3], 3),100,200);


}
