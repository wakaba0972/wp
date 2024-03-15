// 寫一個函數做矩陣相加 matrixAdd(a,b)

// require array as argument
function vectorAdd(a, b){
    var c = [];
    for(let i=0; i<a.length; i++) c[i] = a[i] + b[i];

    return c;
}

// require array as argument
function matrixAdd(a, b){
    var res = Array.from(a);

    for(let i=0; i<a.length; i++) res[i] = vectorAdd(a[i], b[i]);

    return res;
}