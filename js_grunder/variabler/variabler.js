window.onload = start;

function start() {
    /* lista på alla element vi använder */
    const eRuta1 = document.querySelector("#ruta1")
    const eRuta2 = document.querySelector("#ruta2")
    const eRuta3 = document.querySelector("#ruta3")
    const eRuta4 = document.querySelector("#ruta4")
    const eKnapp1 = document.querySelector("#knapp1")
    const eKnapp2 = document.querySelector("#knapp2")

    /* lyssna på knappar */
    eKnapp1.addEventListener("click", addera)
    eKnapp2.addEventListener("click", subtrahera)


    function addera() {
        /* läsa av innehållet på rutorna */
        let tal1 = Number(eRuta1.value);
        let tal2 = Number(eRuta2.value);

        /* addeera tal1 med tal2 */
        let summa = tal1 + tal2;

        /* skriv ut summa i ruta 3 */
        eRuta3.value = summa;
    }
    function subtrahera() {
        let tal1 = Number(eRuta1.value);
        let tal2 = Number(eRuta2.value);

        let summa = tal1 - tal2;

        eRuta4.value = summa;
    }
}