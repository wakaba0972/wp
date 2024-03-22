// 請寫一個函數 weekday(str) 可以把星期幾的英文轉換成數字（0,1,2,3,4,5,6) (Sunday 是 0)

function weekday(str){
    mp = new Map([
        ["Monday", 1],
        ["Tuesday", 2],
        ["Wednesday", 3],
        ["Thursday", 4],
        ["Friday", 5],
        ["Saturday", 6],
        ["Sunday", 0],
    ])

    return mp.get(str);
}