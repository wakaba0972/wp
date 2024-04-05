let timer = null;
let t;
let ori_length;

let btn = document.getElementById('btn');

// Easing Function 讓動畫有動態感，取x=0~1來使用
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

// 放大按鈕
// 用setinterval 每10ms對width和height的長度增加50*ease(t)
function scale(){
    t += 0.01;

    if(t > 1) {
        clearInterval(timer);
        timer = null;
        t = 0;
        return;
    }

    let new_val = 50 * ease(t);

    btn.style.width = ori_length + new_val;
    btn.style.height = ori_length + new_val;
}

function foo(){
    t = 0;
    ori_length = Number(btn.style.width.slice(0,-2));
    if(timer == null) timer = setInterval('scale()', 10);
}