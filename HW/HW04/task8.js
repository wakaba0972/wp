// 請寫一個函數 gradient(f, p) 可以計算 f 在 p 點的梯度

const h = 0.0001;

function f(p){
    return 3 * p[0] ** 2 + p[1];
}

//p[0]為x p[1]為y 以此類推
//若k=0 則是對x微分
function df(f, p, k){
    let p1 = Array.from(p);
    p1[k] += h;
    return (f(p1) - f(p)) / h
}

//計算偏微分, 放進ps裡回傳
function grad(f, p){
    let ps = Array.from(p);
    for(let i = 0; i<p.length; i++){
        ps[i] = df(f, p, i)
    }

    return ps;
}