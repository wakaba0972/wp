// 寫一個函數做矩陣相乘 matrixMul(a,b)

////required array as parameter
function matrixMul(a, b) {
    var nums = a[0].length;
    var row = a.length;
    var col = b[0].length;

    res = new Array(a.length);

    for(let i=0; i<row; i++){
        res[i] = [];
        for(let j=0; j<col; j++){
            res[i][j] = 0;
            for(let k=0; k<nums; k++){
                res[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    return res;
}