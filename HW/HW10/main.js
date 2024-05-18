// https://wakaba0972.github.io/wp/HW/HW10/index.html

let input = document.getElementById("input");
let response = document.getElementById("response");
let timer;

input.addEventListener('keydown', function (e){
    if(e.key == "Enter"){
        //取消enter換行
        e.preventDefault();

        // init
        clearInterval(timer);
        let text = input.value;
        response.innerHTML = "";
        input.value = "";
        
        chat(text).then(res => {
            res = res.replaceAll("：**", "**:") //解決bold和colon不相容
            res = md.render(res); //轉換markdown

            let pos = 0;
            let end = res.length;
            
            // 文字動畫
            timer = setInterval(() => {
                if(pos >= end) {
                    clearInterval(timer);
                    return;
                }
                response.innerHTML = res.substring(0, pos += 1);
            }, 1);

        })
    }
});
