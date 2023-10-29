// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
let myMap = L.map("map", { //initialises a Map object and assign it to a variable called myMap
  // "map" is id of div in HTML
  center: [-28.01, 153.4],
  zoom: 13 //pretty zoomed in
});

// Adding a tile layer (the background map image) to our map:
// Tiles are the individual images that make up the map
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

  //copyright attribution
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap); //add this layer to myMap object


//Leaflet maps can include more layers and features