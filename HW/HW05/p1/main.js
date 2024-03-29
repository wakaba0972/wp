const INTERVAL = 0.01

let timer = null;
let t;

let width = 100;
let height = 100;
let btn = document.getElementById('btn');

// Easing Function 讓動畫有動態感，取x=0~1來使用
function ease(x) {
    return 1 - Math.sqrt(1 - Math.pow(x, 2));
}

// 放大按鈕
// 用setinterval 每10ms對width和height增加10*ease(t)
function scale(){
    t += 0.01;

    if(t >= 1) {
        clearInterval(timer);
        timer = null;
        t = 0;
        return;
    }

    let new_v = 10 * ease(t);

    width += new_v;
    height += new_v;
    btn.style.width = width;
    btn.style.height = height;
}

function foo(){
    t = 0;
    if(timer == null) timer = setInterval('scale()', 10);
}