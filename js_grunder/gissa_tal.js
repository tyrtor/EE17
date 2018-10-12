/* skapa ett slumptal mellan 1 och 100 */
var slumptal = Math.ceil(Math.random() * 100);
console.log('Nytt slumptal: ' + slumptal);

/*våra globala variabler  */
var elementGissning = document.querySelector('#gissning');
var elementSvar = document.querySelector('#svar');
/* reagera på när man trycker på knappen */
function gissa() {
    /* läsa av gissningen i första input-rutan */
        var gissning = elementGissning.value;
        console.log('Gissningen: '+gissning);

    /* om gissning = talet, då har man vunnit */
    if (gissning ==slumptal) {
        /* skriv i andra input-rutan */
        elementSvar.value = 'Yipppee! Du vann!'
    }

    /* om gissning > talet, skriv ut "för högt" */
    if (gissning > slumptal) {
        elementSvar.value = 'För högt';
    }

    /* om gissning < talet , skriv ut "för lågt" */
    if (gissning < slumptal) {
        elementSvar.value = 'För lågt';
    }

    /* om gissning > 100, skriv ut "är du dum" */
    if (gissning > 100) {
        elementSvar.value = 'Är du dum!';
    }
}