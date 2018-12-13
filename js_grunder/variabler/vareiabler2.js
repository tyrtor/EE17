window.onload = start;

function start() {
    /* elemant vi jobbar med */
    const eKnapp1 = document.querySelector("#Knapp1");
    const eKnapp2 = document.querySelector("#Knapp2");
    const eTalet = document.querySelector("#talet");

    eKnapp1.addEventListener("click", raknaNed);
    eKnapp2.addEventListener("click", raknaUpp);

    function raknaNed() {
        let talet = Number(eTalet.value);

        let summaNed = talet - 1;

        eTalet.value = summaNed;
    }
    function raknaUpp() {
        let talet = Number(eTalet.value);

        let summaUpp = talet + 1;

        eTalet.value = summaUpp;
    }
}