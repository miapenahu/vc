let img;

function setup() {
  // create an image using the p5 dom library
  // call modelReady() when it is loaded
  img = loadImage("/vc/docs/sketches/peripheral.png");
  createCanvas(700, 400);
  // set the image size to the size of the canvas

  frameRate(1); // set the frameRate to 1 since we don't need it to be running quickly in this case
}

function draw() {
  background(img);
  //loadPixels();
  //updatePixels();
  //noLoop();
}