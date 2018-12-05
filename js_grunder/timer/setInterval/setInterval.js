window.onload = start;

function start() {
    const eTimerText = document.querySelector("#timer-text");
    const eKnapp1 = document.querySelector("#start");
    const eKnapp2 = document.querySelector("#stopp");

    let rakna = 0;
    let intervalID;

    eKnapp1.addEventListener("click", oka);
    eKnapp2.addEventListener("click", stoppa);

    function oka() {
        IntervalID = setInterval(function () {
            rakna += 1;
            eTimerText.textContent = rakna;
        }, 1000);
    }
    function stoppa() {
        clearInterval(intervalID);
    }
}