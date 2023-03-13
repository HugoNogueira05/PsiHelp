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

const aboutUs = 
[{p: "Somos alunos do 12ºAno da escola de Águas Santas"},
{p:"Texto qualquer sobre nós ou assim idk"},
{p:"talvez seja melhor pôr tudo aqui só"}]
let textoAtual = 0
function slider(){
    let texto = document.getElementById("AboutTexto")
    let filler = aboutUs[textoAtual]
    texto.innerText = filler.p
}
slider()
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
btn1.addEventListener("click", function(){
    if (textoAtual == 0){
        textoAtual = 2
        move()
        slider()
        setTimeout(move2, 300)
        setTimeout(transitionIn, 600)
    }
    else{
        textoAtual--
        move()
        slider()
        setTimeout(move2, 300)
        setTimeout(transitionIn, 600)
        return textoAtual
    }
})
btn2.addEventListener("click", function(){
    if (textoAtual == 2){
        textoAtual = 0
        slider()
        move2()
        transitionOut()
        setTimeout(move, 300)
        setTimeout(transitionIn, 600)
        return textoAtual
    }
    else{
        textoAtual++
        slider()
        move2()
        transitionOut()
        setTimeout(move, 300)
        setTimeout(transitionIn, 600)
        return textoAtual
    }
})
function transitionOut(){
    document.getElementById("AboutTexto").style.transform = "translateX(-50%) scale(0)"  
}
    function transitionIn() {
        document.getElementById("AboutTexto").style.transform = "translateX(0) scale(1)"
    }
    function move(){
        document.getElementById("AboutTexto").style.transform = "translateX(50%) scale(0)"
    }
    function move2(){
        document.getElementById("AboutTexto").style.transform = "translateX(-50%) scale(0)"
    }
    function move3(){
        document.getElementById("AboutTexto").style.transform = "translateY(-50%) scale(0)"
    }