// 請寫一個函數 daysInYear(n) 傳回西元 n 年應該有幾天

function daysInYear(n) {
    if(n % 4) return 365;
    if(n % 100) return 366;
    if(n % 400) return 365;
    else return 366;
    
}