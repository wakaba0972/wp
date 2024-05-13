const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

//格子大小
let SQUARE_WIDTH = 25;
let ROWS = Math.floor(HEIGHT / SQUARE_WIDTH);
let COLS = Math.floor(WIDTH / SQUARE_WIDTH);

let cvs = document.getElementById("cvs");
let ctx = cvs.getContext('2d');
let isClick = false;
let isPause = false;

//設定的div
let configuration = document.getElementById('setting');

//周圍8格有多少活/死細胞時改變狀態。
let survives_config = [0, 0, 1, 1, 0, 0, 0, 0, 0];
let born_config = [0, 0, 0, 1, 0, 0, 0, 0, 0];

//規則
let rules = [
    [[0, 0, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0]],
    [[0, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0]],
    [[0, 0, 0, 0, 1, 1, 1, 1, 0], [0, 0, 0, 1, 1, 1, 0, 0, 0]],
    [[0, 1, 0, 1, 0, 1, 0, 1, 0], [0, 1, 0, 1, 0, 1, 0, 1, 0]],
    [[0, 0, 0, 0, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 1, 1, 1, 1]],
]

//用於顯示的2d array
var mp = new Array(ROWS);
for(let i=0; i<=ROWS; i++) {
    mp[i] = new Array(COLS);
    for(let j=0; j<=COLS; j++) mp[i][j] = 0;
}

//下一禎的2d array
var next = new Array(ROWS);
for(let i=0; i<=ROWS; i++) {
    next[i] = new Array(COLS);
    for(let j=0; j<=COLS; j++) next[i][j] = 0;
}

function init() {
    cvs.width = WIDTH;
    cvs.height = HEIGHT;

    //點亮一個細胞
    cvs.onmousedown = function(e) {
        isClick = true;
        let d = xy2rc(e.clientX, e.clientY);
        next[d[0]][d[1]] = true;
        mp[d[0]][d[1]] = true;
    }

    cvs.onmouseup = function(e) {
        isClick = false;
    }

    //拖曳時點亮細胞
    cvs.onmousemove = function(e) {
        if(isClick) {
            let d = xy2rc(e.clientX, e.clientY);
            next[d[0]][d[1]] = true;
            mp[d[0]][d[1]] = true;
        }
    }

    //鍵盤事件
    document.onkeydown = function(e){
        switch (e.key){

            //暫停/開始
            case "Enter":
                if(isPause) {
                    timer = setInterval(loop, 100);
                }
                else {
                    clearTimeout(timer);
                }
                isPause = !isPause;
                break;

            //清除畫面
            case "Backspace":
                for(let i=0; i<=ROWS; i++) {
                    for(let j=0; j<=COLS; j++) {
                        mp[i][j] = next[i][j] = false;
                    }
                }
                break;

            //設定
            case "Escape":
                if(configuration.style.visibility == "hidden" || configuration.style.visibility == "") configuration.style.visibility = "visible";
                else configuration.style.visibility = "hidden";
                break;

            //隨機
            case "r":
                random();
                break;

            default:
                break;
        }
    }

    render();
}

//x, y座標換算成r, c
function xy2rc(x, y){
    let r = Math.floor(y / SQUARE_WIDTH);
    let c = Math.floor(x / SQUARE_WIDTH);
    return [r, c];
}

// 畫格子
function draw(r, c, v){
    if(v) ctx.fillStyle = 'white';
    else ctx.fillStyle = 'black';
    ctx.fillRect(c*SQUARE_WIDTH+1, r*SQUARE_WIDTH+1, SQUARE_WIDTH-2, SQUARE_WIDTH-2);
}

function random(){
    for(let i=0; i<=ROWS; i++){
        for(let j=0; j<=COLS; j++){
            mp[i][j] = next[i][j] = Math.floor(Math.random() * 10 + 1) % 2;
        }
    }
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

// 主迴圈
function loop(){

    // 生命遊戲的主邏輯，計算當前細胞周圍8格的活細胞數
    for(let i=0; i<=ROWS; i++){
        for(let j=0; j<=COLS; j++){

            let alive = 0;

            for(let k=i-1; k<=i+1; k++){
                for(let w=j-1; w<=j+1; w++){
                    if(i==k && j==w) continue;
                    alive += mp[(k + ROWS) % ROWS][(w + COLS) % COLS]; //超出邊界時計算另一端的位置
                }
            }

            // 依照規則計算下一禎
            if(mp[i][j]){
                next[i][j] = survives_config[alive];
            }
            else{
                next[i][j] = born_config[alive];
            }
        }
    }
    
    for(let i=0; i<=ROWS; i++){
        for(let j=0; j<=COLS; j++){
            mp[i][j] = next[i][j];
            //next[i][j] = false;
        }
    }
    
}

// 改變規則
function config_enter(){
    let inputs = document.getElementsByTagName("input");
    for(let i=0 ;i<=8; i++){
        survives_config[i] = inputs[i+1].checked;
        born_config[i] = inputs[i+10].checked;
    }
}

function select_chnage(){
    let rule = parseInt(document.getElementsByTagName("select")[0].value);
    let inputs = document.getElementsByTagName("input");
    for(let i=0 ;i<=8; i++){
        inputs[i+1].checked = rules[rule][0][i];
        inputs[i+10].checked = rules[rule][1][i];
    }
}

// 改變格子大小
function size_change(){
    SQUARE_WIDTH = document.getElementsByTagName("input")[0].value;
    ROWS = Math.floor(HEIGHT / SQUARE_WIDTH);
    COLS = Math.floor(WIDTH / SQUARE_WIDTH);

    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    mp = new Array(ROWS);
    for(let i=0; i<=ROWS; i++) {
        mp[i] = new Array(COLS);
        for(let j=0; j<=COLS; j++) mp[i][j] = false;
    }

    next = new Array(ROWS);
    for(let i=0; i<=ROWS; i++) {
        next[i] = new Array(COLS);
        for(let j=0; j<=COLS; j++) next[i][j] = false;
    }
}

init();
let timer = setInterval(loop, 100);