var buildings = 'geojson-files/cu-buildings.geojson';

var buildingStyle = {
    color:       '#666',
    weight:      1,
    fillColor:   '#bbb',
    fillOpacity: 0,
    opacity:     0
};

var buildingHoverStyle = {
    color:       '#BF112B',
    weight:      2.5,
    fillColor:   '#BF112B',
    fillOpacity: 0.2,
    opacity:     1
};

// NEW: Variable to track the currently clicked building
var selectedLayer = null;

// Load and Render Buildings
fetch(buildings)
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Could not load cu-buildings.geojson.');
        }
        return response.json();
    })
    .then(function(data) {
        L.geoJSON(data, {
            style: buildingStyle,
            onEachFeature: function(feature, layer) {
                var name = feature.properties.name
                    || feature.properties['name:en']
                    || feature.properties.ref
                    || null;

                // ── HOVER IN ─────────────────────────────
                layer.on('mouseover', function(e) {
                    // Only apply hover style if it's NOT the clicked building
                    if (selectedLayer !== layer) {
                        layer.setStyle(buildingHoverStyle);
                    }
                    layer.bringToFront();

                    if (name) {
                        layer.bindTooltip(name, {
                            sticky: true,
                            direction: 'top',
                            className: 'building-tooltip'
                        }).openTooltip(e.latlng);
                    }
                });

                // ── HOVER OUT ────────────────────────────
                layer.on('mouseout', function() {
                    // Only hide the building if it hasn't been clicked
                    if (selectedLayer !== layer) {
                        layer.setStyle(buildingStyle);
                    }
                    if (name) {
                        layer.closeTooltip();
                    }
                });

                // ── CLICK ────────────────────────────────
                layer.on('click', function(e) {
                    // 1. If another building was already clicked, reset its style to invisible
                    if (selectedLayer && selectedLayer !== layer) {
                        selectedLayer.setStyle(buildingStyle);
                    }

                    // 2. Toggle the click (if you click the same building twice, it deselects)
                    if (selectedLayer === layer) {
                        selectedLayer = null;
                    } else {
                        // 3. Set this layer as the new selected building
                        selectedLayer = layer;
                        layer.setStyle(buildingHoverStyle);
                        layer.bringToFront();
                    }
                });
            }
        }).addTo(map);
    })
    .catch(function(err) {
        console.error('BuildingOverlay error:', err.message);
    });