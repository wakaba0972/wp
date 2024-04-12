let stat = false;

function toggle(){
    let sidebar = document.querySelector("#side");
    if(!stat){
        sidebar.style.width = "150pt";
        for(e of document.getElementsByClassName("cat")){
            e.classList.toggle("invisible");
            e.classList.toggle("visible");
        }
        stat = true;
    }
    else{
        sidebar.style.width = "50pt";
        for(e of document.getElementsByClassName("cat")){
            e.classList.toggle("invisible");
            e.classList.toggle("visible");
        }
        stat = false;
    }
}

