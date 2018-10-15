/* skapa ett slumptal mellan 1 och 100 */
var slumptal = Math.ceil(Math.random() * 100);
console.log('Nytt slumptal: ' + slumptal);

/* antal försök */
var antal = 0;

/*våra globala variabler  */
var elementGissning = document.querySelector('#gissning');
var elementSvar = document.querySelector('#svar');
/* reagera på när man trycker på knappen */
function gissa() {

    /* räkna upp */
    antal++;

    /* läsa av gissningen i första input-rutan */
        var gissning = elementGissning.value;
        console.log('Gissningen: '+gissning);

    /* om gissning = talet, då har man vunnit */
    if (gissning ==slumptal) {
        /* skriv i andra input-rutan */
        svar = ' <p class="animated yipee">' + antal + ')' + gissning + 'Yippee! Du vann!</p > ';
        elementSvar.insertAdjacentHTML('beforeend', svar);
    }

    /* om gissning > talet, skriv ut "för högt" */
    if (gissning > slumptal) {
        svar = '<p class="hogt">' + antal + ')' + gissning + 'för högt!</p>';
        elementSvar.insertAdjacentHTML('beforeend', svar);
    }

    /* om gissning < talet , skriv ut "för lågt" */
    if (gissning < slumptal){
        svar = '<p class="lagt">' + antal + ')' + gissning + 'för lågt!</p>';
        elementSvar.insertAdjacentHTML('beforeend', svar);
    }

    /* om gissning > 100, skriv ut "är du dum" */
    if (gissning > 100) {
        svar = '<p class="dum">' + antal + ')' + gissning + 'är du dum!</p>';
        elementSvar.insertAdjacentHTML('beforeend', svar);
    }
}