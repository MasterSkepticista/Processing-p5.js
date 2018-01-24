var rows = 50;
var cols = 50;

var start;
var end;
var grid = new Array(cols);
var w, h;
var openSet = [];
var closedSet = [];
var path=[];
var noSolution = false;

function setup() {
	createCanvas(600, 600);

	w = width/cols;
	h = height/rows;

	for(var i=0; i<cols; i++){
		grid[i] = new Array(rows);
	}


	for(var i=0; i<cols; i++){
		for(var j=0; j<rows; j++){
			grid[i][j] = new Spot(i, j);
		}
	}
	//Add neighbors to each spot.
	for(var i=0; i<cols; i++){
		for(var j=0; j<rows; j++){
			grid[i][j].addNeighbors(grid);
		}
	}



	start = grid[0][0];
	end = grid[cols-1][rows - 1];
	openSet.push(start);
}

function draw() {
	background(51);

	if(openSet.length > 0){
		//keep going
		var winner = 0;
		for( var i = 0; i<openSet.length;i++){
			if(openSet[i].f < openSet[winner].f){
				winner = i;
			}
		}

		var current = openSet[winner];

		if(current === end){
			//Reconstruct

			console.log("Found the path!");
			noLoop();
		}

		removeFromArray(openSet, current);
		closedSet.push(current);


		var neighbors = current.neighbors;

		for( var i = 0; i<neighbors.length;i++){
			var neighbor = neighbors[i];

			if(!closedSet.includes(neighbor)&& !neighbor.wall){
				var tempG = current.g + 1;
				//Add the g only if it is NOT a part of openSet
				//and it is BETTER than the current
				var newPath = false;
				if(openSet.includes(neighbor)){
					if(tempG < neighbor.g){
						neighbor.g = tempG;
						newPath = true;
					}
					}else {
						neighbor.g = tempG;
						newPath = true;
						openSet.push(neighbor);
					}

					if(newPath){
						neighbor.h = heuristic(neighbor, end);
						neighbor.f = neighbor.g + neighbor.h;
						neighbor.previous = current;
					}

				}


		}
	}else{
		console.log("NO SOLUTION");
		noSolution = true;
		noLoop();
		//no solutions
	}


	drawpoints(openSet, closedSet, grid);
	path = [];
	var temp = current;
	if(!noSolution){
		while(temp.previous){
				path.push(temp.previous);
				temp = temp.previous;
		}

	}

	start.wall = false;
	end.wall = false;
	for(var i=0; i<path.length; i++){
		path[i].show(color(0,0,255));
	}

}
