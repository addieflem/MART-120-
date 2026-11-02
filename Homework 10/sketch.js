let eyeX = 220;
let eyeSpeed = 2;
let rightEyeX = 280;
let rightEyeSpeed = 3;
let earringY = 265;
let earringSpeed = 1.5;
let rightEarringY = 265;
let rightEarringSpeed = 2.5;
let necklaceX = 0;
let necklaceY = 0;
necklaceSpeedX = 1;
necklaceSpeedY = 1.5;
let titleSize = 28;
let titleDirection = 1;
let titleCount = 0;
function setup() {
  createCanvas(500, 500);
  eyeSpeed = random(1, 3);
  rightEyeSpeed = random(2,4);
  earringSpeed = random(1,2);
  rightEarringSpeed = random(2,3);
}

function draw() {
  background(255, 200, 220);
  fill(85, 50, 35);
  ellipse(250, 245, 190, 280);
  fill(245, 200, 170);
  ellipse(250, 220, 145, 190);
  fill(255);
  ellipse(220, 210, 30, 20);
  ellipse(280, 210, 30, 20);

  fill(90, 55, 35);
  ellipse( eyeX, 210, 13, 13);
  ellipse( rightEyeX, 210, 13, 13);
  // Nose
  stroke(150, 90, 70);
  strokeWeight(2);
  line(250, 220, 245, 245);
  //Smile
  noFill();
  stroke(180, 65, 85);
  strokeWeight(3);
  arc(250, 260, 55, 25, 0, PI);
  // Hair framing face
  noStroke();
  fill(85, 50, 35);
  arc(250, 165, 155, 100, PI, TWO_PI);
  // Shirt and soulders
  fill(120, 70, 110);
  rect(160, 380, 180, 90, 25);
  // Gold earrings
  fill(255, 215, 80);
  ellipse(180, earringY, 12, 12);
  ellipse(320, rightEarringY, 12, 12);
  // Gold triangle necklace
  fill(255, 215, 80);
  triangle(250 + necklaceX, 405 + necklaceY,
           240 + necklaceX, 385 + necklaceY,
           260 + necklaceX, 385 + necklaceY);
  // Freckles
  stroke(160, 95, 75);
  strokeWeight(3);
  point(205, 240);
  point(215, 245);
  point(225, 240);
  point(280, 240);
  point(290, 245);
  point(300, 240);
  // Portait title
  noStroke();
  fill(85, 50, 65);
  textSize(titleSize);
  textAlign(CENTER);
  text("Self Portrait", 250, 65);
  // Signature
  fill(85, 50, 65);
  textSize(18);
  textAlign(RIGHT);
  text("Addison", 475, 485);
  eyeX = eyeX + eyeSpeed;
  if (eyeX > 235 || eyeX < 205) {
eyeSpeed = eyeSpeed * -1;
  }
  rightEyeX = rightEyeX + rightEyeSpeed;
  if (rightEyeX > 295 || rightEyeX < 265) {
    rightEyeSpeed = rightEyeSpeed * -1;
  }
  earringY = earringY + earringSpeed;
  if (earringY > 275 || earringY < 255) {
    earringSpeed = earringSpeed * -1;
  }
  rightEarringY = rightEarringY + rightEarringSpeed;
  if (rightEarringY > 275 || rightEarringY < 255) {
    rightEarringSpeed = rightEarringSpeed * -1;
  }
  necklaceX = necklaceX + necklaceSpeedX;
  necklaceY = necklaceY + necklaceSpeedY;
  if (necklaceX > 15 || necklaceX < -15) {
    necklaceSpeedX = necklaceSpeedX * -1;
  }
  if (necklaceY > 15 || necklaceY < -15) {
    necklaceSpeedY = necklaceSpeedY * -1;
    
  }
  if (frameCount % 15 === 0) {
    titleSize = titleSize + titleDirection * 2;
    titleCount++;
    if (titleCount === 5) {
      titleDirection = titleDirection * -1;
      titleCount = 0;
    }
  }
}