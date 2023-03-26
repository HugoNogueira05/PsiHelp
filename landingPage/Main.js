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

const observer2 =  new IntersectionObserver((entries2) => {
    entries2.forEach((entry2) => {
        if(entry2.isIntersecting){
            entry2.target.classList.add('show2')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

const hiddenElements2 = document.querySelectorAll('.hidden2')
hiddenElements2.forEach((el2)=> observer2.observe(el2))

const burger = document.getElementById('burger')
burger.addEventListener("click" ,  function()
{
    if(document.querySelector('.navMobile').style.transform == "translateX(0px) scale(1)"){
    document.querySelector('.navMobile').style.transform = "translateX(100%) scale(0)"
    console.log("não funciona")
}
    else{
        document.querySelector('.navMobile').style.display = "inline"
        document.querySelector('.navMobile').style.transform = "translateX(0) scale(1)"
        console.log("funciona")
    }
})
