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

Link: https://editor.p5js.org/Sophiek/sketches/kMnRiqkM6
