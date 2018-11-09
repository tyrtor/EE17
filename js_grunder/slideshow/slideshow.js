window.onload = start;

function start() {
    const elementYta = document.querySelector('.yta');
    const elementVanster = document.querySelector('.fa-chevron-circle-left');
    const elementHoger = document.querySelector('.fa-chevron-circle-right');
    const elementPunkter = document.querySelector('.punkter');

    /* lista på alla bilder */
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
    /* position på bilden man tittar på */
    var index = 0;

    /* visa första bilden */
    elementYta.style.cssText = 'background: url("' + bildLista[0] + '") no-repeat center;';
    
    /* skapa punkter */
    for (let i = 0; i < bildLista.length; i++) {
        elementPunkter.innerHTML += '<i class="fas fa-circle"></i>';
        
    }
/* lyssna på knapparna */
    elementVanster.addEventListener('click', bytBild);
    elementHoger.addEventListener('click', bytBild);

    /* byter bild */
    function bytBild() {
        /* om man klicar på pil höger */
        if (this.dataset.riktning == 'höger') {
            index++;
        }
        
        /* om man klickar på pil vänster */
        if (this.dataset.riktning == 'vänster') {
            index--;
        }
        
        /* om man går förbi 0, dvs -1 tabort vänster kanpp*/
        if (index == -1 ) {
            index = bildLista.length -1;
        }

        /* om man går förbi sista, tabort höger knapp */
        if (index == bildLista.length) {
            index = 0;
        }

        console.log(this.dataset.riktning + ' ' + index + ' ' + bildLista[index]);

        /* byt ut bakgrundsbilden */
        elementYta.style.cssText = 'background: url("' + bildLista[index]+ '") no-repeat center;';
        
    }
}