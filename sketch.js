// rainbow algorithm taken from: https://krazydad.com/tutorials/makecolors.php

let font, vehicles;
const text = 'rainbow';

function preload() {
  font = loadFont('rainbow.ttf');
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  let { x, y, w, h } = getCenterCoords(font, 'rainbow', 300);
  let points = font.textToPoints('rainbow', x, y, 300, {
    sampleFactor: 0.1,
    simplifyThreshold: 0
  });
  let rainbow = makeRainbow(points.length);
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    let col = rainbow[i];
    vehicles.push(new Vehicle(p.x, p.y, col));
  }
}

function draw() {
  background(51);
  for (const v of vehicles) {
    vehicles.update();
    vehicles.show();
  }
  stroke(245);
  noFill();
  rect(x, y - h, w, h);
}

function getCenterCoords(glyph, textContent, size) {
  let bbox = glyph.textBounds(textContent, 0, 0, size);
  return {
    x: (width - bbox.w) * 0.5,
    y: (height + bbox.h) * 0.5,
    w: bbox.w,
    h: bbox.h
  };
}

function makeRainbow(len) {
  const shift = 128;
  const amp = 127;
  const frequency = TWO_PI / len;
  const phase = 0;
  const colors = [];
  let r, g, b;
  for (let i = 0; i < len; ++i) {
    r = sin(frequency * i + TWO_PI / 3 + phase) * amp + shift;
    g = sin(frequency * i + 0 + phase) * amp + shift;
    b = sin(frequency * i + (2 * TWO_PI) / 3 + phase) * amp + shift;
    colors.push({ r, g, b });
  }
  return colors;
}
