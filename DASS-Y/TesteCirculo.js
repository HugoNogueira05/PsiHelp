let circularProgress = document.querySelector(".circular-progress")
let progressValue = document.querySelector(".progress-value")

let progressStartValue = 0
let progressEndValue = 100
let speed = 40

let progress = setInterval(() => {
    progressStartValue++

    progressValue.textContent = `${progressStartValue}%`;

    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #fff 0deg)`
    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }
}, speed)