// Initialize the map and set its view to Carleton University coordinates
// [Latitude, Longitude], Zoom Level (15 is good for campus)
var map = L.map('map').setView([45.3876, -75.6960], 15);

// Add the OpenStreetMap tiles (the actual map images)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add a marker for the University Center
var marker = L.marker([45.3831, -75.6976]).addTo(map);
marker.bindPopup("<b>University Centre</b><br>The heart of campus.").openPopup();