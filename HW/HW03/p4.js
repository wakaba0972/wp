// 印出所有小於 n 的質數總和 sumPrime(n)

function Prime(n){
    var table = [];
    var primes = [];
    for(let i=0; i<=n; i++) table[i] = true;

    table[0] = table[1] = false;
    for(let i=2; i<=Math.sqrt(n); i++) {
        if(table[i]){
            for(let j=i<<1; j<=n; j+=i) table[j] = false;
        }
    }

    for(let i=2; i<n; i++) if(table[i]) primes.push(i);

    return primes;
}

function sumPrime(n){
    var primes = Prime(n);
    var res = 0;

    for(let i=0; i<primes.length; i++){
        res += primes[i];
    }

    return res;
}