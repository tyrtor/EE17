mapboxgl.accessToken = 'pk.eyJ1IjoidHlydG9yIiwiYSI6ImNqcGRxNjVmaDFqMGozdXNicXp6enc4eWMifQ.brDY8DrLJOBNykRhx5fbzg';
let map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/tyrtor/cjpdr7rvf0wm52snwk0guxn97', // stylesheet location
    center: [18.046012, 59.337454], // starting position [lng, lat]
    zoom: 15 // starting zoom
});

/* lista på positioner */
let positioner = [
    [18.046012, 59.337454],
    [18.047190, 59.340285],
    [18.055730, 59.343447],
    [18.062632, 59.336277],
    [18.053920, 59.343772]
];
let beskrivningar = [
    "NTI Gymnasiet",
    "Di La Grande",
    "Falafel Kungen",
    "Subway Hötorget",
    "Kebab kungen"
];

/* loopa igenom listan och plasera ut markers på kartan */
for (let index = 0; index < positioner.length; index++){
    console.log(positioner[index]);
    let popup = new mapboxgl.Popup({ 
        offset: 25
    })
    .setText(beskrivningar[index])

    let marker1 = new mapboxgl.Marker() //skapa en marker.
    .setLngLat(positioner[index]) //ger marker en position
    .addTo(map) // lägger ut den på kartan
    .setPopup(popup)

}