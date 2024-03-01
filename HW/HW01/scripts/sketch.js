const PARRENTID = "bg"
const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const SPEED = 0.01

var scl = 50;
var cols, rows;
var yoff, xoff;
var flying = 0;
var terrain;

function setup() {
    createCanvas(WIDTH, HEIGHT, WEBGL).parent(PARRENTID); // 設置父節點 id

    cols = Math.ceil(WIDTH / scl);
    rows = Math.ceil(HEIGHT / scl);

    terrain = new Array(cols);
    for(let i = 0; i < cols; i++) terrain[i] = new Array(rows);
}

function draw() {
    background(0);
    stroke(255);
    noFill();
  
    yoff = flying;
    for (let y = 0; y < rows; y++) {
      xoff = 0;
      for (let x = 0; x < cols; x++) {
        terrain[x][y] = map(noise(xoff, yoff), 0, 1, -250, 250);
        xoff += 0.15;
      }
      yoff += 0.15;
    }
    flying -= SPEED;
  
    rotateX(PI/3);
    translate(-WIDTH / 2, -HEIGHT / 2);
  
    for (let y = 0; y < rows-1; y++) {
      beginShape(TRIANGLE_STRIP);
      for (let x = 0; x < cols; x++) {
        vertex(x*scl, y*scl, terrain[x][y]);
        vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
      }
      endShape();
    }
}