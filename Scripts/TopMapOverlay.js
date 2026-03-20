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

var assetPath = 'webpage-assets';

var landmarkIcons = {
    'building':     { file: 'webpage-assets/carleton_map_marker.svg', color: '#CC0000', label: 'Building' },
    'parking':      { file: 'webpage-assets/parking-1.svg',  color: '#FFAA00', label: 'Parking'       },
    'bus_stop':     { file: 'webpage-assets/bus-33.svg',      color: '#0077EE', label: 'Bus Stop'      },
    'bus_station':  { file: 'webpage-assets/bus-33.svg',      color: '#0077EE', label: 'Bus Station'   },
    'cafe':         { file: 'webpage-assets/coffee-23.svg',   color: '#7B4F2E', label: 'Café'          },
    'restaurant':   { file: 'webpage-assets/food-8.svg',      color: '#BF112B', label: 'Restaurant'    },
};

function getIcon(type) {
    return L.icon({
        iconUrl: landmarkIcons[type].file,
        iconSize: type === 'building' ? [35, 45] : [30, 30],
        iconAnchor: type === 'building' ? [17, 45] : [15, 15],
        popupAnchor: [0, -20]
    });
}

// --- Building Markers ---
var buildingList = [];
var buildingMarker;

buildingMarker = L.marker([45.3831, -75.6976], {icon: getIcon('building')}).bindPopup("<b>University Centre</b><br>The heart of campus.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38281441419413, -75.69688916910961], {icon: getIcon('building')}).bindPopup("<b>Steacie Building</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38324661752201, -75.69656801381647], {icon: getIcon('building')}).bindPopup("<b>Health Science Building</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38212041306241, -75.69763612887995], {icon: getIcon('building')}).bindPopup("<b>Herzberg Laboratory</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38240733558676, -75.69614797664528], {icon: getIcon('building')}).bindPopup("<b>Richcraft Building</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38190502158383, -75.69863106789164], {icon: getIcon('building')}).bindPopup("<b>Paterson Hall</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.381250731224846, -75.69961203445604], {icon: getIcon('building')}).bindPopup("<b>Southam Hall</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.384642722316215, -75.6982928326831], {icon: getIcon('building')}).bindPopup("<b>Mackenzie Building</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38519202993685, -75.69697466818896], {icon: getIcon('building')}).bindPopup("<b>Minto Centre</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38690570693125, -75.69452948807854], {icon: getIcon('building')}).bindPopup("<b>Field House</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38656776841287, -75.69332757666885], {icon: getIcon('building')}).bindPopup("<b>Alumni Hall</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.384337212370724, -75.696782259743], {icon: getIcon('building')}).bindPopup("<b>Nicol Building</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38413733826662, -75.69852807495623], {icon: getIcon('building')}).bindPopup("<b>Canal Building</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38288725287422, -75.69901031383795], {icon: getIcon('building')}).bindPopup("<b>Azireli Pavilion</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.383349293253715, -75.69879344442803], {icon: getIcon('building')}).bindPopup("<b>Azireli Theatre</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38280301405595, -75.69820232721315], {icon: getIcon('building')}).bindPopup("<b>Tory Building</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.381967540245654, -75.69971313252802], {icon: getIcon('building')}).bindPopup("<b>MacOdrum Library</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.385820482019405, -75.6926284170632], {icon: getIcon('building')}).bindPopup("<b>Carleton Ice House</b><br>.");
buildingList.push(buildingMarker);

buildingMarker = L.marker([45.38401319521936, -75.69747845760243], {icon: getIcon('building')}).bindPopup("<b>Architecture Building</b><br>.");
buildingList.push(buildingMarker);

// add parking markers

var parkingList = [];

parkingList.push(L.marker([45.39068, -75.69671], {icon: getIcon('parking')}).bindPopup("<b>Parking P7</b>"));

// add bus stop markers
var busList = [];
busList.push(L.marker([45.3904, -75.6939], {icon: getIcon('bus_stop')}).bindPopup(`<b>${landmarkIcons.bus_stop.label}</b>`));
busList.push(L.marker([45.384889946875504, -75.69644989532271], {icon: getIcon('bus_stop')}).bindPopup(`<b>${landmarkIcons.bus_stop.label}</b>`));
busList.push(L.marker([45.38700111364135, -75.69653144139238], {icon: getIcon('bus_stop')}).bindPopup(`<b>${landmarkIcons.bus_stop.label}</b>`));

// add restaurant and cafe markers
var foodList = [];
foodList.push(L.marker([45.3835, -75.6975], {icon: getIcon('restaurant')}).bindPopup("<b>Oasis Food Court</b>"));
foodList.push(L.marker([45.3819, -75.6990], {icon: getIcon('cafe')}).bindPopup("<b>Page Break Cafe</b>"));

// --- Adding The Toggle ---
var buildingLayer = L.layerGroup(buildingList);
var parkingLayer = L.layerGroup(parkingList).addTo(window.map);
var busLayer = L.layerGroup(busList).addTo(window.map);
var foodLayer = L.layerGroup(foodList).addTo(window.map);

var overlays = {
    "Show Buildings" : buildingLayer,
    "Show Parking Lots" : parkingLayer,
    "Show Bus Stops" : busLayer,
    "Show Restaurants and Cafes" : foodLayer,
};

L.control.layers(null, overlays).addTo(window.map);