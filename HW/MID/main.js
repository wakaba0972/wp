let cvs = document.getElementById("cvs");
let ctx = cvs.getContext('2d');
let modeselect = document.getElementsByName('modeselect');

// 網格佔85% 側欄15%
const WIDTH = window.innerWidth * 0.85;
const HEIGHT = window.innerHeight;

// 設定格子大小
const SQUARE_WIDTH = 28;
const ROWS = Math.floor(HEIGHT / SQUARE_WIDTH);
const COLS = Math.floor(WIDTH / SQUARE_WIDTH);

// 滑鼠狀態 
var isClick = false;

// 可編輯地圖
var editable = true;

// 要求重置
var reset_req = false;

// timer
var timer = null

// 設定的格子模式 0路障 1起點 2終點 3空白
var mouseMode = 0;

var start_r = null;
var start_c = null;
var destination_r = null;
var destination_c = null;

function unlock(){
    editable = true;
}

function getMode(){
    for(let i=0; i<modeselect.length; i++){
        if(modeselect[i].checked) return i;
    }
    return -1;
}

function setMouseMode(m){
    mouseMode = m;
}

// 初始化mp
var mp = new Array(ROWS);
for(let i=0; i<ROWS; i++) {
    mp[i] = new Array(COLS);
    for(let j=0; j<=COLS; j++) mp[i][j] = 3;
}

// xy rc換算
function xy2rc(x, y){
    let r = Math.floor(y / SQUARE_WIDTH);
    let c = Math.floor(x / SQUARE_WIDTH);
    return [r, c];
}

function clearAll(){
    if(timer != null) clearInterval(timer);
    for(let i=0; i<ROWS; i++){
        for(let j=0; j<=COLS; j++){
            mp[i][j] = 3;
        }
    }
    unlock();
    reset_req = false;
}

function clearTrace(){
    if(!reset_req) return;
    for(let i=0; i<ROWS; i++){
        for(let j=0; j<=COLS; j++){
            if(mp[i][j] == 4 || mp[i][j] == 5) mp[i][j] = 3;
        }
    }
    reset_req = false;
}

// 畫格子
function draw(r, c, v){
    if(v == 0) ctx.fillStyle = 'gray';
    else if(v == 1) ctx.fillStyle = '#66FF99';
    else if(v == 2) ctx.fillStyle = 'red';
    else if(v == 3) ctx.fillStyle = 'white';
    else if(v == 4) ctx.fillStyle = '#DEEFF5';
    else if(v == 5) ctx.fillStyle = 'yellow';
    ctx.fillRect(c*SQUARE_WIDTH+1, r*SQUARE_WIDTH+1, SQUARE_WIDTH-2, SQUARE_WIDTH-2);
}

// 渲染畫面
function render() {
    for(let i=0; i<ROWS; i++){
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

function start(){
    if(timer != null) clearInterval(timer);
    clearTrace();
    if(reset_req) return;
    if(start_c == null || destination_c == null) return;
    if(mp[start_r][start_c] != 1 || mp[destination_r][destination_c] != 2) return;
    editable = false;
    
    switch(getMode()){
        case 0:
            bfs();
            break;
        case 1:
            dfs();
            break;
        default:
            break;
    }
}

// 遊戲初始化
function init(){
    cvs.width = WIDTH;
    cvs.height = HEIGHT;

    cvs.onmousedown = function(e) {
        if(!editable) return;
        isClick = true;
        let d = xy2rc(e.clientX, e.clientY);
        setColor(d);
    }

    cvs.onmouseup = function(e) {
        isClick = false;
    }

    cvs.onmousemove = function(e) {
        if(isClick && editable) {
            let d = xy2rc(e.clientX, e.clientY);
            setColor(d);
        }
    }

    render();
}

init()