let xPos = 250;
let yPos = 250;
// we declare two different speed variables two for each x and y axis
let xSpeed;
let ySpeed;
let xDirection = 1;
let yDirection = 1;
let r,g,b;
// asign direction values
 
function setup() {
   createCanvas(500, 500);
   background(0);
   
   // random speed integers
   xSpeed = random(-5,5);
   ySpeed = random(-5,5);
   r = random(0,255);
   g = random(0,255);
   b = random(0,255);
   noStroke();
   // start our ball to go in a random direction
}

function draw() {
    background(0,40);
    
    fill(r,g,b);
    ellipse(xPos, yPos, 50, 50);
    // draw our ball at 250,250
    
    xPos += xSpeed * xDirection;
    yPos += ySpeed * yDirection;
    
    // we want our ball to bounce horizantally
    if (xPos < 25 || xPos > 475) {
        xDirection *= -1;
        r = random(0,255);
        g = random(0,255);
        b = random(0,255);
    }
    if (yPos < 25 || yPos > 475) {
        yDirection *= -1;
        r = random(0,255);
        g = random(0,255);
        b = random(0,255);
    }
}
