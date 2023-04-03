function setup() {
  createCanvas(450, 400);
  angleMode(DEGREES);
}

function draw() {
  background("lightcyan");

    translate(0, -100) // This moves the pattern up so it fills the entire canvas
  
  push()
  for (let sectionsDrawn = 0; sectionsDrawn < 5; sectionsDrawn++) {
    translate(0, 75)
    drawFlower(50, 50, 1, 6);
    drawFlower(50, 125, 1, 6);
    drawFlower(125, 75, 1, 8); //Draws a third flower that has more petals than the other in between the two to the right
  } pop()
  push()
  for (let sectionsDrawn = 0; sectionsDrawn < 5; sectionsDrawn++) {
    translate(0, 150)
    drawFlower(50, 50, 1, 6); 
    drawFlower(50, 125, 1, 6);
    drawFlower(125, 75, 1, 8);
  } pop()
  
    push()
  for (let sectionsDrawn = 0; sectionsDrawn < 5; sectionsDrawn++) {
    translate(0, 75)
    drawFlower(200, 50, 1, 6);
    drawFlower(200, 125, 1, 6);
    drawFlower(275, 75, 1, 8);
  } pop()
    push()
    for (let sectionsDrawn = 0; sectionsDrawn < 5; sectionsDrawn++) {
    translate(0, 150)
    drawFlower(200, 50, 1, 6);
    drawFlower(200, 125, 1, 6);
    drawFlower(275, 75, 1, 8);
  } pop()
  
      push()
  for (let sectionsDrawn = 0; sectionsDrawn < 5; sectionsDrawn++) {
    translate(0, 75)
    drawFlower(350, 50, 1, 6);
    drawFlower(350, 125, 1, 6);
    drawFlower(425, 75, 1, 8);
  } pop()
    push()
    for (let sectionsDrawn = 0; sectionsDrawn < 5; sectionsDrawn++) {
    translate(0, 150)
    drawFlower(350, 50, 1, 6);
    drawFlower(350, 125, 1, 6);
    drawFlower(425, 75, 1, 8);
  } pop()
}



function drawFlower(x, y, size, flowerPoints) {
  push();
  scale(size);
  translate(x, y);
  fill("palevioletred");
  noStroke();
  let addAngle = 360 / flowerPoints;
  for (let pointsDrawn = 0; pointsDrawn < flowerPoints; pointsDrawn++) {
    rotate(addAngle);
    triangle(0, 0, -8, 30, 8, 30);
  }
  pop();
  //This function draws a flower with the amount of triangle petals that are defined in the 4th parameter when it is called in the draw function
}
