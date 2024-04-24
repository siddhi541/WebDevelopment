let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

function stopWatch() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
    }
    if (minutes / 60 === 1) {
        minutes = 0;
        hours++;
    }
    if (seconds < 10) {
        leadingSeconds = '0' + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }
    if (minutes < 10) {
        leadingMinutes = '0' + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }
    if (hours < 10) {
        leadingHours = '0' + hours.toString();
    } else {
        leadingHours = hours;
    }
    let displayTimer = document.querySelector("#timer");
    displayTimer.innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
}

function reset() {
    seconds = 0;
    minutes = 0;
    hours = 0;
    leadingSeconds = 0;
    leadingMinutes = 0;
    leadingHours = 0;
    let displayTimer = document.querySelector("#timer");
    displayTimer.innerText = `00:00:00`;
}



let startStopBtn = document.querySelector("#startStopBtn");
let resetBtn = document.querySelector("#resetBtn");
let count = 0;
let id;
startStopBtn.addEventListener("click", function () {
    count++;
    if (count % 2 == 0) {
        clearInterval(id);
        if (startStopBtn.firstElementChild.classList.contains("fa-pause")) {
            startStopBtn.firstElementChild.classList.remove("fa-pause");
            startStopBtn.firstElementChild.classList.add("fa-play");
            startStopBtn.setAttribute("id", "startStopBtn");

        }
    } else {
        id = setInterval(stopWatch, 1000);
        if (startStopBtn.firstElementChild.classList.contains("fa-play")) {
            startStopBtn.firstElementChild.classList.remove("fa-play");
            startStopBtn.firstElementChild.classList.add("fa-pause");
            startStopBtn.setAttribute("id", "pauseBtn");
        }
        
        resetBtn.addEventListener("click", function () {
            clearInterval(id);
            reset();
            startStopBtn.firstElementChild.classList.remove("fa-pause");
            startStopBtn.firstElementChild.classList.add("fa-play");
            startStopBtn.setAttribute("id", "startStopBtn");
        });
    }
});


