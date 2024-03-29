let timer = null;
let t;

let width = 100;
let height = 100;
let btn = document.getElementById('btn');


function ease(x) {
    return 1 - Math.sqrt(1 - Math.pow(x, 2));
}

function scale(){
    t += 0.02;

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