var buildings = 'geojson-files/cu-buildings.geojson';

var buildingStyle = {
    color:       '#666',        // Outline colour
    weight:      1,
    fillColor:   '#bbb',        // Fill colour
    fillOpacity: 0,             // Invisible by default — only outline on hover
    opacity:     0              // Outline also invisible until hovered
};

var buildingHoverStyle = {
    color:       '#BF112B',     // Carleton red outline on hover
    weight:      2.5,
    fillColor:   '#BF112B',
    fillOpacity: 0.2,
    opacity:     1
};

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
                    layer.setStyle(buildingHoverStyle);
                    layer.bringToFront();

                    if (name) {
                        layer.bindTooltip(name, {
                            sticky: true,           // Tooltip follows the mouse
                            direction: 'top',
                            className: 'building-tooltip'
                        }).openTooltip(e.latlng);
                    }
                });

                // ── HOVER OUT ────────────────────────────
                layer.on('mouseout', function() {
                    layer.setStyle(buildingStyle);
                    if (name) {
                        layer.closeTooltip();
                    }
                });
            }
        }).addTo(map);
    })
    .catch(function(err) {
        console.error('BuildingOverlay error:', err.message);
    });