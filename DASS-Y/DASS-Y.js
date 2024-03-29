const quiz = document.getElementById("quiz")
const respostaEls = document.querySelectorAll(".resposta")
const p = document.getElementById ("p")
const nextBtn = document.getElementById ("next")
const resDepre = document.getElementById("resDepre")
const resAns = document.getElementById("resAns")
const resStress = document.getElementById("resStress")
const concDepre = document.getElementById("concDepre")
const concAns = document.getElementById("concAns")
const concStress = document.getElementById("concStress")
const conclusao = document.querySelector(".conclusao")  
const restart = document.getElementById("restart")

const dadosQuiz = [
    {p: "Fiquei chateado facilmente"},
    {p: "Senti-me tonto, como se fosse desmaiar"},
    {p: "Não gostei de nada" },
    {p: "Tive problemas a respirar (Por exemplo: respiração acelarada), apesar de não ter feito exercício físico e não ter estado doente"},
    {p: "Odiei a minha vida"},
    {p: "Encontrei me a reagir em demasia para certas situações"},
    {p: "Senti tremores nas mãos"},
    {p: "Senti-me stressado em relação a muitas coisas"},
    {p: "Senti-me aterrorizado"},
    {p: "Não houve nada bom que me deixasse expectante"},
    {p: "Irritei-me facilmente"},
    {p: "Tive dificuldade em relaxar"},
    {p: "Não consegui parar de me sentir triste"},
    {p: "Fiquei chateado quando alguém me interrompia"},
    {p: "Senti que ia entrar em pânico"},
    {p: "Odiei-me a mim mesmo"},
    {p: "Senti que não servia para nada"},
    {p: "Senti-me incomodado facilmente"},
    {p: "Senti o meu coração acelerado apesar de não ter feito qualquer exercício"},
    {p: "Senti-me assustado sem qualquer motivo"},
    {p: "Senti que a minha vida era terrível"},
]


let perguntaAtual = 0;
let valor = []
let resposta
let btnA = document.getElementById("a");
let btnB = document.getElementById("b");
let btnC = document.getElementById("c");
let btnD = document.getElementById("d");

function limpar(){
    resposta = ""
    document.querySelector(".card1").style.backgroundColor = "#fff"
    document.querySelector(".card2").style.backgroundColor = "#fff"
    document.querySelector(".card3").style.backgroundColor = "#fff"
    document.querySelector(".card4").style.backgroundColor = "#fff"
}

 function loadQuiz(){

    limpar()

    const pAtual = dadosQuiz[perguntaAtual]
    p.innerText = pAtual.p
 }
 loadQuiz()

