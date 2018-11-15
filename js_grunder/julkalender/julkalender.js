/* vänta tills hela sidan laddats klart */

window.onload = start;

function start() {
    /* element vi jobbar med */
    const elementGrid = document.querySelector('.grid');

    /* lyssna på klick */
    elementGrid.addEventListener('click', lucka);

    /* vinsten någonstans mellan 1 och 24 */
    let vinst = Math.ceil(Math.random() * 24 + 1);
    console.log(vinst);

    /* öppna en lucka */
    function lucka(event) {
        console.log('klickat på grid');
        console.log(event.target.className);

        if (event.target.className == 'animated dag') {
            console.log(event.target.textContent);

            if (event.target.textContent == vinst) {
                console.log('hurra!');
                event.target.classList.add('flip');

                } else {
                event.target.classList.add('zoomOut');
            }
        }
    }
}