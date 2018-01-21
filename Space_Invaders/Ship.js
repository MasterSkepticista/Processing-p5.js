function Ship(){

  this.x = width/2;
  this.y = height;


  this.show = function(){
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, 20, 60);
  }

  this.move = function(){
    //this.x+=dir*10;
    this.x = mouseX;
  }
}
