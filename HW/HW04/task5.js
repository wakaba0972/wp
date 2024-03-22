// 請寫一個函數 countChar(str) 可以算出一個字串中，每個字出現幾次

function countChar(str){
    let mp = new Map();
    for(let i of str) {
        if(mp.has(i)) mp.set(i, mp.get(i) + 1);
        else mp.set(i, 1);
    }

    return mp;
}