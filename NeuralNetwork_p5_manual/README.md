# Teaching an XOR gate to a Neural Network

This is a 3 layer Neural Network library built on p5.js
This is NOT an optimized version. It uses a manually designed Matrix library, so is inefficient.

Usage:

## Declare object with number of neurons in each layer
	
	
	let nn = new NeuralNetwork(2,4,1);

## Add input and target results
	
	var inp = [[1,1],[1,0],[0,1],[0,0]];
	var tar = [[0],[1],[1],[0]];


## Train recursively for each (since dataset is small, multiple iterations are needed. Consider randomising the training examples to reduce overfit)
	
	
	for(var i=0;i<500;i++){
		for(var j=0;j<4;j++){
			nn.train(inp[j], tar[j]);
		}
	}

## After training, ask the NN for a guess
	
	for(var j=0;j<4;j++){
		let guess = nn.feedForward(inp[j]);
	}
	console.log(guess);
		

	
