## Question 1
For this assignment I made a function called drawFlower that makes a trianlge set in the top left corner. This function has parameters for size and location using scale and translate. 
Next I used the for to create a loop that sends the triangles around the center to make a flower looking sprite. 
```Javascript
  push()
  translate(100,150)
  rotate(180)
  for (let circlesDrawn = 0; circlesDrawn < 20; circlesDrawn ++) {
    drawFlower(0, 0, 1);
    rotate(18)
  } pop()
 ```
 To make the "petals" go around the center I added rotate before the loop and to change the different amounts of petals I messed around with the rotate within the loop function and also change the number that circlesDrawn is less than. 
 (the only reason this is called circledrawn is because p5js was constantly crashing and I that what the loop was on my first attemt of this where I was using circles rather than triangles)

Link: https://editor.p5js.org/Sophiek/sketches/9boIFKr7w
 
 ## Question 2
For this sketch I created a flower function that, when called in draw it creates a flower with the amount of petals called as one of the parameters. 
To make the petals even around the center I made the angle = 360/ the number of flower petals. 
```Javascript
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
```
When I called the loops in draw I set 3 flowers that will be repeated to fill the canvas. I used translate in the loops to fill the screen. Below you can see the code that filled the first third of he the screen and I repeated this for the next two sections with seperate cordinates to fill the canvas. 
```Javascript
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
 ```
Link: https://editor.p5js.org/Sophiek/sketches/kMnRiqkM6

## Question 3
For this assignment I used the code I had from question 2 and set the loops in the draw function to create a random pattern.
First I set noLoop in setup so the pattern drawn would not animate. 
When I called the loops in draw I set 3 flowers that will be repeated to fill the canvas. I used translate in the loops to fill the screen. Below you can see the code that filled the first third of he the screen and I repeated this for the next two sections with seperate cordinates to fill the canvas. 
```Javascript
  push()
  for (let sectionsDrawn = 0; sectionsDrawn < 5; sectionsDrawn++) {
    translate(0, 75)
    drawFlower(50, 50, 1, 6);
    drawFlower(50, 125, 1, 6);
    drawFlower(125, 75, 1, s); //Draws a third flower that has more petals than the other in between the two to the right
  } pop()
  push()
  for (let sectionsDrawn = 0; sectionsDrawn < 5; sectionsDrawn++) {
    translate(0, 150)
    drawFlower(50, 50, 1, 6); 
    drawFlower(50, 125, 1, 6);
    drawFlower(125, 75, 1, s);
  } pop()
 ```
To randomize this pattern I made one of the flowers have random amounts of petals everytime the sketch is played. 
```Jacvascript
  s = random (3, 10)
```
Link: https://editor.p5js.org/Sophiek/sketches/TaMEWfW4S

## Question 4
