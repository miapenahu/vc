let img;

function setup() {
  // create an image using the p5 dom library
  // call modelReady() when it is loaded
  
  //img = loadImage("/vc/docs/sketches/lenna.png");
  //createCanvas(512, 512);
  // set the image size to the size of the canvas
  size(800,600)
  pg = createGraphics(400, 300)
  frameRate(1); // set the frameRate to 1 since we don't need it to be running quickly in this case
}

function draw() {
  background(0)
  strokeWeight(3)
  pg.beginDraw()
  pg.background(125);
  pg.fill(0,255,0)
  pg.ellipse(156,256,55,155)
  pg.endDraw()

  image(pg, 100, 200)

//   fill(255,0,0)
//   stroke(255,0,255)
//   ellipse(mouseX,mouseY, 155,55)
  //loadPixels();

  //for(let i = 0; i < width; i++) {
  //  for(let j = 0; j < height; j++) {
  //    set(i, j, color(255 - red(get(i, j)), 255 - green(get(i, j)), 255 - blue(get(i, j))));
  //  }
  //}

  //updatePixels();

  //noLoop();
}