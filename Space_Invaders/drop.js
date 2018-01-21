function Drop(x, y){
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;
  this.show = function(){
    noStroke();
    fill(100, 0, 255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  this.move = function(){
    this.y-=5;
  }
  this.hits = function(flower){
    let d = dist(this.x, this.y, flower.x, flower.y);
    if(d<(this.r + flower.r)){
      return true;
    }else{
      return false;
    }
  }

  this.evap = function(){
    this.toDelete = true;
  }
}
