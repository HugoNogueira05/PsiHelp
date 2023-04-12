const data = [
    {
        p: "Sinto-me desanimado(a) e triste",
        isInverted: false,
        id: 1
    },
    {
        p: "A manhã é o momento do dia em que me sinto melhor",
        isInverted: true,
        id: 2
    },
    {
        p: "Tenho crises de choro, ou sinto vontade de chorar",
        isInverted: false,
        id: 3
    },
    {
        p: "Tenho dificuldade em dormir descansado(a) durante a noite",
        isInverted: false,
        id: 4
    },
    {
        p: "Continuo a alimentar-me da mesma forma como me alimentava no passado",
        isInverted: true,
        id: 5
    },
    {
        p: "Ainda sinto prazer com sexo",
        isInverted: true,
        id: 6
    },
    {
        p: "Apercebi-me de que estou a perder peso",
        isInverted: false,
        id: 7
    },
    {
        p: "Tenho prisão de ventre",
        isInverted: false,
        id: 8
    },
    {
        p: "O meu coração está mais acelerado que o habitual",
        isInverted: false,
        id: 9
    },
    {
        p: "Canso-me sem motivo aparente",
        isInverted: false,
        id: 10
    },
    {
        p: "Sinto-me tão lúcido(a) como anteriormente",
        isInverted: true,
        id: 11
    },
    {
        p: "Tenho tanta facilidade em fazer as coisas como anteriormente",
        isInverted: true,
        id: 12
    },
    {
        p: "Sinto-me agitado(a) e não consigo ficar parado(a)",
        isInverted: false,
        id: 13
    },
    {
        p: "Sinto-me optimista e esperançoso(a) em relação ao futuro",
        isInverted: true,
        id: 14
    },
    {
        p: "Sinto-me mais irritável que o habitual",
        isInverted: false,
        id: 15
    },
    {
        p: "Sinto facilidade em tomar decisões",
        isInverted: true,
        id: 16
    },
    {
        p: "Sinto-me útil e necessário(a)",
        isInverted: true,
        id: 17
    },
    {
        p: "Sinto ter uma vida bastante completa",
        isInverted: true,
        id: 18
    },
    {
        p: "Sinto que os outros ficariam melhor se morresse",
        isInverted: false,
        id: 19
    },
    {
        p: "Continuo a ter prazer nas coisas de que sempre gostei",
        isInverted: true,
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

let currentQuiz = 0
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
        if (currentQuizData.id == 3 || currentQuizData.id == 6 || currentQuizData.id == 7 || currentQuizData.id == 12 || currentQuizData.id == 13 || currentQuizData.id == 15 || currentQuizData.id == 17 || currentQuizData.id == 18 || currentQuizData.id == 19){
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
                resultado = "Podes ter depressão leve a moderada"
            } else if (score < 75) {
                resultado = "Podes ter depressão severa"
            } else {
                resultado = "Podes ter níveis extremos de depressão"
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