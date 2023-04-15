let curve = document.querySelector(".custom-shape-divider-top-1678994630");
window.addEventListener("scroll",(e)=>{
    let revealPoint = 150;
    let windowheight = window.innerHeight;
    let curveTop = curve.getBoundingClientRect().top;
    if(curveTop<windowheight-revealPoint){
        curve.classList.add("active");
    }else{
        curve.classList.remove("active");
    }
});
// ##############################################################################
let moving = document.querySelectorAll(".mov");
window.addEventListener("scroll",(e)=>{
    let revealPoint = 100;
    let windowheight = window.innerHeight;
    moving.forEach(function(element){
        let elementTop = element.getBoundingClientRect().top;
        if(elementTop<windowheight-revealPoint){
            element.classList.add("active2");
        }else{
            element.classList.remove("active2");
        }
    });
});
// #########################################################################################

