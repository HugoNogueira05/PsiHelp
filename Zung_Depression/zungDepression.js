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
const d_text = document.getElementById('d_text')
const start = document.getElementById("start")
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0
let resultado

quiz.style.visibility = "hidden"


function loadQuiz() {
    quiz.style.visibility = "visible"
    // start.style.visibility = "hidden"
    start.remove()
    deselectAnswers()
    const currentQuizData = data[currentQuiz]
    questionEl.innerText = currentQuizData.p
    console.log(currentQuizData.isInverted)
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    console.log(answer)
    return answer
}



submitBtn.addEventListener('click', () => {
    const answer = getSelected()
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
        currentQuiz++
        if (currentQuiz < data.length) {
            loadQuiz()
        } else {
            if (score < 45) {
                resultado = "Estás no intervalo normal"
            } else if (score < 60) {
                resultado = "Podes estar levemente deprimido"
            } else if (score < 70) {
                resultado = "Estás moderadamente deprimido"
            } else {
                resultado = "Estás severamente deprimido"
            }
            quiz.innerHTML = `
            <h2>O teu resultado é ${score}/80. ${resultado}</h2>
            <button onclick="location.reload()">Recomeçar</button>
            `
        }
    }
    console.log(score)
})