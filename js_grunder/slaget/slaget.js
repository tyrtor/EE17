/* I den här uppgiften ska du skapa en slagsmålssimulator med två inblandade slagskämpar.
Simulatorn ska hålla reda på slagskämparnas namn och hp.
Simulatorn körs så länge båda slagskämparna har hp kvar.
Varje gång loopen körs – varje “runda” – så ska slagskämpe A slå B, och B ska slå A.
Ett slag innebär att motståndaren blir av med en slumpmässig mängd hp.
När striden är slut, presentera vinnaren – eller om båda slagskämparna kom under 0 samtidigt, förklara att det blev oavgjort.
VIKTIGT: Om du får mycket hjälp av en kamrat, skriv det i dina kommentarer! */

window.onload = start;

function start() {
    const eHp1 = document.querySelector('#hp1');
    const eHp2 = document.querySelector('#hp2');
    const eKnapp = document.querySelector('#sla');
    const eVinnare = document.querySelector('#vinnare');
    const eRestart = document.querySelector('#restart');
    eKnapp.addEventListener('click', slag);
    eRestart.addEventListener('click', startaOm);
/*     eRestart.addEventListener('click', startaOm); */

    var hp1 = eHp1.value;
    var hp2 = eHp2.value;
    

    function slag() {
        var slumptal1 = Math.ceil(Math.random() * 10);
        var slumptal2 = Math.ceil(Math.random() * 10);

        hp1 -= slumptal1;
        hp2 -= slumptal2;

        console.log(hp1, hp2);

        eHp1.value = hp1;
        eHp2.value = hp2;
        
        
        if (hp1 < 1 || hp2 < 1) {
            if (hp1 < 1) {
                eVinnare.textContent = "Grattis röd!!";
            } else {
                eVinnare.textContent = "Grattis blå!!";
            }

        }
                
    }
    function startaOm() {
         eHp1.value = 100;
        eHp2.value = 100; 
        hp1 = 100;
        hp2 = 100;
        console.log(hp1, hp2);
        eVinnare.textContent = " ";
        
       
   }     
}