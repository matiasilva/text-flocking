class Vehicle {
  constructor(x, y, col) {
    this.home = createVector(x, y);
    this.pos = p5.Vector.copy(this.home);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.color = col;
    this.size = 8;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  steer() {}

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  show() {
    fill(this.color);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}
