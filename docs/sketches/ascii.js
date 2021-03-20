let pg;
let img, copy1;

function preload(){  
  copy1 = loadImage("/vc/docs/sketches/firebreathing.jpg"); 
}

function setup() {
    createCanvas(1400, 3400);
    copy1.resize(200,160)
    copy1.copy(yuvGrayscale(copy1),0,0,copy1.width,copy1.height,0,0,copy1.width,copy1.height);
    image(copy1,0,40,700,516);
    highContrastText("Original (YUV Grayscale) 200 x 160",30,10,30);
    toASCII26(copy1,3.6,710,40);
    highContrastText("ASCII Art Using 26 characters",30,720,30);
    toASCII26(copy1,7.5,0,600);
    highContrastText("Original (YUV Grayscale) 200 x 160",30,10,1730);
    image(copy1,0,1740,700,516);
    highContrastText("ASCII Art Using 52 characters",30,720,1730);
    toASCII52(copy1,3.6,710,1740);
    toASCII52(copy1,7.5,0,2300);
}

function draw() {

}

function highContrastText(content, size, posX, posY){
    fill(0);
    textSize(size);
    textFont("monospace");
    textStyle(BOLD)
    text(content,posX,posY);
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

// Opacity information taken from https://observablehq.com/@grantcuster/sort-font-characters-by-percent-of-black-pixels
function getSimilarChar26(number){
  let ordered = "@$M%HKmd5Xah1ytnziLv+\":\'-." //26 ASCII elements, ordered by opacity
  return ordered.substr(Math.floor(number/10),1) //Returns the corresponding string character for determined opacity of the pixel
}

function toASCII26(imag, size, initialX , initialY){
  for(let i = 0; i < imag.width; i++) {
    for(let j = 0; j < imag.height; j++) {
      highContrastText(getSimilarChar26(red(imag.get(i, j))),size,0.9*size*i + initialX,0.9*size*j + initialY); //Since the image is already gray, all rgb channels have the same value, we can pick any value
    }
  }
}

// Opacity information taken from https://observablehq.com/@grantcuster/sort-font-characters-by-percent-of-black-pixels
function getSimilarChar52(number){
  let ordered = "@g$WBMR%OHGKSmUdq56X3ahVk1{yt7}nzr]ixLv=<+/\"!;:,\'´-." //52 ASCII elements, ordered by opacity
  return ordered.substr(Math.floor(number/5),1) //Returns the corresponding string character for determined opacity of the pixel
}

function toASCII52(imag, size, initialX , initialY){
  for(let i = 0; i < imag.width; i++) {
    for(let j = 0; j < imag.height; j++) {
      highContrastText(getSimilarChar52(red(imag.get(i, j))),size,0.9*size*i + initialX,0.9*size*j + initialY); //Since the image is already gray, all rgb channels have the same value, we can pick any value
    }
  }
}
