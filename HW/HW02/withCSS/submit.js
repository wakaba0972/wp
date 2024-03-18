//建立映射，方便把表單內容印出
let map0 = new Map([
    [0, 'name'],
    [1, 'Gender'],
    [2, 'email'],
    [3, 'account'],
    [4, 'password'],
    [5, 'birthday'],
    [6, 'color'],
    [7, 'blood'],
    [8, 'phone'],
    [9, 'sub'],
    [10, 'ath'],
    [11, 'intro'],
])

//隱藏表單，並讓顯示結果的div可見，再把表單內容一一填入
function submitt(){
    let myform =  document.getElementById('myForm')
    let contents = document.getElementsByClassName('content')
    let formSection = document.getElementById('formSection')
    let aftdiv = document.getElementById('afterSubmit')

    formSection.style.display = "none"
    aftdiv.style.display = ""

    for(let i=0; i<12; i++){
        contents[i].innerHTML = myform[map0.get(i)].value;
    }
}