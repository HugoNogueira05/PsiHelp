const data = [
    {
        p: "Sinto-me mais nervoso(a) e ansioso(a) do que o normal",
        isInverted: false,
        id: 1
    },
    {
        p: "Sinto medo sem nenhuma razão",
        isInverted: false,
        id: 2
    },
    {
        p: "Fico incomodado(a) facilmente ou sinto pânico",
        isInverted: false,
        id: 3
    },
    {
        p: "Sinto que me estou a desmoronar e a cair aos pedaços",
        isInverted: false,
        id: 4
    },
    {
        p: "Sinto que tudo está bem e que nada de mau vai acontecer",
        isInverted: true,
        id: 5
    },
    {
        p: "Os meus braços e pernas tremem",
        isInverted: false,
        id: 6
    },
    {
        p: "Sou incomodado(a) por dores de cabeça, pescoço e costas",
        isInverted: false,
        id: 7
    },
    {
        p: "Sinto-me fraco(a) e canso-me facilmente",
        isInverted: false,
        id: 8
    },
    {
        p: "Sinto-me calmo(a) e consigo estar quieto(a) facilmente",
        isInverted: true,
        id: 9
    },
    {
        p: "Sinto o meu coração a bater rapidamente",
        isInverted: false,
        id: 10
    },
    {
        p: "Sou incomodado(a) por tonturas",
        isInverted: false,
        id: 11
    },
    {
        p: "Tenho desmaios ou sinto vontade de desmaiar",
        isInverted: false,
        id: 12
    },
    {
        p: "Consigo respirar, tanto inspirar como expirar, facilmente",
        isInverted: true,
        id: 13
    },
    {
        p: "Os meus dedos das mãos e pés ficam dormentes",
        isInverted: false,
        id: 14
    },
    {
        p: "Sou incomodado(a) por dores no estômago ou indigestão",
        isInverted: false,
        id: 15
    },
    {
        p: "Tenho de esvaziar a minha bexiga frequentemente",
        isInverted: false,
        id: 16
    },
    {
        p: "As minhas mãos costumam estar secas e quentes",
        isInverted: true,
        id: 17
    },
    {
        p: "A minha cara fica corada e quente",
        isInverted: false,
        id: 18
    },
    {
        p: "Adormeço facilmente e durmo bem a noite toda",
        isInverted: true,
        id: 19
    },
    {
        p: "Tenho pesadelos",
        isInverted: false,
        id: 20
    },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')//mal
const submitBtn = document.getElementById('submit')
let btnA = document.getElementById("a");
let btnB = document.getElementById("b");
let btnC = document.getElementById("c");
let btnD = document.getElementById("d");

let currentQuiz = 19
let score = 0
let resultado
let respostas = []


function loadQuiz() {
    deselectAnswers()
    const currentQuizData = data[currentQuiz]
    questionEl.innerText = currentQuizData.p
    console.log(currentQuizData.isInverted)
}
loadQuiz()
function deselectAnswers() {
    resposta = ""
    document.querySelector(".card1").style.backgroundColor = "#fff"
    document.querySelector(".card2").style.backgroundColor = "#fff"
    document.querySelector(".card3").style.backgroundColor = "#fff"
    document.querySelector(".card4").style.backgroundColor = "#fff"
}
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
        const currentQuizData = data[currentQuiz]
        if(currentQuiz > 0) {
        resposta = ""
        currentQuiz --
        if (currentQuizData.id == 6 || currentQuizData.id == 10 || currentQuizData.id == 14 || currentQuizData.id == 18 || currentQuizData.id == 20){
            if (respostas[currentQuiz] == "a"){
                score -= 4
            }
            else if (respostas[currentQuiz] == "b"){
                score -= 3
            }
            else if (respostas[currentQuiz] == "c"){
                score -= 2
            }
            else if (respostas[currentQuiz] == "d"){
                score -= 1
            }
        }
        else{
            if (respostas[currentQuiz] == "a"){
                score -= 1
            }
            else if (respostas[currentQuiz] == "b"){
                score -= 2
            }
            else if (respostas[currentQuiz] == "c"){
                score -= 3
            }
            else if (respostas[currentQuiz] == "d"){
                score -= 4
            }
        }
        respostas.pop([currentQuiz])
        console.log(score)
        document.getElementById("questao").style.transform = "translateX(50%) scale(0)" 
        setTimeout(move2, 300)
        setTimeout(transitionIn, 600)
        loadQuiz()
    }})

submitBtn.addEventListener('click', () => {
    const answer = resposta 
    const currentQuizData = data[currentQuiz]
    if (answer) {
        if (currentQuizData.isInverted == false) {
            if (answer === "a") {
                score += 1
            } else if (answer === "b") {
                score += 2
            } else if (answer === "c") {
                score += 3
            } else if (answer === "d") {
                score += 4
            }
        } else {
            if (answer === "a") {
                score += 4
            } else if (answer === "b") {
                score += 3
            } else if (answer === "c") {
                score += 2
            } else if (answer === "d") {
                score += 1
            }
        }
        if (resposta == "a" || resposta =="b" || resposta == "c" || resposta == "d"){
        currentQuiz++
        respostas.push(resposta) 
        console.log(respostas)
        transitionOut()
        setTimeout(move, 300)
        setTimeout(transitionIn, 600)


        }
        if (currentQuiz < data.length) {
            loadQuiz()
        } else {
            if (score < 45) {
                resultado = "Estás no intervalo normal"
            } else if (score < 60) {
                resultado = "Podes ter ansiedade leve a moderada"
            } else if (score < 75) {
                resultado = "Podes ter ansiedade severa"
            } else {
                resultado = "Podes ter níveis extremos de ansiedade"
            }
            quiz.innerHTML = `<h5>O teu resultado é ${score}/80. ${resultado}</h5>`
            const restart = document.getElementById("restart")
            
            restart.innerHTML = `<button onclick="location.reload()" class="button-82-pushable" role="button" id="restart2">
            <span class="button-82-shadow"></span>
            <span class="button-82-edge"></span>
            <span class="button-82-front text"> Recomeçar </span></button>`
            const conclusao = document.querySelector(".conclusao")  
            conclusao.style.display = "block";
            let circularProgress = document.querySelector(".circular-progress")
            let progressValue = document.querySelector(".progress-value")
            
            let progressStartValue = 0
            let speed = 40
            
            let progress = setInterval(() => {
                progressStartValue++
                
                progressValue.textContent = `${progressStartValue}/80`;
            
                circularProgress.style.background = `conic-gradient(#2f2e31 ${progressStartValue * 4.5}deg, #fff 0deg)`
                if(progressStartValue == score){
                    clearInterval(progress);
                }
            }, speed)
        }
    }
    console.log(score)
})
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
        