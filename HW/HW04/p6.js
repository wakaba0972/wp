// 寫一個函數 gcd(a,b) 傳回 a, b 兩數字的最大公因數。

//輾轉相除
function gcd(a, b){
    return !b? a: gcd(b, a%b);
}

console.log(gcd(33, 99))