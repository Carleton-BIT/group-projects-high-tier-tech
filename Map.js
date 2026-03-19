// map.js - Top Layer Navigation for Carleton Map
// Wait until the page loads
document.addEventListener("DOMContentLoaded", function() {

    // Initialize map (use your existing map code)
    var map = L.map('map').setView([45.3831, -75.6976], 16);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Zoom and scale controls
    L.control.zoom({ position: 'topright' }).addTo(map);
    L.control.scale().addTo(map);

    // --- Building Markers ---
    var buildingList = [];
    var buildingMarker;

    // University Centre
    buildingMarker = L.marker([45.3831, -75.6976]).bindPopup("<b>University Centre</b><br>The heart of campus.");
    buildingList.push(buildingMarker);

    // Steacie Building
    buildingMarker = L.marker([45.38281441419413, -75.69688916910961]).bindPopup("<b>Steacie Building</b><br>.");
    buildingList.push(buildingMarker);

    // Health Science Building
    buildingMarker = L.marker([45.38324661752201, -75.69656801381647]).bindPopup("<b>Health Science Building</b><br>.");
    buildingList.push(buildingMarker);

    // Herzberg Laboratory
    buildingMarker = L.marker([45.38212041306241, -75.69763612887995]).bindPopup("<b>Herzberg Laboratory</b><br>.");
    buildingList.push(buildingMarker);

    // Richcraft Building
    buildingMarker = L.marker([45.38240733558676, -75.69614797664528]).bindPopup("<b>Richcraft Building</b><br>.");
    buildingList.push(buildingMarker);

    // Paterson Hall
    buildingMarker = L.marker([45.38190502158383, -75.69863106789164]).bindPopup("<b>Paterson Hall</b><br>.");
    buildingList.push(buildingMarker);

    // Southam Hall
    buildingMarker = L.marker([45.381250731224846, -75.69961203445604]).bindPopup("<b>Southam Hall</b><br>.");
    buildingList.push(buildingMarker);

    // Mackenzie Building
    buildingMarker = L.marker([45.384642722316215, -75.6982928326831]).bindPopup("<b>Mackenzie Building</b><br>.");
    buildingList.push(buildingMarker);

    // Minto Centre
    buildingMarker = L.marker([45.38519202993685, -75.69697466818896]).bindPopup("<b>Minto Centre</b><br>.");
    buildingList.push(buildingMarker);

    // Field House
    buildingMarker = L.marker([45.38690570693125, -75.69452948807854]).bindPopup("<b>Field House</b><br>.");
    buildingList.push(buildingMarker);

    // Alumni Hall
    buildingMarker = L.marker([45.38656776841287, -75.69332757666885]).bindPopup("<b>Alumni Hall</b><br>.");
    buildingList.push(buildingMarker);

    // Nicol Building
    buildingMarker = L.marker([45.384337212370724, -75.696782259743]).bindPopup("<b>Nicol Building</b><br>.");
    buildingList.push(buildingMarker);

    // Tory Building
    buildingMarker = L.marker([45.38413733826662, -75.69852807495623]).bindPopup("<b>Canal/Tory Building</b><br>.");
    buildingList.push(buildingMarker);

    // Azireli Pavilion
    buildingMarker = L.marker([45.38288725287422, -75.69901031383795]).bindPopup("<b>Azireli Pavilion</b><br>.");
    buildingList.push(buildingMarker);

    // Azireli Theatre
    buildingMarker = L.marker([45.383349293253715, -75.69879344442803]).bindPopup("<b>Azireli Theatre</b><br>.");
    buildingList.push(buildingMarker);

    // MacOdrum Library
    buildingMarker = L.marker([45.381967540245654, -75.69971313252802]).bindPopup("<b>MacOdrum Library</b><br>.");
    buildingList.push(buildingMarker);

    // Carleton Ice House
    buildingMarker = L.marker([45.385820482019405, -75.6926284170632]).bindPopup("<b>Carleton Ice House</b><br>.");
    buildingList.push(buildingMarker);

    // Architecture Building
    buildingMarker = L.marker([45.38401319521936, -75.69747845760243]).bindPopup("<b>Architecture Building</b><br>.");
    buildingList.push(buildingMarker);

    // --- Building Layer & Toggle ---
    var buildingLayer = L.layerGroup(buildingList);
    buildingLayer.addTo(map); // show by default
    var overlays = { "Show Buildings": buildingLayer };
    L.control.layers(null, overlays).addTo(map);

    // --- Navigation Functions ---
    function goToBuilding(lat, lng, zoom=18) {
        map.setView([lat, lng], zoom);
    }

    // Buttons navigation (if buttons exist in HTML)
    const ucButton = document.getElementById("gotoUC");
    if (ucButton) ucButton.onclick = () => goToBuilding(45.3831, -75.6976);

    // Dropdown navigation
    const buildingSelect = document.getElementById("buildingSelect");
    const buildingCoords = {
        "UC": [45.3831, -75.6976],
        "Steacie": [45.38281441419413, -75.69688916910961],
        "Health Science": [45.38324661752201, -75.69656801381647],
        "Herzberg": [45.38212041306241, -75.69763612887995],
        "Richcraft": [45.38240733558676, -75.69614797664528],
        "Paterson": [45.38190502158383, -75.69863106789164],
        "Southam": [45.381250731224846, -75.69961203445604],
        "Mackenzie": [45.384642722316215, -75.6982928326831],
        "Minto": [45.38519202993685, -75.69697466818896],
        "Field House": [45.38690570693125, -75.69452948807854],
        "Alumni": [45.38656776841287, -75.69332757666885],
        "Nicol": [45.384337212370724, -75.696782259743],
        "Tory": [45.38413733826662, -75.69852807495623],
        "Azireli Pavilion": [45.38288725287422, -75.69901031383795],
        "Azireli Theatre": [45.383349293253715, -75.69879344442803],
        "MacOdrum": [45.381967540245654, -75.69971313252802],
        "Ice House": [45.385820482019405, -75.6926284170632],
        "Architecture": [45.38401319521936, -75.69747845760243]
    };

    if (buildingSelect) {
        buildingSelect.addEventListener("change", function() {
            const val = this.value;
            if(buildingCoords[val]) goToBuilding(buildingCoords[val][0], buildingCoords[val][1]);
        });
    }

});
