let toggleBtn = document.getElementById("theme-toggle");
let body = document.body;

toggleBtn.addEventListener("click", function(){
    body.classList.toggle("dark-mode");
    if(body.classList.contains("dark-mode")){
        toggleBtn.textContent="☀️";
    }
    
    else{
        toggleBtn.textContent="🌙";

    }
    
});

let links = document.querySelectorAll("a[href^='#']");
let header = document.querySelector("header");
let headerHeight = header.offsetHeight;
links.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        let targetId = this.getAttribute("href");
        let target = document.querySelector(targetId);
        if(target){
        let position = target.offsetTop - headerHeight;

        window.scrollTo({
            top: position,
            behavior: "smooth"
        })
    }
    })
});