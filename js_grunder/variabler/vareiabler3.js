window.onload = start;

function start() {
    const eKnapp = document.querySelector("button");
    const eRuta1 = document.querySelector("#ruta1");
    const eRuta2 = document.querySelector("#ruta2");
    const eBild = document.querySelector("img");

    let listaKarak = [
        "Sonic",    //0
        "Mario",    //1
        "Cortana",  //2
        "Luigi",    //3
        "Zelda",    //4
        "Kirby",    //5
        "Sams",     //6
        "Inkling",  //7
        "Ridley",   //8
        "Spyro"     //9
    ];
    let listaBilder = [
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/sonic-hedgehog-nintendo.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/mario-smash-bros.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/fallout-vault-boy.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/marcus-fenix-gears-war.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/link-legend-zelda.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/ryu-hayabusa-ninja.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/sam-max-hit-road.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/bioshock-big-daddy.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/samus-aran-metroid.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/solid-snake-metal-gear.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/solid-snake-metal-gear.jpg"
    ];

    eKnapp.addEventListener("click", slumpTal);
    function slumpTal() {

        let slumptal = Math.ceil(Math.random() * 10 - 1);
        eRuta1.value = slumptal;


        eRuta2.value = listaKarak[slumptal];

        eBild.src = listaBilder[slumptal];
    }
}