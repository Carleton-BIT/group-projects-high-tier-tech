// Wait until the page loads
document.addEventListener("DOMContentLoaded", function() {

    // Ensure the map exists from TopMapOverlay.js
    if (!window.map) {
        console.error("Map not initialized! Make sure TopMapOverlay.js loads before Navigation.js");
        return;
    }

    var map = window.map;

    // --- Routing Coordinates Dictionary ---
    // This is ONLY used to look up the math for the dropdown menus now
    var buildingCoords = {
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

    // --- Navigation & Routing ---

    // Initialize routing control with ALTERNATIVES enabled
    var routingControl = L.Routing.control({
        waypoints: [],
        routeWhileDragging: false,
        addWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: true,
        altLineOptions: {
            styles: [
                {color: '#141e30', opacity: 0.4, weight: 6}
            ]
        },
        lineOptions: {
            styles: [{color: '#00e0ff', opacity: 0.9, weight: 6}]
        }
    }).addTo(map);

    // Go to UC Button
    const ucButton = document.getElementById("gotoUC");
    if (ucButton) {
        ucButton.onclick = () => {
            map.setView([45.3831, -75.6976], 18);
        };
    }

    // Routing Logic
    const startSelect = document.getElementById("startSelect");
    const endSelect = document.getElementById("endSelect");
    const routeBtn = document.getElementById("routeBtn");
    const resetBtn = document.getElementById("resetBtn");

    // Get Directions Action
    if (routeBtn) {
        routeBtn.addEventListener("click", function() {
            var startVal = startSelect.value;
            var endVal = endSelect.value;

            if (!startVal || !endVal) {
                alert("Please select both a Start and a Destination building.");
                return;
            }

            var startCoords = buildingCoords[startVal];
            var endCoords = buildingCoords[endVal];

            routingControl.getRouter().options.profile = 'foot';

            routingControl.setWaypoints([
                L.latLng(startCoords[0], startCoords[1]),
                L.latLng(endCoords[0], endCoords[1])
            ]);
        });
    }

    // Reset Action
    if (resetBtn) {
        resetBtn.addEventListener("click", function() {
            routingControl.setWaypoints([]);
            startSelect.value = "";
            endSelect.value = "";
            map.setView([45.3831, -75.6976], 16);
        });
    }
});