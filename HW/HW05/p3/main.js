// Don't Click ME按鈕數量和Click ME按鈕數量
const NUM = 8
const RNUM = 5

// balls儲存button_ball, rest紀錄未被click的按鈕數量
let balls;
let rest;

let title = document.getElementById("title")
let countdown = document.getElementById("countdown")

//宣告計時器
let timer1 = new Timer()

function init(){
    rest = NUM;
    title.innerText = "點擊所有Don't Click ME按鈕!"
    countdown.innerText = ""

    // 開始計時
    timer1.start()

    // 宣告眾button們
    balls = new Array()
    for(let i=0; i<NUM; i++) balls.push(new Normal_Button_Ball(i))
    for(let i=0; i<RNUM; i++) balls.push(new Reset_Button_Ball(i))

    // 進入requestAnimationFrame 每禎執行update()
    requestAnimationFrame(update)
}

// 遊戲結束時的函數
function reset(is_failed){
    // 中止計時
    timer1.end()

    if(is_failed) title.innerText = "你輸了!"
    else title.innerText = "你贏了! 你花了" + timer1.output() + "秒"

    // 把buttons從網頁移除，清空balls陣列
    for(let e of balls) e.node.remove();
    while(balls.length) balls.pop();

    // 重起遊戲的倒計時
    let t = 5
    var tm = window.setInterval(function() {
        if(t <= 0) {
            clearInterval(tm)
            init()

            return
        }
        
        countdown.innerText = t + "秒後重啟遊戲"
        t--

    }, 1000)

}

// 每禎執行碰撞檢測，並更新button位置
function update(){
    for(let i=0; i<NUM+RNUM; i++){
        for(let j=0; j<NUM+RNUM; j++){
            if(isCollision(balls[i], balls[j])) bounce(balls[i], balls[j]);
        }
    }
    for(b of balls) b.move()

    // 如果遊戲結束 就跳離requestAnimationFrame
    if(!rest) {
        reset(false);
        return
    }

    requestAnimationFrame(update)
}

// 初始化遊戲
init()