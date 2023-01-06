let textToPrint = '012345678910';
let currentIndex = 0;
let a = 80;
let y = 0;

function setup() {
  createCanvas(720, 400);
  background(0);
}

function draw() {
  weirdLines();
  thisText();
  thisText2();
  Number(); 
}

function Number() {
  textSize(50);
  fill(0);
   let currentChar = textToPrint.charAt(currentIndex);
  text(currentChar, 10, 30);
  currentIndex++;
  
  if (currentIndex >= textToPrint.length) {
    currentIndex = 0;
  } 
}

function weirdLines(){
   stroke(94, 251, 0);

  for (let i = 0; i < height; i++) {
  line(i, 5 * y, width,7*i);
  }
  for (let a = 0; a < width; a += 10) {
    line(a, 0, a, height);
  } 
}


function thisText(){
  fill(202 ,301,0);
  textSize(20);
  for (let i = 0; i < 25; i++){
  text("Debug mode initiated.",14, i * 12);  
  }
}

function thisText2(){
  textSize(40);
   for (let i = 0; i < 35 ; i++){
  text("Debugging environment ready.",height, i * 12);
  } 
}
