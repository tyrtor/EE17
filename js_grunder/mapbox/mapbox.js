
mapboxgl.accessToken = 'pk.eyJ1IjoidHlydG9yIiwiYSI6ImNqcGRxNjVmaDFqMGozdXNicXp6enc4eWMifQ.brDY8DrLJOBNykRhx5fbzg';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/tyrtor/cjpdr7rvf0wm52snwk0guxn97', // stylesheet location
    center: [17.993372, 59.349975], // starting position [lng, lat]
    zoom: 14 // starting zoom
});
var marker = new mapboxgl.Marker() //skapa en marker.
    .setLngLat([17.993372, 59.349975]) //ger marker en position.
    .addTo(map); // lägger ut den på kartan.
var marker1 = new mapboxgl.Marker() //skapa en marker.
    .setLngLat([17.994885, 59.347790]) //ger marker en position.
    .addTo(map); // lägger ut den på kartan.