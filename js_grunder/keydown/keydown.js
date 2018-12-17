window.onload = start;

function start() {
    const eSkepp = document.querySelector("img");
    
/* skeppets position */
    let x = 0;
    let y = 0;

    console.log(window.innerWidth);
    console.log(window.innerHeight);
    

/* lyssna efter tangent tryck */
    document.addEventListener("keydown", flygaSkepp);

    function flygaSkepp(event) {
        /* minska vid tryck på vänster pil */
        
        if (event.key == "ArrowLeft") {
            x -= 10;
        }
        /* öka vid tryck på höger pil */
        if (event.key == "ArrowRight") {
            x += 10;
        }
        

        if (event.key == "ArrowUp") {
            y -= 10;
        }
        if (event.key == "ArrowDown") {
            y += 10;
        }
        console.log(x + " " + y);

        if (x > window.innerWidth) {
            x = 0;
        } else if (x < 0) {
            x = window.innerWidth - 30
        }
        if (y > window.innerHeight) {
            y = 0;
        } else if (y < 0) {
            y = window.innerHeight - 30
        }
        
        /* flytta på skeppet */
        eSkepp.style.left = x + "px";
        eSkepp.style.top = y + "px";
        
    }

}