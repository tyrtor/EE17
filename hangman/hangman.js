window.onload = start;

function start() {
    var canvas = document.querySelector("#minCanvas");
    var ctx = canvas.getContext("2d");
    var raknare = 0;

    /* element vi jobbar med */
    const eKnapp = document.querySelector(".spela");

    /* lyssna på knappen */
    eKnapp.addEventListener("click", visaHangman);

    function visaHangman() {

        raknare++;
        console.log(raknare);
        
        if (raknare==1) {
           /* kullen */
        ctx.beginPath();
        ctx.arc(250, 800, 300, 0, 2 * Math.PI);
        ctx.stroke(); 
        }
        
        if (raknare==2) {
            ctx.beginPath();
            ctx.moveTo(250, 115);
            ctx.lineTo(250, 500);
            ctx.stroke();
        
            /* benen till ställningen */
            ctx.beginPath();
            ctx.moveTo(250, 450);
            ctx.lineTo(300, 504);
            ctx.stroke();
        
            ctx.beginPath();
            ctx.moveTo(250, 450);
            ctx.lineTo(200, 504);
            ctx.stroke();
        }

        if (raknare==3) {
        /* ställnignen */
        ctx.beginPath();
        ctx.moveTo(450, 115);
        ctx.lineTo(250, 115);
        ctx.stroke(); 
        }

    
        if (raknare==4) {
                   /* snaran */
        ctx.beginPath();
        ctx.moveTo(400, 175);
        ctx.lineTo(400, 115);
        ctx.stroke(); 
        }

        if (raknare==5) {
            /* huvudet */
            ctx.beginPath();
            ctx.arc(400, 200, 25, 0, 2 * Math.PI);
            ctx.stroke(); 
            }

        if (raknare==6) {
        /* kroppen */
        ctx.moveTo(400, 225);
        ctx.lineTo(400, 400);
        ctx.stroke();
        }

        if (raknare==7) {
        /* armarna */
        ctx.beginPath();
        ctx.moveTo(400, 250);
        ctx.lineTo(450, 300);
        ctx.stroke(); 
        }

        if (raknare==8) {
            ctx.beginPath();
            ctx.moveTo(400, 250);
            ctx.lineTo(350, 300);
            ctx.stroke();
        }
        
        if (raknare==9) {
        /* höger ben */
        ctx.beginPath();
        ctx.moveTo(400, 400);
        ctx.lineTo(450, 450);
        ctx.stroke();
        }

        if (raknare==10) {
        /* vänster ben */
        ctx.beginPath();
        ctx.moveTo(400, 400);
        ctx.lineTo(350, 450);
        ctx.stroke(); 
        }

    }
}