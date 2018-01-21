function Flower(x, y){

  this.x = random(width);
  this.y = random(0, 100);
  this.r = 5;
  this.death = false;
  this.show = function(){
    noStroke();
    fill(200, 0, 255);
    ellipse(this.x, this.y+=0.5, this.r*2, this.r*2);
  }

  this.die = function(){
    this.death = true;


  }
}
