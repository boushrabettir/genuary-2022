function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(250);
  strokeWeight(0);
  translate(0, 50, 0);
  tree(); 
  Smile();
}

function tree(){
  strokeWeight(0.3);
  
  stroke(0);
  fill(150, 75, 0);
  cylinder(10, 100);
  
  // Draw the leaves
  translate(0, -60, 0);
  fill(0, 200, 0);
  sphere(45);
  
  translate(0, -30, 0);
  fill(0, 200, 0);
  sphere(40);
  
  translate(-30, 10, 10);
  fill(0, 200, 0);
  sphere(35);
  
  translate(0, 30, 20);
  fill(0, 200, 0);
  sphere(32);
  
  translate(25, -30, 2);
  fill(0, 200, 0);
  sphere(30);
  
  translate(40, -5, -10);
  fill(0, 200, 0);
  sphere(25);
  
  translate(10, 20, -14);
  fill(0, 200, 0);
  sphere(25);
  
  translate(-35,-45, -3);
  fill(0, 200, 0);
  sphere(37);
  
  translate(-40,-15, 0);
  fill(0, 200, 0);
  sphere(37);
  
  translate(60,70, 3);
  fill(0, 200, 0);
  sphere(38);
  
  translate(-30,20, 10);
  fill(0, 200, 0);
  sphere(38);
  
   translate(20,-15, 30);
  fill(0, 0, 0);
  sphere(10);
  
  translate(-40,0, 10);
  fill(0, 0, 0);
  sphere(10);
  
   translate(0,0, 15);
  fill(255,160,122);
  sphere(250);
  
  
}

function Smile() {
  strokeWeight(4);
  fill(255,255,255);
  arc(21, 13, 30, 30, 0, PI, CHORD);
  point(25, 40);
  point(65, 10);
}
