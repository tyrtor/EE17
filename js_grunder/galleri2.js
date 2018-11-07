/* när man klickar på en knapp byts bilden ut till  */


/* När webbsidan laddats klart kör start() */
window.onload = start;

/* Start-delen */
function start() {
    /* vilka element arbetar vi med? */
    const elementP = document.querySelector('.bildtext');
    const elementImg = document.querySelector('.bild img')
    const elementKnapp1 = document.querySelector('.knapp1');
    const elementKnapp2 = document.querySelector('.knapp2');
    const elementKnapp3 = document.querySelector('.knapp3');
    const elementKnapp4 = document.querySelector('.knapp4');

    /* klicka på en knapp */
    elementKnapp1.addEventListener('click', visaBild);
    elementKnapp2.addEventListener('click', visaBild);
    elementKnapp3.addEventListener('click', visaBild);
    elementKnapp4.addEventListener('click', visaBild);
    /* Visa motsvarande storbild och skriv ut bildtexten */
    function visaBild() {
        console.log(this.dataset.bild);
        

/*         elementImg.src = './bilder/ikoner/alien-1-64x64.png';

        elementP.textContent = 'Photo by David Dibert'; */
    }
}