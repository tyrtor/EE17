/* 
 * Skapa ett spamskydd
 * Två slumptal presenteras
 * Användaren räknar ut summan
 */

/* Kör koden när webbsidan laddats klart */
window.onload = start;

function start() {

    /* Skapar globala variabler tal1 och tal2 */
    
    
    var tal1 = Math.ceil(Math.random() * 40);
    var tal2 = Math.ceil(Math.random() * 40);


    /* Slumpa fram två tal */


    /* Skriv ut frågan */
    /* 1. Skapa en target till elementet */
    /* 2. Skriv ut, tex "Vad är 2+3?"; */
    const elementFraga = document.querySelector('.fraga');
    elementFraga.textContent = 'Vad är ' + tal1 + '+' + tal2 + '?';

    /* lyssna på knappen */
    /* 1. Ta tag i knappen */
    /* 2. Lyssna på knappen */
    const elementKnapp = document.querySelector('.knapp');
    elementKnapp.addEventListener('click', rattaSvar);

    /* En funktion som körs när man klickat på knappen */
    function rattaSvar() {  
    
        /* Läs in det som användaren skriver i textrutan */
        /* 1. Ta tag i textrutan */
        /* 2. Läs av innehållet */
        const elementSumman = document.querySelector('.summan');
        var summan = elementSumman.value;
        const elementSvaret = document.querySelector('.svaret');
        console.log(tal1+tal2);
        
        /* Om svaret = tal1 + tal2 */
         if (summan == (tal1+tal2)) {
             elementSvaret.textContent = 'Rätt svar, du är en människa!';
         } else {
             elementSvaret.textContent = 'Fel svar, du en robot eller en människa som räknar fel!';
         }
        /* Skriv ut svar: "Rätt svar, du är en människa!" */

        /* Skriv ut svar: "Fel svar, du en robot eller en människa som räknar fel!" */
    }
}