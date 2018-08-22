function setup() {
  
  createCanvas(1280,1024);
  background(255,255,255);
  
  //Framerate, for when I need that extra kick.
  frameRate(75)
  
}

//varibles
var a = 1;
var b = 698;


//Movement Function
function mousePressed() {
    a = a + 2;
    b = b - 3;
}

function draw() {
  
  //Shapes
  noStroke();
  fill(19,133,16);
  rect(0,718,1280,206);
  
  noStroke();
  fill('#87CEEB');
  rect(0,0,1280,718);
  
  strokeWeight(1);
  stroke(0);
  fill(255,255,255);
  ellipse(a,b,50,50);
  
}
