function sigmoid(x){
		return 1/(1+Math.exp(-x));
		// if(x>0){
		// 	return x;
		// }else{
		// 	return 0.01*x;
		// }
}


function sigmoid_deriv(x){

	return x*(1-x);
	// if(x>=0){
	// 	return 1;
	// }else{
	// 	return 0;
	// }
}


class NeuralNetwork {

	constructor(input_nodes, hidden_nodes, output_nodes, learn_rate){
		this.input_nodes = input_nodes;
		this.hidden_nodes = hidden_nodes;
		this.output_nodes = output_nodes;
		this.lr = learn_rate;
		this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes);
		this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes);
		this.weights_ih.randomize();
		this.weights_ho.randomize();

		this.hidden_bias = new Matrix(this.hidden_nodes, 1);
		this.output_bias = new Matrix(this.output_nodes, 1);

		this.hidden_bias.randomize();
		this.output_bias.randomize();
	}


	feedForward(input){

		//convert ip array to matrix
		var input_layer = Matrix.fromArray(input);
		//compute hidden layer
		var hidden_layer = Matrix.dot(this.weights_ih, input_layer);

		//add biases here
		hidden_layer.add(this.hidden_bias);
		hidden_layer.map(sigmoid);

		//compute output layer
		var outputs = Matrix.dot(this.weights_ho,hidden_layer);
		outputs.add(this.output_bias);
		outputs.map(sigmoid);

		//return as array
		return outputs.toArray();
	}


	train(inputs_arr, targets_arr){

		//convert array to matrix class
		var input_layer = Matrix.fromArray(inputs_arr);
		var targets = Matrix.fromArray(targets_arr);
		var hidden_layer = Matrix.dot(this.weights_ih, input_layer);

		//add biases here
		hidden_layer.add(this.hidden_bias);
		hidden_layer.map(sigmoid);
		var outputs = Matrix.dot(this.weights_ho,hidden_layer);
		outputs.add(this.output_bias);
		outputs.map(sigmoid);



		var output_error = Matrix.subtract(targets, outputs);

		var who_t = Matrix.transpose(this.weights_ho);
		var hidden_error = Matrix.dot(who_t, output_error);
		var lr = this.lr;

		var grad_output = Matrix.map(outputs,sigmoid_deriv);
		grad_output.multiply(lr);
		grad_output.multiply(output_error);

		var grad_hidden = Matrix.map(hidden_layer,sigmoid_deriv);
		grad_hidden.multiply(lr);
		grad_hidden.multiply(hidden_error);


		var input_layer_T = Matrix.transpose(input_layer);
		var delta_wih = Matrix.dot(grad_hidden, input_layer_T);
		var hidden_layer_T = Matrix.transpose(hidden_layer);
		var delta_who = Matrix.dot(grad_output, hidden_layer_T);


		this.weights_ho.add(delta_who);
		this.weights_ih.add(delta_wih);


	}
}
