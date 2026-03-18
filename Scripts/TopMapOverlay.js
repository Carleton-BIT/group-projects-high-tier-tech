// Initialize the map and set its view to Carleton University coordinates
// [Latitude, Longitude], Zoom Level (15 is good for campus)
var map = L.map('map').setView([45.3876, -75.6960], 15);

// Add the OpenStreetMap tiles (the actual map images)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add a marker for the University Buildings
var marker = L.marker([45.3831, -75.6976]).addTo(map);
marker.bindPopup("<b>University Centre</b><br>The heart of campus.").openPopup();

var marker = L.marker([45.38281441419413, -75.69688916910961]).addTo(map);
marker.bindPopup("<b>Steacie Building</b><br>.").openPopup();

var marker = L.marker([45.38324661752201, -75.69656801381647]).addTo(map);
marker.bindPopup("<b>Health Science Building</b><br>.").openPopup();

var marker = L.marker([45.38212041306241, -75.69763612887995]).addTo(map);
marker.bindPopup("<b>Herzberg Labratory</b><br>.").openPopup();

var marker = L.marker([45.38240733558676, -75.69614797664528]).addTo(map);
marker.bindPopup("<b>Richcraft Building</b><br>.").openPopup();

var marker = L.marker([45.38190502158383, -75.69863106789164]).addTo(map);
marker.bindPopup("<b>Paterson Hall</b><br>.").openPopup();

var marker = L.marker([45.381250731224846, -75.69961203445604]).addTo(map);
marker.bindPopup("<b>Southam Hall</b><br>.").openPopup();

var marker = L.marker([45.384642722316215, -75.6982928326831]).addTo(map);
marker.bindPopup("<b>Mackenzie Building</b><br>.").openPopup();

var marker = L.marker([45.38519202993685, -75.69697466818896]).addTo(map);
marker.bindPopup("<b>Minto Centre</b><br>.").openPopup();

var marker = L.marker([45.38690570693125, -75.69452948807854]).addTo(map);
marker.bindPopup("<b>Field House</b><br>.").openPopup();

var marker = L.marker([45.38656776841287, -75.69332757666885]).addTo(map);
marker.bindPopup("<b>Alumni Hall</b><br>.").openPopup();

var marker = L.marker([45.384337212370724, -75.696782259743]).addTo(map);
marker.bindPopup("<b>Nicol Building</b><br>.").openPopup();

var marker = L.marker([45.38324661752201, -75.69656801381647]).addTo(map);
marker.bindPopup("<b>Health Science Building</b><br>.").openPopup();

var marker = L.marker([45.38413733826662, -75.69852807495623]).addTo(map);
marker.bindPopup("<b>Canal Building</b><br>.").openPopup();

var marker = L.marker([45.38288725287422, -75.69901031383795]).addTo(map);
marker.bindPopup("<b>Azireli Pavillion</b><br>.").openPopup();

var marker = L.marker([45.383349293253715, -75.69879344442803]).addTo(map);
marker.bindPopup("<b>Azireli Theatre</b><br>.").openPopup();

var marker = L.marker([45.38280301405595, -75.69820232721315]).addTo(map);
marker.bindPopup("<b>Tory Building</b><br>.").openPopup();

var marker = L.marker([45.381967540245654, -75.69971313252802]).addTo(map);
marker.bindPopup("<b>MacOrdrum Library</b><br>.").openPopup();

var marker = L.marker([45.385820482019405, -75.6926284170632]).addTo(map);
marker.bindPopup("<b>Carleton Ice House</b><br>.").openPopup();

var marker = L.marker([45.38401319521936, -75.69747845760243]).addTo(map);
marker.bindPopup("<b>Architecture Building</b><br>.").openPopup();
