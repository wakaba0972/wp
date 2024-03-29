// 普通按鈕數量和reset按鈕數量
const NUM = 8
const RNUM = 5

// balls儲存button_ball, rest紀錄未被click的按鈕數量
let balls;
let rest;

let title = document.getElementById("title")
let countdown = document.getElementById("countdown")

let timer1 = new Timer()

function init(){
    rest = NUM;
    title.innerText = "點擊所有Don't Click ME按鈕!"
    countdown.innerText = ""

    timer1.start()

    balls = new Array()
    for(let i=0; i<NUM; i++) balls.push(new Normal_Button_Ball(i))
    for(let i=0; i<RNUM; i++) balls.push(new Reset_Button_Ball(i))

    requestAnimationFrame(update)
}

function reset(is_failed){
    timer1.end()

    if(is_failed) title.innerText = "你輸了!"
    else title.innerText = "你贏了! 你花了" + timer1.output() + "秒"

    for(let e of balls) e.node.remove();
    while(balls.length) balls.pop();

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

function update(){
    for(let i=0; i<NUM+RNUM; i++){
        for(let j=0; j<NUM+RNUM; j++){
            if(isCollision(balls[i], balls[j])) bounce(balls[i], balls[j]);
        }
    }
    for(b of balls) b.move()

    if(!rest) {
        reset(false);
        return
    }

    requestAnimationFrame(update)
}

init()