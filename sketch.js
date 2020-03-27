let x = 0,
  y = 0;
let grid = 10;

function setup() {
  createCanvas(500, 500);
  background(0);
  stroke(255);
  strokeWeight(1);
  // put setup code here
}

function draw() {
  translate(x, y);
  if (random() < 0.9) {
    line(0, grid, grid, 0);
  } else {
    line(0, 0, grid, grid);
  }
  x += grid;
  if (x > width) {
    x = 0;
    y += grid;
  }
}