function verificar(){
    if (resposta == "a"){
        document.querySelector(".card1").style.backgroundColor = "#5DADE2";
        document.querySelector(".card2").style.backgroundColor = "#fff"
        document.querySelector(".card3").style.backgroundColor = "#fff"
        document.querySelector(".card4").style.backgroundColor = "#fff"
    }
    else if (resposta == "b"){
        document.querySelector(".card2").style.backgroundColor = "#5DADE2";
        document.querySelector(".card1").style.backgroundColor = "#fff"
        document.querySelector(".card3").style.backgroundColor = "#fff"
        document.querySelector(".card4").style.backgroundColor = "#fff"
    }
    else if (resposta == "c"){
        document.querySelector(".card3").style.backgroundColor = "#5DADE2";
        document.querySelector(".card1").style.backgroundColor = "#fff"
        document.querySelector(".card2").style.backgroundColor = "#fff"
        document.querySelector(".card4").style.backgroundColor = "#fff"
    }
    else if(resposta == "d"){
        document.querySelector(".card4").style.backgroundColor = "#5DADE2";
        document.querySelector(".card1").style.backgroundColor = "#fff"
        document.querySelector(".card2").style.backgroundColor = "#fff"
        document.querySelector(".card3").style.backgroundColor = "#fff"
    }
    }
    btnA.addEventListener("click", () => {
        resposta = "a"
        verificar()
    })
    btnB.addEventListener("click", () => {
        resposta = "b"
        verificar()
    })
    btnC.addEventListener("click", () => {
        resposta = "c"
        verificar()
    })
    btnD.addEventListener("click", () => {
        resposta = "d"
        verificar()
    })
 
    let antesBtn = document.getElementById("antes")
    antesBtn.addEventListener("click", () => {
        if(perguntaAtual > 0) {
        valor.pop()
        resposta = ""
        perguntaAtual --
        document.getElementById("questao").style.transform = "translateX(50%) scale(0)" 
        setTimeout(move2, 300)
        setTimeout(transitionIn, 600)
        loadQuiz()
    }})


 nextBtn.addEventListener("click", () => {
    if (resposta == "a"){
        valor.push(0);
    }
    if (resposta == "b"){
        valor.push(1);
    }    
    if (resposta == "c"){
        valor.push(2);
    }
    if (resposta == "d"){
        valor.push(3)
    }
    if (resposta == "a" || resposta =="b" || resposta == "c" || resposta == "d"){
        transitionOut()
        setTimeout(move, 300)
        perguntaAtual++
        setTimeout(transitionIn, 600)
    } 
    if (perguntaAtual < dadosQuiz.length) {
        loadQuiz()
        
    }
    else {
        quiz.remove()
        conclusao.style.display = "block";
        let valorFinal = 0
        for (let n = 0 ; n < 21; n++) { valorFinal = valor[n] + valorFinal}
        let valorDepre = valor[2] + valor[4] + valor[9] + valor[12] + valor[15] + valor[16] + valor[20]
        let valorStress = valor[0] + valor[5] + valor[7] + valor[10] + valor[11] + valor[13] + valor[17]
        let valorAns = valor[1] + valor[3] + valor[6] + valor[8] + valor[14] + valor[18] + valor[19]
        document.querySelector(".text").innerHTML = `<h2 id="total">Tiveste um resultado de ${valorFinal}/${dadosQuiz.length * 3}</h2>`
        resDepre.innerHTML = `<h3>Depressão : ${valorDepre}/21</h3>`
        
        if (valorDepre > 16){ concDepre.innerHTML = "Possui uma depressão extrema"}
        else if (valorDepre > 13){ concDepre.innerHTML = "Possui uma depressão severa"}
        else if (valorDepre > 8){ concDepre.innerHTML = "Possui uma depressão moderada"}
        else if (valorDepre > 6){ concDepre.innerHTML = "os seus níveis de depressão estão ligeiramente acima do normal"}
        else  {concDepre.innerHTML = "Os seus níveis de depressão são saudáveis"}
        
        resAns.innerHTML = `<h3>Ansiedade : ${valorAns}/21</h3>`
        if (valorAns < 5){ concAns.innerHTML = "Os seus níveis de ansiedade são saudáveis"}
        else if (valorAns < 7){ concAns.innerHTML = "os seus níveis de ansiedade estão ligeiramente acima do normal"}
        else if (valorAns < 12){ concAns.innerHTML = "Possui uma ansiedade moderada "}
        else if (valorAns < 15){ concAns.innerHTML = "Possui uma ansiedade severa"}
        else{ concAns.innerHTML = "Possui uma ansiedade extrema"}

        resStress.innerHTML = `<h3>Stress : ${valorStress}/21</h3>`
        if (valorStress < 11){ concStress.innerHTML = "Os seus níveis de stress são saudáveis"}
        else if (valorStress < 13){ concStress.innerHTML = "os seus níveis de stress estão ligeiramente acima do normal"}
        else if (valorStress < 16){ concStress.innerHTML = "Possui um stress moderado "}
        else if (valorStress < 18){ concStress.innerHTML = "Possui um stress severo"}
        else  {concStress.innerHTML = "Possui um stress extremo"}

        restart.innerHTML = `<button onclick="location.reload()" class="button-82-pushable" role="button" id="restart2">
        <span class="button-82-shadow"></span>
        <span class="button-82-edge"></span>
        <span class="button-82-front text"> Recomeçar </span></button>`


        document.querySelector(".container").style.visibility = "visible"
        let circularProgress = document.querySelector(".circular-progress")
        let progressValue = document.querySelector(".progress-value")
        
        let progressStartValue = 0
        let speed = 40
        
        let progress = setInterval(() => {
            progressStartValue++
        
            progressValue.textContent = `${progressStartValue}/63`;
        
            circularProgress.style.background = `conic-gradient(#2f2e31 ${progressStartValue * 5.714285714}deg, #fff 0deg)`
            if(progressStartValue == valorFinal){
                clearInterval(progress);
            }
        }, speed)
        
        document.querySelector(".containerD").style.visibility = "visible"
        let circularProgressD = document.querySelector(".circular-progressD")
        let progressValueD = document.querySelector(".progress-valueD")
        
        let progressStartValueD = 0
        
        let progressD = setInterval(() => {
            progressStartValueD++
        
            progressValueD.textContent = `${progressStartValueD}/21`;
        
            circularProgressD.style.background = `conic-gradient(#2f2e31 ${progressStartValueD * 17.14285714}deg, #fff 0deg)`
            if(progressStartValueD == valorDepre){
                clearInterval(progressD);
            }
        }, speed)

        document.querySelector(".containerS").style.visibility = "visible"
        let circularProgressS = document.querySelector(".circular-progressS")
        let progressValueS = document.querySelector(".progress-valueS")
        
        let progressStartValueS = 0
        
        let progressS = setInterval(() => {
            progressStartValueS++
        
            progressValueS.textContent = `${progressStartValueS}/21`;
        
            circularProgressS.style.background = `conic-gradient(#2f2e31 ${progressStartValueS * 17.14285714}deg, #fff 0deg)`
            if(progressStartValue == valorStress){
                clearInterval(progressS);
            }
        }, speed)
        
        document.querySelector(".containerA").style.visibility = "visible"
        let circularProgressA = document.querySelector(".circular-progressA")
        let progressValueA = document.querySelector(".progress-valueA")
        
        let progressStartValueA = 0
        
        let progressA = setInterval(() => {
            progressStartValueA++
        
            progressValueA.textContent = `${progressStartValueA}/21`;
        
            circularProgressA.style.background = `conic-gradient(#2f2e31 ${progressStartValueA * 17.14285714}deg, #fff 0deg)`
            if(progressStartValueA == valorAns){
                clearInterval(progressA);
            }
        }, speed)
    }
}
)
    function transitionOut(){
    document.getElementById("questao").style.transform = "translateX(-50%) scale(0)"  
}
    function transitionIn() {
        document.getElementById("questao").style.transform = "translateX(0) scale(1)"
    }
    function move(){
        document.getElementById("questao").style.transform = "translateX(50%) scale(0)"
    }
    function move2(){
        document.getElementById("questao").style.transform = "translateX(-50%) scale(0)"
    }
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