let pg;
let img;

function preload(){
  img = loadImage("/vc/docs/sketches/lenna.png");
}

function setup() {
  createCanvas(512, 512);
  pg = createGraphics(100, 100);
  background(255);
  pg.background(100);
  pg.noStroke();
  pg.ellipse(pg.width / 2, pg.height / 2, 50, 50);
  image(pg, 50, 50);
  image(pg, 0, 0, 50, 50);
  image(pg, 100, 100);
  image(img, 0, 0, 256, 256);
  gray = grayscale(img)
  neg = negative(img)
  image(negative(img),0 , 256, 256, 256);
  image(grayscale(img),256 , 0, 256, 256);
  //frameRate(1); 
}

function draw() {

}

function negative(imag){
  let copied = createGraphics(imag.width,imag.height);
  copied.loadPixels();  
  for(let i = 0; i < imag.width; i++) {
    for(let j = 0; j < imag.height; j++) {
      copied.set(i, j, color(255 - red(imag.get(i, j)), 255 - green(imag.get(i, j)), 255 - blue(imag.get(i, j))));
    }
  }
  copied.updatePixels();
  return copied;
}

function grayscale(imag){
  let copied = createGraphics(imag.width,imag.height);
  copied.loadPixels();  
  for(let i = 0; i < imag.width; i++) {
    for(let j = 0; j < imag.height; j++) {
      copied.set(i, j, color((red(imag.get(i, j)) +  green(imag.get(i, j)) + blue(imag.get(i, j)))/3));
    }
  }
  copied.updatePixels();
  return copied;
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}