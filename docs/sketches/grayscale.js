let pg;
let img;

function preload(){  
  img = loadImage("/vc/docs/sketches/firebreathing.jpg"); //1920x1440
}

function setup() {
    img.resize(600,512)
    createCanvas(600, 1626);
    
    image(img, 0, 40);
    highContrastText("Original",40,10,30);
    image(avgGrayscale(img),0 , 602);
    highContrastText("Average Grayscale: R/3 + G/3 +B/3",30,10,592);
    image(yuvGrayscale(img),0 , 1164);
    highContrastText("YUV Grayscale: 0.299*R + 0.587*G + 0.114*B",24,10,1144);
  //frameRate(1); 
}

function draw() {

}

function highContrastText(content, size, posX, posY){
    fill(0);
    textSize(size);
    text(content,posX,posY);
}

function avgGrayscale(imag){
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

function yuvGrayscale(imag){
    let copied = createGraphics(imag.width,imag.height);
    copied.loadPixels();  
    for(let i = 0; i < imag.width; i++) {
      for(let j = 0; j < imag.height; j++) {
        copied.set(i, j, color(0.299*red(imag.get(i, j)) +  0.587*green(imag.get(i, j)) + 0.114*blue(imag.get(i, j))));
      }
    }
    copied.updatePixels();
    return copied;
  }
