window.onload = start;

function start() {
    const eKon = document.querySelectorAll('input[name="kon"]');
    const eSkicka = document.querySelector('.skicka');

    eSkicka.addEventListener('click', valtKon);

    function valtKon() {

        if (eKon[0].checked) {
            console.log(eKon[0].value);
        }
        if (eKon[1].checked) {
            console.log(eKon[1].value);
        }
        if (eKon[2].checked) {
            console.log(eKon[2].value);
        }
    }

}