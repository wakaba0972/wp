// 請寫一個函數 gradient(f, p) 可以計算 f 在 p 點的梯度

const h = 0.0001;

function f(p){
    return 3 * p[0] ** 2 + 5 * p[1] * p[2];
}

//p[0]為x p[1]為y....
//若dim=0 則是對x微分 以此類推
//copy p到p1, p1[dim]+=h才不會動到p的值
function df(f, p, dim){
    let p1 = Array.from(p);
    p1[dim] += h;
    return (f(p1) - f(p)) / h
}

//對每個維度微分, 放進ps裡回傳
function grad(f, p){
    let ps = Array.from(p);
    for(let dim = 0; dim<p.length; dim++){
        ps[dim] = df(f, p, dim)
    }

    return ps;
}

console.log(grad(f, [4,5,6]));