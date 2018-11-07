window.onload = start;

function start() {
    const elementImg = document.querySelector('img');
    const elementKnapp1 = document.querySelector('.knapp1');
    const elementKnapp2 = document.querySelector('.knapp2');

    elementKnapp1.addEventListener('click', andraText);
    elementKnapp2.addEventListener('click', andraText);

    function andraText() {
        console.log(this.dataset.sko);
        elementImg.src = this.dataset.sko;
        
    }
    
}