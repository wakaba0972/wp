// 請寫一個 filter(a, f) 函數可以根據 f 成功或失敗過濾掉那些不合的內容

function filter(a, f){
    res = [];
    for(let i of a){
        if(f(i)) res.push(i);
    }

    return res;
}