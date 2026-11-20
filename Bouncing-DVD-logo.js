let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

// DVD logo properties
const LOGO_WIDTH = 70;
const LOGO_HEIGHT = 35;
let logo = {
  x: 50,
  y: 50,
  dx: 0.5, // horizontal speed
  dy: 0.5, // vertical speed
  color: "#ff0055"
};

const colors = ["#ff0055", "#00ffcc", "#ffcc00", "#00aaff", "#cc66ff", "#66ff33"];

function getRandomColor() {
  let newColor = colors[Math.floor(Math.random() * colors.length)];
  // Make sure it picks a different color than the current one
  return newColor === logo.color ? getRandomColor() : newColor;
}

function update() {
  // Move the logo
  logo.x += logo.dx;
  logo.y += logo.dy;

  // Bounce off left or right wall
  if (logo.x + LOGO_WIDTH >= width || logo.x <= 0) {
    logo.dx = -logo.dx;
    logo.color = getRandomColor();
  }

  // Bounce off top or bottom wall
  if (logo.y + LOGO_HEIGHT >= height || logo.y <= 0) {
    logo.dy = -logo.dy;
    logo.color = getRandomColor();
  }
}

function draw() {
  // Clear canvas background
  ctx.fillStyle = "#060726";
  ctx.fillRect(0, 0, width, height);

  // Draw the DVD box
  ctx.fillStyle = logo.color;
  ctx.fillRect(logo.x, logo.y, LOGO_WIDTH, LOGO_HEIGHT);

  // Draw the "DVD" text inside
  ctx.fillStyle = "#060726";
  ctx.font = "bold 20px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("DVD", logo.x + LOGO_WIDTH / 2, logo.y + LOGO_HEIGHT / 2);
}

// Main animation loop
function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

// Start the animation
loop();
