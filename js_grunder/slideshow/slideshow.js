window.onload = start;

function start() {
    const elementYta = document.querySelector('.yta');
    const elementVanster = document.querySelector('.fa-chevron-circle-left');
    const elementHoger = document.querySelector('.fa-chevron-circle-right');

    var bildLista = [
        './foton/amber-kipp-667086-unsplash.jpg',
        './foton/christine-siracusa-668619-unsplash.jpg',
        './foton/erol-ahmed-260730-unsplash.jpg',
        '/foton/fatima-akram-1139004-unsplash.jpg',
        './foton/gades-photography-1063468-unsplash.jpg',
        './foton/joanna-kosinska-435228-unsplash.jpg',
        './foton/katie-smith-104748-unsplash.jpg',
        './foton/louis-hansel-1137867-unsplash.jpg',
        './foton/rawpixel-973120-unsplash.jpg'
    ];

/* lyssna på knapparna */
    elementVanster.addEventListener('click', bytBild);
    elementHoger.addEventListener('click', bytBild);

    /* byter bild */
    function bytBild() {
        console.log(this.dataset.riktning);
        
    }
}