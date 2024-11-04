var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function timer() {
    msec++;
    msecHeading.innerHTML = msec < 10 ? "0" + msec : msec;
    if (msec >= 100) {
        sec++;
        secHeading.innerHTML = sec < 10 ? "0" + sec : sec;
        msec = 0;
    } else if (sec >= 60) {
        min++;
        minHeading.innerHTML = min < 10 ? "0" + min : min;
        sec = 0;
    }
}

function start() {
    interval = setInterval(timer, 10);
    document.getElementById('startButton').disabled = true;
}

function pause() {
    clearInterval(interval);
    document.getElementById('startButton').disabled = false;
}

function reset() {
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = "00";
    secHeading.innerHTML = "00";
    msecHeading.innerHTML = "00";
    pause();
}
