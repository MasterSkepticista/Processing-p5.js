
var scl = 20;
var food;
var s;
function setup(){
  s = new Snake();
  createCanvas(600,600);
  frameRate(15);
  pickLocation();

}

function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)),floor(random(rows)));
  food.mult(scl);
}

function draw(){

  background(51);

  s.update();
  s.death();
  s.show();
  if(s.eat(food)){
    pickLocation();
  }
  fill(255,0,100);
  rect(food.x,food.y,scl,scl);
}

function keyPressed(){

  if(keyCode == UP_ARROW){
    s.dir(0,-1);
  }else if(keyCode == DOWN_ARROW){
    s.dir(0,1);
  }else if(keyCode == RIGHT_ARROW){
    s.dir(1,0);
  }else {
    s.dir(-1,0);
  }
}
