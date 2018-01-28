

function setup() {
	let nn = new NeuralNetwork(2,4,1);


	var inp = [[1,1],[1,0],[0,1],[0,0]];
	var tar = [[0],[1],[1],[0]];



	for(var i=0;i<500;i++){
		for(var j=0;j<4;j++){
			nn.train(inp[j], tar[j]);
		}
	}


	for(var j=0;j<4;j++){
		let guess = nn.feedForward(inp[j]);

			console.log(guess);
		

	}



}
