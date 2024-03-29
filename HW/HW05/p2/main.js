
// 也是ease function, 取值x=0~1
function ease(x) {
    return x * x * x * x * x;
}

// 按鈕移動
function move(){
    t += 0.01

    if(t >= 1) {
        clearInterval(timer);
        timer = null;
        t = 0;
        return;
    }
    
    let ori_v = Number(btn.style.left.slice(0, -2));
    let new_v = 50 * ease(t);

    // 碰到邊界就改變方向
    if(ori_v + a * new_v > window.innerWidth - width && !dir || ori_v + a * new_v < 0 && dir) {
        dir = !dir;
        a *= -1
    }

    btn.style.left = Number(btn.style.left.slice(0, -2)) + a * new_v;
}

function foo(){
    t = 0;
    if(timer == null) timer = setInterval('move()', 10);
}

let a=1
let timer = null;
let t;
let dir = 0;

let width = 100;
let height = 100;
let btn = document.getElementById('btn');
