// 寫一個函數 lcm(a,b) 傳回 a, b 兩數字的最小公倍數。

//輾轉相除
function gcd(a, b){
    return !b? a: gcd(b, a%b);
}

//lcm = a*b/gcd(a,b)
function lcm(a, b){
    return a*b / gcd(a, b);
}

console.log(lcm(3, 13))