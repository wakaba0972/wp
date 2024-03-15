// 寫一個函數判斷 n 是否為質數 isPrime(n)

function isPrime(n){
    var table = [];
    for(let i=0; i<=n; i++) table[i] = true;

    table[0] = table[1] = false;
    for(let i=2; i<=Math.sqrt(n); i++) {
        if(table[i]){
            for(let j=i * 2; j<=n; j+=i) table[j] = false;
        }
    }

    return table[n];
}