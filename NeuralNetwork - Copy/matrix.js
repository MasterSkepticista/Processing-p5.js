//var m = new Matrix(3,2);
 class Matrix{
 	constructor(rows, cols){


		this.rows = rows;
		this.cols = cols;
		this.data = [];

		for(var i = 0; i < this.rows; i++){
			this.data[i] = [];
			for(var j = 0; j < this.cols ; j++){
				this.data[i][j] = 0;
			}
		}
	}

  toArray(){
    let arr = [];
    for(var i = 0; i < this.rows; i++){
			for(var j = 0; j < this.cols ; j++){
				arr.push(this.data[i][j]) ;
			}
		}
    return arr;
  }

  static fromArray(arr){
    let m = new Matrix(arr.length, 1);
    for ( let i = 0; i< arr.length; i++){
      m.data[i][0] = arr[i];
    }
    return m;
  }

  static subtract(a, b){

    let results = new Matrix(a.rows, a.cols);
    for(var i = 0; i < a.rows; i++){
			for(var j = 0; j < a.cols ; j++){
				results.data[i][j] = a.data[i][j]-b.data[i][j];
			}
		}
    return results;
  }

	randomize(){

		for(var i = 0; i < this.rows; i++){
			for(var j = 0; j < this.cols ; j++){
				this.data[i][j] = Math.random()*2 - 1;	//Generate randoms from 0-9
			}
		}
	}

	static transpose(a){

		let result = new Matrix(a.cols, a.rows);
		for(var i = 0; i < a.rows; i++){
				for(var j = 0; j < a.cols ; j++){
					result.data[j][i] = a.data[i][j];
				}
			}
		return result;
	}


  static map(matrix, func){
    let result = new Matrix(matrix.rows, matrix.cols);
    for(var i = 0; i < matrix.rows; i++){
      for(var j = 0; j < matrix.cols ; j++){
        result.data[i][j] = func(matrix.data[i][j]);
      }
    }
    return result;
  }
  map(func){
    for(var i = 0; i < this.rows; i++){
      for(var j = 0; j < this.cols ; j++){
        let val = this.data[i][j];
        this.data[i][j] = func(val);
      }
    }
  }
	add(n){

		if(n instanceof Matrix){
			for(var i = 0; i < this.rows; i++){
				for(var j = 0; j < this.cols ; j++){
					this.data[i][j] += n.data[i][j];
				}
			}

		}else{
			for(var i = 0; i < this.rows; i++){
				for(var j = 0; j < this.cols ; j++){
					this.data[i][j] += n;
				}
			}
		}

	}

  static dot(a, b){

    if(a.cols!=b.rows){
      console.log('Matrix dimension mismatch');
      return undefined;
    }
    else{
      let result = new Matrix(a.rows, b.cols);
        for(let i = 0; i < a.rows; i++){
          for(let j = 0; j < b.cols ; j++){
            for(let k = 0;k<a.cols;k++){
              result.data[i][j]+=a.data[i][k] * b.data[k][j];
            }

        }
      }
      return result;
    }

  }

  multiply(n){
    if(n instanceof Matrix){
      for(var i = 0; i < this.rows; i++){
			   for(var j = 0; j < this.cols ; j++){
				    this.data[i][j] *= n.data[i][j];
			   }
		  }
    }else{
      for(var i = 0; i < this.rows; i++){
			   for(var j = 0; j < this.cols ; j++){
				    this.data[i][j] *= n;
			   }
		  }
    }
  }



  print(){
    console.table(this.data);
  }
}
