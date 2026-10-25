function setup() {
  createCanvas(500, 500);
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
  ellipse(220, 210, 13, 13);
  ellipse(280, 210, 13, 13);
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
  ellipse(180, 265, 12, 12);
  ellipse(320, 265, 12, 12);
  // Gold triangle necklace
  fill(255, 215, 80);
  triangle(250, 405, 240, 385, 260, 385);
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
  textSize(28);
  textAlign(CENTER);
  text("Self Portrait", 250, 65);
  // Signature
  fill(85, 50, 65);
  textSize(18);
  textAlign(RIGHT);
  text("Addison", 475, 485);
}