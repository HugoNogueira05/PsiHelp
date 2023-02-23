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
                resultado = "Podes ter ansiedade leve a moderada"
            } else if (score < 75) {
                resultado = "Podes ter ansiedade severa"
            } else {
                resultado = "Podes ter níveis extremos de ansiedade"
            }
            quiz.innerHTML = `
            <h2>O teu resultado é ${score}/80. ${resultado}</h2>
            <button onclick="location.reload()">Recomeçar</button>
            `
        }
    }
    console.log(score)
})