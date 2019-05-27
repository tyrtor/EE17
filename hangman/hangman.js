window.onload = start;

function start() {
    var canvas = document.querySelector("#minCanvas");
    var ctx = canvas.getContext("2d");
    var raknare = 0;
    var SlumpStad = "";

    const stader = ["Abu Dhabi", "Abuja", "Accra", "Addis Abeba", "Alger", "Amman", "Amsterdam", "Andorra la Vella", "Ankara", "Antananarivo", "Apia", "Asjchabad", "Asmara", "Astana", "Asunci\u00f3n", "Aten", "Bagdad", "Baku", "Bamako", "Bandar Seri Begawan", "Bangkok", "Bangui", "Banjul", "Basseterre", "Beirut", "Belgrad", "Belmopan", "Berlin", "Bern", "Bisjkek", "Bissau", "Bogot\u00e1", "Bras\u00edlia", "Bratislava", "Brazzaville", "Bridgetown", "Bryssel", "Budapest", "Buenos Aires", "Bukarest", "Canberra", "Caracas", "Castries", "Chi\u0219in\u0103u", "Colombo", "Conakry", "Dakar", "Damaskus", "Dhaka", "Dili", "Djibouti", "Dodoma", "Doha", "Dublin", "Dusjanbe", "Funafuti", "Freetown", "Gaborone", "Georgetown", "Gitega", "Guatemala City", "Hanoi", "Harare", "Havanna", "Helsingfors", "Honiara", "Islamabad", "Jakarta", "Jerevan", "Jerusalem", "Juba", "Kabul", "Kairo", "Kampala", "Katmandu", "Khartoum", "Kiev", "Kigali", "Kingston", "Kingstown", "Kinshasa", "Kuala Lumpur", "Kuwait", "K\u00f6penhamn", "Libreville", "Lilongwe", "Lima", "Lissabon", "Ljubljana", "Lom\u00e9", "London", "Luanda", "Lusaka", "Luxemburg", "Madrid", "Majuro", "Malabo", "Mal\u00e9", "Managua", "Manama", "Manila", "Maputo", "Maseru", "Mbabane", "Mexico City", "Minsk", "Mogadishu", "Monaco", "Monrovia", "Montevideo", "Moroni", "Moskva", "Muskat", "N'Djamena", "Nairobi", "Nassau", "Naypyidaw", "New Delhi", "Ngerulmud", "Niamey", "Nicosia", "Nouakchott", "Nuku'alofa", "Nuuk", "Oslo", "Ottawa", "Ouagadougou", "Palikir", "Panama City", "Paramaribo", "Paris", "Peking", "Phnom Penh", "Podgorica", "Port Louis", "Port Moresby", "Port of Spain", "Port-au-Prince", "Porto-Novo", "Port Vila", "Prag", "Praia", "Pretoria", "Pristina", "Pyongyang", "Quito", "Rabat", "Reykjavik", "Riga", "Riyadh", "Rom", "Roseau", "Saint George's", "Saint John's", "San Jos\u00e9", "San Marino", "San Salvador", "Sanaa", "Santiago de Chile", "Santo Domingo", "S\u00e3o Tom\u00e9", "Sarajevo", "Seoul", "Singapore", "Skopje", "Sofia", "Stockholm", "Sucre", "Suva", "Taipei", "Tallinn", "Tarawa", "Tasjkent", "Tbilisi", "Tegucigalpa", "Teheran", "Thimphu", "Tirana", "Tokyo", "Torshamn", "Tripoli", "Tunis", "Ulan Bator", "Vaduz", "Valletta", "Vatikanstaden", "Victoria", "Vientiane", "Vilnius", "Warszawa", "Washington D.C.", "Wellington", "Wien", "Windhoek", "Yamoussoukro", "Yaound\u00e9", "Zagreb"];

    function slumpaStad() {
        let slumpa = Math.ceil(Math.random() * stader.length);
        console.log(slumpa, stader[slumpa]);
        return stader[slumpa].toLowerCase();
    }
    slumpStad = slumpaStad();

    /* element vi jobbar med */
    const eKnapp = document.querySelector(".spela");
    const eLista = document.querySelector("select");
    

    /* lyssna på knappen */
    eKnapp.addEventListener("click", visaHangman);

    function visaHangman() {

        var bokstav = eLista.value.toLowerCase();
        console.log(bokstav);

        if (slumpStad.indexOf(bokstav)!== -1) {
            console.log("bokstaven hittas i ordet");
        } else {
            console.log("bokstaven hittas inte i ordet");
            raknare++;
        }
        
        if (raknare==1) {
           /* kullen */
        ctx.beginPath();
        ctx.arc(250, 800, 300, 0, 2 * Math.PI);
        ctx.stroke(); 
        }
        
        if (raknare==2) {
            ctx.beginPath();
            ctx.moveTo(250, 115);
            ctx.lineTo(250, 500);
            ctx.stroke();
        
            /* benen till ställningen */
            ctx.beginPath();
            ctx.moveTo(250, 450);
            ctx.lineTo(300, 504);
            ctx.stroke();
        
            ctx.beginPath();
            ctx.moveTo(250, 450);
            ctx.lineTo(200, 504);
            ctx.stroke();
        }

        if (raknare==3) {
        /* ställnignen */
        ctx.beginPath();
        ctx.moveTo(450, 115);
        ctx.lineTo(250, 115);
        ctx.stroke(); 
        }

    
        if (raknare==4) {
                   /* snaran */
        ctx.beginPath();
        ctx.moveTo(400, 175);
        ctx.lineTo(400, 115);
        ctx.stroke(); 
        }

        if (raknare==5) {
            /* huvudet */
            ctx.beginPath();
            ctx.arc(400, 200, 25, 0, 2 * Math.PI);
            ctx.stroke(); 
            }

        if (raknare==6) {
        /* kroppen */
        ctx.moveTo(400, 225);
        ctx.lineTo(400, 400);
        ctx.stroke();
        }

        if (raknare==7) {
        /* armarna */
        ctx.beginPath();
        ctx.moveTo(400, 250);
        ctx.lineTo(450, 300);
        ctx.stroke(); 
        }

        if (raknare==8) {
            ctx.beginPath();
            ctx.moveTo(400, 250);
            ctx.lineTo(350, 300);
            ctx.stroke();
        }
        
        if (raknare==9) {
        /* höger ben */
        ctx.beginPath();
        ctx.moveTo(400, 400);
        ctx.lineTo(450, 450);
        ctx.stroke();
        }

        if (raknare==10) {
        /* vänster ben */
        ctx.beginPath();
        ctx.moveTo(400, 400);
        ctx.lineTo(350, 450);
        ctx.stroke(); 
        }

    }
}