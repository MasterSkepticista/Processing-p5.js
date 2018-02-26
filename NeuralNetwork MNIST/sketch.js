let mnist;
let train_index = 0;
let nn;
let user_digit;
function setup(){

	user_digit = createGraphics(200, 200);
	user_digit.pixelDensity(1);
	createCanvas(400, 200).parent('container');
	loadMNIST(function(data){
		mnist = data;
		console.log(mnist);
	});
	nn = new NeuralNetwork(784, 30, 10);
}
//**************************************Core NN work****************************
function draw(){

	background(0);

	if(mnist){
		for(let j=0;j<20;j++)
			train();
	}
	guessUserDigit();
	//Draw the user user_digit
	image(user_digit, 0, 0);
	if(mouseIsPressed){
		user_digit.fill(255);
		user_digit.stroke(255);
		user_digit.strokeWeight(10);
		user_digit.line(mouseX, mouseY, pmouseX, pmouseY);
	}
}
//******************************************************************************
function guessUserDigit(){
	let img = user_digit.get();
	let inputs = [];
	img.resize(28, 28);
	img.loadPixels();
	for(let i = 0; i<784; i++){

		inputs[i] = img.pixels[i*4];

	}
	let prediction = nn.predict(inputs);
	let guess = findMax(prediction);
	select('#user_guess').html(guess);
	return img;
}

function train(){
	background(0);
	let inputs = [];
	let img = createImage(28, 28);
	img.loadPixels();
	for(let i = 0; i<784; i++){


		let brightness = mnist.train_images[i+train_index*784];
		inputs[i] = brightness / 255;
		let index = i * 4;
		img.pixels[index] = brightness;
		img.pixels[index+1] = brightness;
		img.pixels[index+2] = brightness;
		img.pixels[index+3] = 255;	//transparency alpha is 255
	}
	img.updatePixels();
	image(img, 200, 0, 200, 200);

	//Create label indices

	let label = mnist.train_labels[train_index];
	let targets = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	targets[label] = 1;

	//train

	nn.train(inputs, targets);

	let prediction = nn.predict(inputs);
	let guess = findMax(prediction);

	select('#label').html(label);
	select('#guess').html(guess);
	if(guess == label){
		select('#guess').class('correct');
	}else{
		select('#guess').class('wrong');
	}
	train_index++;
	console.log(train_index);
	if(train_index == 59999){
		train_index = 0;
		guessUserDigit();
	}
}

function findMax(arr){
	let index = 0;
	let max = 0;
	for(let i = 0; i<arr.length; i++){
		if(arr[i]>max){
			index = i;
			max = arr[i];
		}
	}
	return index;
}

//Delete image of user_digit
function keyPressed(){
	if(key == ' '){
		user_digit.background(0);
	}
}
