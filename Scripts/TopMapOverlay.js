// Initialize the map, turn OFF the default top-left zoom, and set the view
window.map = L.map('map', { zoomControl: false }).setView([45.3831, -75.6976], 15);

// Add the OpenStreetMap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(window.map);

// Add zoom and scale controls
L.control.zoom({ position: 'topright' }).addTo(window.map);
L.control.scale().addTo(window.map);


// --- Building Markers ---
var buildingList = [];
var buildingMarker;

buildingMarker = L.marker([45.3831, -75.6976]).bindPopup("<b>University Centre</b><br>The heart of campus.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38281441419413, -75.69688916910961]).bindPopup("<b>Steacie Building</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38324661752201, -75.69656801381647]).bindPopup("<b>Health Science Building</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38212041306241, -75.69763612887995]).bindPopup("<b>Herzberg Laboratory</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38240733558676, -75.69614797664528]).bindPopup("<b>Richcraft Building</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38190502158383, -75.69863106789164]).bindPopup("<b>Paterson Hall</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.381250731224846, -75.69961203445604]).bindPopup("<b>Southam Hall</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.384642722316215, -75.6982928326831]).bindPopup("<b>Mackenzie Building</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38519202993685, -75.69697466818896]).bindPopup("<b>Minto Centre</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38690570693125, -75.69452948807854]).bindPopup("<b>Field House</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38656776841287, -75.69332757666885]).bindPopup("<b>Alumni Hall</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.384337212370724, -75.696782259743]).bindPopup("<b>Nicol Building</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38413733826662, -75.69852807495623]).bindPopup("<b>Canal Building</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38288725287422, -75.69901031383795]).bindPopup("<b>Azireli Pavilion</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.383349293253715, -75.69879344442803]).bindPopup("<b>Azireli Theatre</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38280301405595, -75.69820232721315]).bindPopup("<b>Tory Building</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.381967540245654, -75.69971313252802]).bindPopup("<b>MacOdrum Library</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.385820482019405, -75.6926284170632]).bindPopup("<b>Carleton Ice House</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38401319521936, -75.69747845760243]).bindPopup("<b>Architecture Building</b><br>.");
buildingList.push(buildingMarker);

// --- Adding The Toggle ---
var buildingLayer = L.layerGroup(buildingList);
buildingLayer.addTo(window.map); // Show by default

var overlays = {
    "Show Buildings": buildingLayer,
};

L.control.layers(null, overlays).addTo(window.map);