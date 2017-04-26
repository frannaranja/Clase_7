function setup() {
  canvas = createCanvas(windowWidth, windowHeight * 0.8);
  canvas.parent('top');
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 0.8);
}

function draw() {
  var palabra = "DaenerysTargaryen";
  fill(255);
  background(237,34,93);
  textSize(50);
  textAlign(CENTER);
  text(palabra.length, width / 2, height / 2);
}
