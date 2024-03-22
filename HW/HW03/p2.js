// 印出小於 n 的所有奇數 printOdd(n)

function printOdd(n){
    var res = "";
    for(let i=1; i<n; i+=2){
        res += i + ' ';
    }

    console.log(res);
}