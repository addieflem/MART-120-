const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let playerX = 50;
let playerY = 200;
let gameOver = false;
// Exit location
let exitX = 540;
let exitY = 170;
let clickX = -100;
let clickY = -100;
let obstacle1X = 150;
let obstacle1Y = 100;

let obstacle2X = 400;
let obstacle2Y = 300;

function draw() {
  if (gameOver) return;
  // Keep player inside the canvas
if (playerX < 15 || playerX > 585) {
  playerX = Math.max(15, Math.min(585, playerX));
}

if (playerY < 15 || playerY > 385) {
  playerY = Math.max(15, Math.min(385, playerY));
}s
  // Purple background
  ctx.fillStyle = "rgb(220, 200, 240)";
  ctx.fillRect(0, 0, 600, 400);
  // Draw the exit
ctx.fillStyle = "lightgreen";
ctx.fillRect(exitX, exitY, 50, 60);

ctx.fillStyle = "black";
ctx.font = "18px Arial";
ctx.fillText("EXIT", exitX + 4, exitY + 35);

  // Pink player
  ctx.fillStyle = "rgb(255, 100, 150)";
  ctx.beginPath();
  ctx.arc(playerX, playerY, 15, 0, Math.PI * 2);
  ctx.fill();
  // Blue obstacle
ctx.fillStyle = "blue";
ctx.fillRect(obstacle1X, obstacle1Y, 40, 40);

// Yellow obstacle
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(obstacle2X, obstacle2Y, 25, 0, Math.PI * 2);
ctx.fill();

// Green obstacle from mouse click
if (clickX >= 0 && clickY >= 0) {
  ctx.fillStyle = "green";
  ctx.fillRect(clickX, clickY, 30, 30);
 
}
// Move the obstacles randomly
obstacle1X += Math.random() * 4 - 2;
obstacle1Y += Math.random() * 4 - 2;

obstacle2X += Math.random() * 6 - 3;
obstacle2Y += Math.random() * 6 - 3;
// Wrap obstacles around the screen
if (obstacle1X > 600) obstacle1X = -40;
if (obstacle1X < -40) obstacle1X = 600;
if (obstacle1Y > 400) obstacle1Y = -40;
if (obstacle1Y < -40) obstacle1Y = 400;

if (obstacle2X > 625) obstacle2X = -25;
if (obstacle2X < -25) obstacle2X = 625;
if (obstacle2Y > 425) obstacle2Y = -25;
if (obstacle2Y < -25) obstacle2Y = 425;
// Check collision with blue obstacle
if (
  playerX + 15 > obstacle1X &&
  playerX - 15 < obstacle1X + 40 &&
  playerY + 15 > obstacle1Y &&
  playerY - 15 < obstacle1Y + 40
) {
  alert("You hit the blue obstacle!");
  gameOver = true;
}
// Check collision with yellow obstacle
if (
  playerX + 15 > obstacle2X - 25 &&
  playerX - 15 < obstacle2X + 25 &&
  playerY + 15 > obstacle2Y - 25 &&
  playerY - 15 < obstacle2Y + 25
) {
  alert("You hit the yellow obstacle!");
  gameOver = true;
}
// Check collision with green obstacle
if (
  clickX >= 0 &&
  clickY >= 0 &&
  playerX + 15 > clickX &&
  playerX - 15 < clickX + 30 &&
  playerY + 15 > clickY &&
  playerY - 15 < clickY + 30
) {
 gameOver = true;
  alert("You hit the green obstacle!");
}
// Check if player reaches the exit
if (
  playerX + 15 > exitX &&
  playerX - 15 < exitX + 50 &&
  playerY + 15 > exitY &&
  playerY - 15 < exitY + 60
) {
  gameOver = true;  
  alert("You Win! You made it to the exit!");
}
}

draw();
setInterval(draw, 30);
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft") {
    playerX -= 10;
  }

  if (event.key === "ArrowRight") {
    playerX += 10;
  }

  if (event.key === "ArrowUp") {
    playerY -= 10;
  }

  if (event.key === "ArrowDown") {
    playerY += 10;
  }

  draw();
});
// Add an obstacle when the mouse is clicked
canvas.addEventListener("click", function(event) {
  const rect = canvas.getBoundingClientRect();

  const mouseX = (event.clientX - rect.left) * canvas.width / rect.width;
  const mouseY = (event.clientY - rect.top) * canvas.height / rect.height;

  ctx.fillStyle = "green";
  ctx.fillRect(mouseX, mouseY, 30, 30);
});
canvas.addEventListener("click", function(event) {
  const rect = canvas.getBoundingClientRect();
  clickX = event.clientX - rect.left;
  clickY = event.clientY - rect.top;
  draw();
});