var menu = document.querySelector(".nav1 h1");
// var left = document.querySelector(".f-left");
// var right = document.querySelector(".f-right");
var full = document.querySelector(".full");
var flag = 0;

menu.addEventListener("click" ,function(){
    if(flag == 0){
     
        full.style.top = 0;
        menu.innerHTML = `<i class="ri-close-fill"></i>`
        menu.style.color = "black";
        flag = 1;
    }else{
        
        full.style.top = "-100%";
        menu.style.color = "white";
        menu.innerHTML = `<i class="ri-menu-fill"></i>`;
        flag = 0;
    }
})

// ====================Gsap================================
gsap.from(".nav2",{
    x:10,
    opacity :0,
    duration :1,
    delay : 1,
})
gsap.from(".p1-center",{
    x:10,
    opacity :0,
    duration :1,
    delay : 1,
})
gsap.from(".p2-left",{
    x:10,
    opacity :0,
    duration :1,
    delay : 1,
    scrollTrigger :{
        trigger : ".p2-left",
        scroller : "body",
        // markers : true,
        start : "top 70%",
        end : "top 30%",
        scrub : 4,

    }
})
gsap.from(".p2-right",{
    x:10,
    opacity :0,
    duration :1,
    delay : 1,
    scrollTrigger :{
        trigger : ".p2-left",
        scroller : "body",
        // markers : true,
        start : "top 70%",
        end : "top 30%",
        scrub : 4,


    }
})
gsap.from(".p3-left",{
    x:10,
    opacity :0,
    duration :1,
    delay : 1,
    scrollTrigger :{
        trigger : ".p3-left",
        scroller : "body",
        // markers : true,
        start : "top 60%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p3-right",{
    x:10,
    opacity :0,
    duration :1,
    delay : 1,
    scrollTrigger :{
        trigger : ".p3-right",
        scroller : "body",
        // markers : true,
        start : "top 60%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p4-top",{
    x:10,
    opacity :0,
    duration :1,
    delay : 1,
    scrollTrigger :{
        trigger : ".p4-top",
        scroller : "body",
        // markers : true,
        start : "top 60%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p4-bottom",{
    x:10,
    opacity :0,
    duration :1,
    delay : 1,
    scrollTrigger :{
        trigger : ".p4-bottom",
        scroller : "body",
        // markers : true,
        start : "top 60%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p5-top",{
    x:-100,
    opacity :0,
    duration :1,
    delay : 1,
    scrollTrigger :{
        trigger : ".p5-top",
        scroller : "body",
        // markers : true,
        start : "top 60%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p5-bottom",{
    x:10,
    opacity :0,
    duration :1,
    delay : 1,
    scrollTrigger :{
        trigger : ".p5-bottom",
        scroller : "body",
        // markers : true,
        start : "top 60%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p6t-top",{
    y:-100,
    opacity :0,
    duration :1,
    delay : 1,
    scrollTrigger :{
        trigger : ".p6t-top",
        scroller : "body",
        // markers : true,
        start : "top 60%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p6t-bottom p",{
    y:-100,
    opacity :0,
    duration :1,
    delay : 1,
    scrollTrigger :{
        trigger : ".p6t-bottom p",
        scroller : "body",
        // markers : true,
        start : "top 60%",
        end : "top 30%",
        scrub : 4,
    }
})

gsap.from(".p6t-bottom span",{
    y:-100,
    opacity :0,
    duration :1,
    delay : 1,
    scrollTrigger :{
        trigger : ".p6t-bottom span",
        scroller : "body",
        // markers : true,
        start : "top 60%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p6-bottom",{
    y:10,
    opacity :0,
    duration :1,
    delay : 1,
    scrollTrigger :{
        trigger : ".p6-bottom",
        scroller : "body",
        // markers : true,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})

gsap.from(".p6b-center",{
    x :-100,
    opacity :0,
    duration :1,
    delay : 1,
    scrollTrigger :{
        trigger : ".p6b-center",
        scroller : "body",
        // markers : true,
        start : "top 60%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p7-left img",{
    X:-100,
    opacity :0,
    duration :1,
    delay : 1,
    scrollTrigger :{
        trigger : ".p7-left img",
        scroller : "body",
        // markers : true,
        start : "top 60%",
        end : "top 30%",
        scrub : 4,
    }
})

gsap.from(".p7r-content",{
    y:100,
    opacity :0,
    duration :1,
    delay : 1,
    scrollTrigger :{
        trigger : ".p7r-content",
        scroller : "body",
        // markers : true,
        start : "top 60%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p8-top .box",{
    x:100,
    opacity :0,
    duration :1,
    delay : 1,
    stagger :0.4,
    scrollTrigger :{
        trigger : ".p8-top .box",
        scroller : "body",
        // markers : true,
        start : "top 60%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from("#anchore a",{
    x:100,
    opacity :0,
    duration :1,
    delay : 1,
    stagger :0.1,
    scrollTrigger :{
        trigger : "#anchore a",
        scroller : "body",
        // markers : true,
        start : "top 100%",
        end : "top 50%",
        scrub : 4,
    }
})

gsap.from("#name h4",{
    x:100,
    opacity :0,
    duration :1,
    delay : 1,
    stagger :0.1,
    scrollTrigger :{
        trigger : "#name h4",
        scroller : "body",
        // markers : true,
        start : "top 100%",
        end : "top 50%",
        scrub : 4,
    }
})
gsap.from("#name span h3",{
    x:100,
    opacity :0,
    duration :1,
    delay : 1,
    stagger :0.1,
    scrollTrigger :{
        trigger : "#name span h3",
        scroller : "body",
        // markers : true,
        start : "top 100%",
        end : "top 50%",
        scrub : 4,
    }
})















