let stat = false;

function toggle(){
    let sidebar = document.querySelector("#side");
    if(!stat){
        sidebar.style.width = "150pt";

        //sidebar拉出來 讓cat可見
        for(e of document.getElementsByClassName("cat")){
            e.classList.toggle("invisible");
            e.classList.toggle("visible");
        }
        stat = true;
    }
    else{
        sidebar.style.width = "50pt";

        //sidebar推回去 讓cat不可見
        for(e of document.getElementsByClassName("cat")){
            e.classList.toggle("invisible");
            e.classList.toggle("visible");
        }
        stat = false;
    }
}

//iframe重新導向
function update(url){
    let frame = document.querySelector('iframe');
    frame.src = url;
}