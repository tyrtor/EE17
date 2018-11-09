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

    /* vilka händelser behöver vi lyssna på */

    elementKnapp1.addEventListener('click', visaBild1);
    elementKnapp2.addEventListener('click', visaBild2);
    elementKnapp3.addEventListener('click', visaBild3);
    elementKnapp4.addEventListener('click', visaBild4);

    /* vad sak hända när man klickar på knapp1 */
    function visaBild1() {
        elementImg.src = './bilder/ikoner/alien-ship-64x64.png';

        elementP.textContent = 'Photo by Michael Olsen';
    }
    function visaBild2() {
        elementImg.src = './bilder/ikoner/alien-3-64x64.png';

        elementP.textContent = 'Photo by Diego Sousa';
    }
    function visaBild3() {
        elementImg.src = './bilder/ikoner/alien-1-64x64.png';

        elementP.textContent = 'Photo by Kees Streefkerk';
    }
    function visaBild4() {
        elementImg.src = './bilder/ikoner/astronaut-helmet-64x64.png';

        elementP.textContent = 'Photo by Jose Duarte';
    }

}