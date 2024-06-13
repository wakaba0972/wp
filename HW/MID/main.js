let cvs = document.getElementById("cvs");
let ctx = cvs.getContext('2d');

// 網格佔85% 側欄15%
const WIDTH = window.innerWidth * 0.85;
const HEIGHT = window.innerHeight;

// 設定格子大小
const SQUARE_WIDTH = 28;
const ROWS = Math.floor(HEIGHT / SQUARE_WIDTH);
const COLS = Math.floor(WIDTH / SQUARE_WIDTH);

// 滑鼠狀態 
var isClick = false;

// 設定的格子模式 0路障 1起點 2終點 3巷皮擦
var mouseMode = 0;

var start_r = null;
var start_c = null;
var destination_r = null;
var destination_c = null;

function setMouseMode(m){
    mouseMode = m;
}

// 初始化mp
var mp = new Array(ROWS);
for(let i=0; i<=ROWS; i++) {
    mp[i] = new Array(COLS);
    for(let j=0; j<=COLS; j++) mp[i][j] = 3;
}

function gcd(x, y){
    return y? gcd(y, x%y): x;
}

// xy rc換算
function xy2rc(x, y){
    let r = Math.floor(y / SQUARE_WIDTH);
    let c = Math.floor(x / SQUARE_WIDTH);
    return [r, c];
}

// 畫格子
function draw(r, c, v){
    if(v == 0) ctx.fillStyle = 'gray';
    else if(v == 1) ctx.fillStyle = '#66FF99';
    else if(v == 2) ctx.fillStyle = 'red';
    else if(v == 3) ctx.fillStyle = 'white';
    ctx.fillRect(c*SQUARE_WIDTH+1, r*SQUARE_WIDTH+1, SQUARE_WIDTH-2, SQUARE_WIDTH-2);
}

// 渲染畫面
function render() {
    for(let i=0; i<=ROWS; i++){
        for(let j=0; j<=COLS; j++){
            draw(i, j, mp[i][j]);
        }
    }

    requestAnimationFrame(render);
}

function setColor(d){
    if(mouseMode == 1){
        if(start_r == null || mp[start_r][start_c] != mouseMode){
            start_r = d[0];
            start_c = d[1];
            mp[d[0]][d[1]] = mouseMode;
        }
        else {
            mp[start_r][start_c] = 3;
            mp[d[0]][d[1]] = mouseMode;
            start_r = d[0];
            start_c = d[1];
        }
    }
    else if(mouseMode == 2){
        if(destination_r == null || mp[destination_r][destination_c] != mouseMode){
            destination_r = d[0];
            destination_c = d[1];
            mp[d[0]][d[1]] = mouseMode;
        }
        else {
            mp[destination_r][destination_c] = 3;
            mp[d[0]][d[1]] = mouseMode;
            destination_r = d[0];
            destination_c = d[1];
        }
    }
    else mp[d[0]][d[1]] = mouseMode
}

// 遊戲初始化
function init(){
    cvs.width = WIDTH;
    cvs.height = HEIGHT;

    cvs.onmousedown = function(e) {
        isClick = true;
        let d = xy2rc(e.clientX, e.clientY);
        setColor(d);
    }

    cvs.onmouseup = function(e) {
        isClick = false;
    }

    cvs.onmousemove = function(e) {
        if(isClick) {
            let d = xy2rc(e.clientX, e.clientY);
            setColor(d);
        }
    }

    render();
}

init()