const PARRENT_ID = "bg"
const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const WIDTH_ADJ = 0
const HEIGHT_ADJ = 0
const CAM_X_ADJ = 0
const CAM_Y_ADJ = 0
const CAM_Z_ADJ = 0
const SPEED = 0.01
const SCL = 50
const MIN_HEIGHT = -200
const MAX_HEIGHT = 200

var w = WIDTH + WIDTH_ADJ;
var h = HEIGHT + HEIGHT_ADJ;
var cols, rows;
var yoff, xoff;
var flying = 0;
var terrain;

// 計算mesh的cols和rows
// terrain用來儲存每個點的高度
function setup() {
    createCanvas(WIDTH, HEIGHT, WEBGL).parent(PARRENT_ID);

    cols = Math.ceil(w / SCL);
    rows = Math.ceil(h / SCL);

    terrain = new Array(cols);
    for(let i = 0; i < cols; i++) terrain[i] = new Array(rows);
}

// 用perlin noise計算每個點的高度，並繪出
function draw() {
    background(0);
    stroke(255);
    noFill();
  
    yoff = flying;
    for (let y = 0; y < rows; y++) {
      xoff = 0;
      for (let x = 0; x < cols; x++) {
        terrain[x][y] = map(noise(xoff, yoff), 0, 1, MIN_HEIGHT, MAX_HEIGHT);
        xoff += 0.15;
      }
      yoff += 0.15;
    }
    flying -= SPEED;
  
    rotateX(PI/3);
    translate(-(w + CAM_X_ADJ) / 2, -(h + CAM_Y_ADJ) / 2, -CAM_Z_ADJ);
  
    for (let y = 0; y < rows-1; y++) {
      beginShape(TRIANGLE_STRIP);
      for (let x = 0; x < cols; x++) {
        vertex(x*SCL, y*SCL, terrain[x][y]);
        vertex(x*SCL, (y+1)*SCL, terrain[x][y+1]);
      }
      endShape();
    }
}