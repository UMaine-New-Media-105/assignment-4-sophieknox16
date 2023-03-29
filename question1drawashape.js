//Sophie Knox
//Assignment 4 Queastion 1: Draw a Shape with a Loop
// This code(if it works) should draw flowers with different amounts of petals using loops
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(220);
  
  push()
  translate(200,200)
  rotate(180)
  for (let circlesDrawn = 0; circlesDrawn < 7; circlesDrawn ++) {
    drawFlower(0, 0, 1.5);
    rotate(72)
  } pop()
  
  push()
  translate(100,150)
  rotate(180)
  for (let circlesDrawn = 0; circlesDrawn < 20; circlesDrawn ++) {
    drawFlower(0, 0, 1);
    rotate(18)
  } pop()
  
    push()
  translate(300,100)
  rotate(180)
  for (let circlesDrawn = 0; circlesDrawn < 10; circlesDrawn ++) {
    rotate(40)
    drawFlower(0, 0, 1);
  } pop()

    push()
  translate(50,350)
  rotate(180)
  for (let circlesDrawn = 0; circlesDrawn < 7; circlesDrawn ++) {
    rotate(60)
    drawFlower(0, 0, 1.3);
  } pop()
}

function drawFlower(x,y,size){
 push()
  scale(size);
  translate(x,y);
  fill("pink")
  noStroke();
  triangle(0,0,-8, 30, 8, 30)
  pop()
}
