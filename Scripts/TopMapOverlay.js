// Initialize the map, turn OFF the default top-left zoom, and set the view
window.map = L.map('map', { zoomControl: false }).setView([45.3868, -75.6976], 15);

// Define Base Maps (Street and Satellite)
var streetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(window.map); // Add streetMap by default

var satelliteMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// Group the Base Maps
var baseMaps = {
    "Street View": streetMap,
    "Satellite Mode": satelliteMap
};

// Add zoom and scale controls
L.control.zoom({ position: 'topright' }).addTo(window.map);
L.control.scale().addTo(window.map);

var assetPath = 'webpage-assets';

var landmarkIcons = {
    'building':     { file: 'webpage-assets/carleton_map_marker.svg', color: '#CC0000', label: 'Building' },
    'parking':      { file: 'webpage-assets/parking-1.svg',  color: '#FFAA00', label: 'Parking'       },
    'bus_stop':     { file: 'webpage-assets/bus-33.svg',      color: '#0077EE', label: 'Bus Stop'      },
    'bus_station':  { file: 'webpage-assets/bus-33.svg',      color: '#0077EE', label: 'Bus Station'   },
    'train_stop':   { file: 'webpage-assets/train-20.svg',    color: '#34A853', label: 'Train Stop'    }, // Added Train Stop icon
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
parkingList.push(L.marker([45.38095865989225, -75.7004369622975], {icon: getIcon('parking')}).bindPopup("<b>Parking P1</b>"));

parkingList.push(L.marker([45.38484857155134, -75.69266790267329], {icon: getIcon('parking')}).bindPopup("<b>Parking P3</b>"));

parkingList.push(L.marker([45.385361689601964, -75.69536715332391], {icon: getIcon('parking')}).bindPopup("<b>Parking P4</b>"));

parkingList.push(L.marker([45.387311208285574, -75.69319728442375], {icon: getIcon('parking')}).bindPopup("<b>Parking P5</b>"));

parkingList.push(L.marker([45.389489214326865, -75.69884147064522], {icon: getIcon('parking')}).bindPopup("<b>Parking P6</b>"));

parkingList.push(L.marker([45.39068, -75.69671], {icon: getIcon('parking')}).bindPopup("<b>Parking P7</b>"));

parkingList.push(L.marker([45.384836400058404, -75.69322679132509], {icon: getIcon('parking')}).bindPopup("<b>Parking P10</b>"));

parkingList.push(L.marker([45.38490638610292, -75.69398930607959], {icon: getIcon('parking')}).bindPopup("<b>Parking P11</b>"));

parkingList.push(L.marker([45.38451689745194, -75.69154146044873], {icon: getIcon('parking')}).bindPopup("<b>Parking P14</b>"));

parkingList.push(L.marker([45.3855840407557, -75.69374023053521], {icon: getIcon('parking')}).bindPopup("<b>Parking P15</b>"));

parkingList.push(L.marker([45.38933918729486, -75.69710156463712], {icon: getIcon('parking')}).bindPopup("<b>Parking P18</b>"));


// add bus stop markers
var busList = [];

busList.push(L.marker([45.3904, -75.6939], {icon: getIcon('bus_stop')}).bindPopup(`<b>${landmarkIcons.bus_stop.label}</b>`));

busList.push(L.marker([45.384889946875504, -75.69644989532271], {icon: getIcon('bus_stop')}).bindPopup(`<b>${landmarkIcons.bus_stop.label}</b>`));

busList.push(L.marker([45.38700111364135, -75.69653144139238], {icon: getIcon('bus_stop')}).bindPopup(`<b>${landmarkIcons.bus_stop.label}</b>`));

busList.push(L.marker([45.38713211868861, -75.69543862530935], {icon: getIcon('bus_stop')}).bindPopup(`<b>${landmarkIcons.bus_stop.label}</b>`));

//add train stop makers
var trainList = []; // Added Train List

trainList.push(L.marker([45.3855, -75.6957], {icon: getIcon('train_stop')}).bindPopup(`<b>${landmarkIcons.train_stop.label}</b>`));

trainList.push(L.marker([45.3855, -75.6960], {icon: getIcon('train_stop')}).bindPopup(`<b>${landmarkIcons.train_stop.label}</b>`));

// add restaurant and cafe markers
var foodList = [];
foodList.push(L.marker([45.38444691092358, -75.69381600727175], {icon: getIcon('restaurant')}).bindPopup("<b>T & J Style Kitchen</b>"));

foodList.push(L.marker([45.38690139455082, -75.69889036376755], {icon: getIcon('restaurant')}).bindPopup("<b>the caf</b>"));

foodList.push(L.marker([45.387070932495874, -75.6972810383368], {icon: getIcon('cafe')}).bindPopup("<b>Starbucks</b>"));

foodList.push(L.marker([45.382329196114426, -75.69949455255241], {icon: getIcon('cafe')}).bindPopup("<b>Starbucks</b>"));

foodList.push(L.marker([45.383029302424184, -75.69818967752366], {icon: getIcon('cafe')}).bindPopup("<b>Starbucks</b>"));

foodList.push(L.marker([45.38606570756748, -75.69386366444945], {icon: getIcon('cafe')}).bindPopup("<b>Tim Hortons</b>"));

foodList.push(L.marker([45.382162690068874, -75.69590492771918], {icon: getIcon('cafe')}).bindPopup("<b>Tim Hortons</b>"));

foodList.push(L.marker([45.3842765085715, -75.69845175033419], {icon: getIcon('cafe')}).bindPopup("<b>Chatime</b>"));

foodList.push(L.marker([45.383893101418984, -75.69732530808677], {icon: getIcon('cafe')}).bindPopup("<b>Bridgehead</b>"));


// --- Adding The Toggle ---
var buildingLayer = L.layerGroup(buildingList);
var parkingLayer = L.layerGroup(parkingList);
var busLayer = L.layerGroup(busList);
var trainLayer = L.layerGroup(trainList); // Added Train Layer
var foodLayer = L.layerGroup(foodList);

var overlays = {
    "Show Buildings" : buildingLayer,
    "Show Parking Lots" : parkingLayer,
    "Show Bus Stops" : busLayer,
    "Show Train Stops" : trainLayer, // Added to Overlays
    "Show Restaurants and Cafes" : foodLayer,
};

// Add baseMaps and overlays to the control
L.control.layers(baseMaps, overlays).addTo(window.map);