// 請寫一個 filter(a, f) 函數可以根據 f 成功或失敗過濾掉那些不合的內容

// 取奇數
function f(x){
    return x&1;
}

function filter(a, f){
    let res = [];
    for(let i of a){
        if(f(i)) res.push(i);
    }

    return res;
}

console.log(filter([1,2,3,4,5,6,7,8,9,10], f))