let time = 1500;
let interval;

function updateTimer() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    document.getElementById("timer").innerText =
        `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
    interval = setInterval(() => {
        time--;

        updateTimer();

        if (time <= 0) {
            clearInterval(interval);
            alert("Pomodoro Finished!");
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(interval);
    time = 1500;
    updateTimer();
}

updateTimer();
