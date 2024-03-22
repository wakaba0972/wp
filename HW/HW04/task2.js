// 請寫一個 array_min(a) 函數傳回陣列 a 裡最小的那個數字

function array_min(a){
    let res = Infinity;
    for(let i of a){
        res = (res > i)? i: res;
    }

    return res;
}