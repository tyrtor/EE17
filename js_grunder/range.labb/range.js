window.onload = start;

function start() {
    /* elementen vi jobbar med */
    const elementImg = document.querySelector('img');
    const elementBredd = document.querySelector('#bredd');
    const elementHojd = document.querySelector('#hojd');
    const elementOutput = document.querySelector('#output')

    elementImg.width = 500;
    elementImg.height = 400;

    /* lyssna på när man drar i slidern */
    elementBredd.addEventListener('input', andraBredd);

    elementHojd.addEventListener('input', andraHojd);

    function andraBredd() {
        console.log('Bredd=' + elementBredd.value);
        elementImg.width = elementBredd.value;
        elementOutput.textContent = '(' + elementBredd.value + 'x' + elementHojd.value + ')';
    }

    function andraHojd() {
        console.log('höjd=' + elementHojd.value);
        elementImg.height = elementHojd.value;
        elementOutput.textContent = '(' + elementBredd.value + 'x' + elementHojd.value + ')';
    }

}


