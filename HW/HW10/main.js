// https://wakaba0972.github.io/wp/HW/HW10/index.html

let input = document.getElementById("input");
let response = document.getElementById("response");
let timer;

input.addEventListener('keydown', function (e){
    if(e.key == "Enter"){
        //取消enter換行
        e.preventDefault();

        // init
        //let text = '將"' + input.value + '"翻譯成通順的英文，不要講任何多餘的話';
        let text = input.value;
        clearInterval(timer);
        response.innerHTML = "";
        input.value = "";
        
        chat(text).then(res => {

            res = md.render(res);
            //response.innerHTML = res;

            let pos = 0;
            let end = res.length;
            
            timer = setInterval(() => {
                if(pos >= end) {
                    clearInterval(timer);
                    return;
                }
                response.innerHTML = res.substring(0, pos += 3);
            }, 5);

        })
    }
});

//chat(PROMPT);
