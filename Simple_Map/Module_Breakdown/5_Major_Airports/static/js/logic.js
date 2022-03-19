// Add console.log to see if our code is working
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps
let baseMaps = {
    Street: streets,
    Dark: dark
}; 

// Create the map object with a center (US) and zoom level
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
});

// Control layers 
L.control.layers(baseMaps).addTo(map);

// Accessing the aiport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/JC_Mapping_Earthquakes/Simple_Map/Module_Breakdown/5_Major_Airports/majorAirports.json";

// Access GJSON Data
d3.json(airportData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the fetched data
    L.geoJSON(data, {
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country +  "</h3>")
        }
    }).addTo(map);
});
