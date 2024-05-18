// https://wakaba0972.github.io/wp/HW/HW10/index.html

let debug = document.getElementById("debug")
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
            res = fix_markdown(res); //修正markdown格式
            res = md.render(res); //轉換markdown

            debug.innerHTML = res;
            dfs_fix_latex(); // 修正latex的$$格式問題
            //response.innerHTML = debug.innerHTML;
            
            let pos = 0;
            let end = debug.innerHTML.length;

            // 文字動畫
            timer = setInterval(() => {
                if(pos >= end) {
                    clearInterval(timer);
                    return;
                }
                response.innerHTML = debug.innerHTML.substring(0, pos += 3);
                response.scrollTo(0, response.scrollHeight);
            }, 5);


        })
    }
});

// 解決latex格式錯誤
function dfs_fix_latex(node = debug){
    for(let child of node.childNodes){ //遍歷子節點

        if(child.nodeName == "CODE" || child.nodeName == "PRE") continue; // 不更動code和pre裡面的latex

        if(child.nodeName == "#text" && child.textContent.includes("$$")){ //尋找text node
            let s = child.textContent; // 獲取text
            s = s.replaceAll("$$", "\n$$$\n") //解決latex block不顯示
            s = md.render(s); // text轉markdown

            let new_node = document.createElement("p") // 建立new_node
            new_node.style = "display: inline-block";
            new_node.innerHTML = s; // 將markdown放進new_node裡

            child.replaceWith(new_node) // 將child替換成new_node
            continue;
        }

        dfs_fix_latex(child);
    }
}


// 修正markdown格式
function fix_markdown(s){
    s = s.replaceAll("：**", "**:") //解決bold和colon不相容
    return s;
}

// 測試用
function test(s){
    let r = md.render(s);
    response.innerHTML = r;
}
