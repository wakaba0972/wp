// 寫一個函數 gcd(a,b) 傳回 a, b 兩數字的最大公因數。

function gcd(a, b){
    return !b? a: gcd(b, a%b);
}