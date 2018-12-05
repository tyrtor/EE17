window.onload = start;

function start() {
    elementInput1 = document.querySelector('#input1');
    elementInput2 = document.querySelector('#input2');
    elementResultat = document.querySelector('#resultat');
    elementKnapp = document.querySelector('#knapp');

    /* elementKnapp.addEventListener('click', area); */
    elementKnapp.addEventListener('click', area);

    function area() {
        let bredd, höjd;
        let area;

        bredd = Number(elementInput1.value);
        höjd = Number(elementInput2.value);

        area = bredd * höjd;
        elementResultat.innerHTML += "Arean för en rektangel är " + area + "<br><br>";

        area = bredd * höjd / 2;
        elementResultat.innerHTML += "Arean för en triangel är " + area + "<br><br> ";
    
        area = 3.14159265359 * bredd / 2 * höjd / 2;
        elementResultat.innerHTML += "Arean för en oval är " + area + "<br><br>";
    }
}