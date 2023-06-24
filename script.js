var menu = document.querySelector(".nav1 h1");
// var left = document.querySelector(".f-left");
// var right = document.querySelector(".f-right");
var full = document.querySelector(".full");


var flag = 0;

menu.addEventListener("click" ,function(){
    if(flag == 0){
     
        full.style.top = 0;
        menu.innerHTML = `<i class="ri-close-fill"></i>`
        flag = 1;
    }else{
        
        full.style.top = "-100%";

        menu.innerHTML = `<i class="ri-menu-fill"></i>`;
        flag = 0;
    }
})




