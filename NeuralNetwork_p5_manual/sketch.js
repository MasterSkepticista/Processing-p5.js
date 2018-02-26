var training;
var answers;

function setup() {
	createCanvas(600, 600);

	nn = new NeuralNetwork(400,30,10,0.1);
	


}
function preload() {
  training = loadStrings('mnist.csv');
  answers = loadStrings('mnist_out.csv');
}

function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}
function draw(){
	background(255);
	var i=0;
	do{

		nn.train([training[i]], [answers[i]]);
		i++;
	}while(i<=100);

}
