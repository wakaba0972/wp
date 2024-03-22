// 請寫一個函數 weekday(str) 可以把星期幾的英文轉換成數字（0,1,2,3,4,5,6) (Sunday 是 0)

function weekday(str){
    let mp = new Map([
        ["monday", 1],
        ["tuesday", 2],
        ["wednesday", 3],
        ["thursday", 4],
        ["friday", 5],
        ["saturday", 6],
        ["sunday", 0],
    ])

    //全轉小寫，方便查詢
    return mp.get(str.toLowerCase());
}

console.log(weekday("Monday"));
console.log(weekday("tUeSdAy"))