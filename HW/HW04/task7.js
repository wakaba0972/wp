// 寫一個函數 lcm(a,b) 傳回 a, b 兩數字的最小公倍數。

function gcd(a, b){
    return !b? a: gcd(b, a%b);
}

function lcm(a, b){
    return a*b/gcd(a, b);
}