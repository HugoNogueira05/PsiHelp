let pScroll2 = document.getElementById(`texto2`)
let pScroll = document.getElementById(`texto1`)

window.addEventListener("scroll" , function(){
let navItems  = document.getElementById("navItems");
navItems.classList.toggle("scrolled", window.scrollY > 0);
pScroll.classList.toggle("tScrolled", window.scrollY > 0);
pScroll2.classList.toggle("tScrolled", window.scrollY > 0);
});

pScroll2.addEventListener("mouseover" , function(){
document.getElementById("slider-container").style.visibility = "visible"
document.getElementById("slider-container").style.transform = "translateY(10vh)";
})
// if(pScroll2.addEventListener("mouseover" == true)){
//     document.getElementById("slider-container").style.visibility = "visible"
//     document.getElementById("slider-container").style.transform = "translateY(10vh)"
// }
// else{
//     document.getElementById("slider-container").style.visibility = "colappse"
//     document.getElementById("slider-container").style.transform = "translateY(4vh)";
// }
    pScroll2.addEventListener("mouseleave" , function() {
    document.getElementById("slider-container").style.visibility = "colappse"
    document.getElementById("slider-container").style.transform = "translateY(4vh)"})
