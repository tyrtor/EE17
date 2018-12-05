window.onload = start;

function start() {
    /* elementen vi jobbar med */
    const skrollFyll = document.querySelector(".skrollFyll");
    /* en eventlistener som lyssnar på skroll */
    window.addEventListener("scroll", skrollLängd)
    /* funktionen som kör indikatorn */
    function skrollLängd() {
        /* nya element som behövs i funktionen */
        const skrollbart = document.documentElement.scrollHeight - window.innerHeight;
        const skrollat = window.scrollY;

        let procentSkrollat = 100;

        /* om användaren värkligen kan skrolla */
        if (skrollbart > 0) {
            procentSkrollat = Math.ceil(skrollat / skrollbart * 100);
        }
        
        skrollFyll.style.width = `${procentSkrollat}%`;
        
    }
}