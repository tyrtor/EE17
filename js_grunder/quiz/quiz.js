window.onload = start;

function start() {
    /* element vi använder */
    const eOrdet = document.querySelector("#ordet");
    const eSvaret = document.querySelector("#svaret");
    const eKnappRatta = document.querySelector("#ratta");
    const eKnappNytt = document.querySelector("#nytt");
    const eOutput = document.querySelector("#output");

    /* en massa ord */
    let ordlistaEn = [
        "Fun",
        "Easy",
        "Correct",
        "Hungry",
        "Fast",
        "Car",
        "Library",
        "Cat",
        "Plane",
        "Holiday"
    ];
    let ordlistaSv = [
        "Kul",
        "Lätt",
        "Korrekt",
        "Hungrig",
        "Snabb",
        "Bil",
        "Bibliotek",
        "Katt",
        "Flygplan",
        "Semester"
    ];

    /* För att komma ihåg ordet och översättningen */
    let ordetEn = "";
    let ordetSv = "";

    /* slumpa fram ett ord */
    function slumpOrd() {
        let slumptal = Math.ceil(Math.random() * 10 - 1);
        ordetEn = ordlistaEn[slumptal];
        ordetSv = ordlistaSv[slumptal];
    }
    /* kör funktionen och skapaa slumpade ord */
    slumpOrd();
    console.log(ordetEn + " " + ordetSv);

    /* skriva ut ordet på sidan */
    eOrdet.textContent = ordetEn;
    
    eKnappRatta.addEventListener("click", rattaSvaret);

    function rattaSvaret() {
        let svaret = eSvaret.value;

        if (svaret == ordetSv) {
            eOutput.textContent = "Rätt svar";
        } else {
            eOutput.textContent = "Fel svar";
        }
    }
    
    eKnappNytt.addEventListener("click", nyFraga);

    function nyFraga() {
        slumpOrd();
        eOrdet.textContent = ordetEn;
        eSvaret.value = "";
        eOutput.textContent = "";
    }
} 