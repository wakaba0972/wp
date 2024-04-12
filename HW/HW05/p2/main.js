
// 也是Easing Function, 取值x=0~1
function ease(x) {
    const n1 = 7.5625;
    const d1 = 2.75;

    if (x < 1 / d1) {
        return n1 * x * x;
    } else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
        return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
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
    
    let shift = 100 * ease(t);

    // 碰到邊界就改變方向
    if(ori_pos + a * shift > window.innerWidth - width && !dir || ori_pos + a * shift < left && dir) {
        dir = !dir;
        a *= -1

        if(dir) ori_pos = window.innerWidth
        else ori_pos = left
    }

    btn.style.left = ori_pos + a * shift;
}

function foo(){
    t = 0;
    ori_pos = Number(btn.style.left.slice(0, -2));
    if(timer == null) timer = setInterval('move()', 10);
}

let a=1
let timer = null;
let t;
let dir = 0;
let ori_pos

let left = 200;
let width = 100;
let height = 100;
let btn = document.getElementById('btn');

btn.style.left = left;
