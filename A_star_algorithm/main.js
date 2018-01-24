function drawpoints(openSet, closedSet, grid){
	for(var i=0; i<cols; i++){
		for(var j=0; j<rows; j++){
			grid[i][j].show(color(255));
		}
	}
	//Show all closed set elements red
	for(var i=0; i<closedSet.length; i++){
		closedSet[i].show(color(255, 0,0));
	}
	//Show all openSet elements green
	for(var i=0; i<openSet.length; i++){
		openSet[i].show(color(0,255,0));
	}
	//Show path in blue


}
function removeFromArray(arr, elt){

	for(var i=arr.length-1; i>=0; i--){
		if(arr[i] == elt){
				arr.splice(i, 1);
		}

	}
}
function heuristic(a, b){
	var d = abs(a.i - b.i) + abs(a.j - b.j);
	return d;
}
function Spot(i, j){

	this.i = i;
	this.j = j;
	this.f = 0;
	this.g = 0;
	this.h = 0;
	this.wall = false;

	//Randomly assign it wall, or no wall

	if(random(1)<0.2){
		this.wall = true;
	}
	this.neighbors = [];
	this.previous = undefined;
	this.addNeighbors = function(grid){
		var i = this.i;
		var j = this.j;

		if(i<cols - 1){
			this.neighbors.push(grid[i+1][j]);
		}

		if(i>0){
			this.neighbors.push(grid[i-1][j]);
		}
		if(j<rows - 1){
			this.neighbors.push(grid[i][j+1]);
		}
		if(j>0){
			this.neighbors.push(grid[i][j-1]);
		}
		//ADD DIAGONALS
		if(j>0 && i>0){
			this.neighbors.push(grid[i-1][j-1]);
		}
		if(j>0 && i<cols-1){
			this.neighbors.push(grid[i+1][j-1]);
		}
		if(j<rows-1&& i>0){
			this.neighbors.push(grid[i-1][j+1]);
		}
		if(j<rows-1&&i<cols-1){
			this.neighbors.push(grid[i+1][j+1]);
		}


	}
	this.show  = function(col){
		fill(col);
		if(this.wall){
			fill(0);
		}
		noStroke();
		rect(this.i*w, this.j*h, w-1, h-1);
	}
}
