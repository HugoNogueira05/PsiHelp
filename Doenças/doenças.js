//efeito mobile
const burger = document.getElementById('burger')
burger.addEventListener("click" ,  function()
{
    if(document.querySelector('.navMobile').style.transform == "translateX(0px) scale(1)"){
    document.querySelector('.navMobile').style.transform = "translateX(100%) scale(0)"
}
    else{
        document.querySelector('.navMobile').style.display = "inline"
        document.querySelector('.navMobile').style.transform = "translateX(0) scale(1)"
    }
})
//efeito de aparecer
const observer =  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        // else{
        //     entry.target.classList.remove('show') --> se quiser q apareça a animação sempre q sai da tela
        // }
    })
})
const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))