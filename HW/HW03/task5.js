// 寫一個函數做向量相加 vectorAdd(a,b)

// required array as argument
function vectorAdd(a, b){
    c = []

    for(let i=0; i<Math.max(a.length, b.length); i++){
        if(!a[i]) a[i] = 0;
        if(!b[i]) b[i] = 0;

        c[i] = a[i] + b[i];
    }

    return c;
}