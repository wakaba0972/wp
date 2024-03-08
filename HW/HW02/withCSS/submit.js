let map0 = new Map([
    [0, 'name'],
    [1, 'sex'],
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