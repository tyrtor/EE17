window.onload = start;

function start() {
    var canvas = document.querySelector("#minCanvas");
    var ctx = canvas.getContext("2d");

/* kroppen */
    ctx.moveTo(200, 125);
    ctx.lineTo(200, 300);
    ctx.stroke();

    /* armarna */
    ctx.beginPath();
    ctx.moveTo(200, 150);
    ctx.lineTo(250, 200);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(200, 150);
    ctx.lineTo(150, 200);
    ctx.stroke();

    /* benen */
    ctx.beginPath();
    ctx.moveTo(200, 300);
    ctx.lineTo(250, 350);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(200, 300);
    ctx.lineTo(150, 350);
    ctx.stroke();

    /* huvudet */
    ctx.beginPath();
    ctx.arc(200, 100, 25, 0, 2 * Math.PI);
    ctx.stroke();
}