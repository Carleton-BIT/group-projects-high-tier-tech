// Holds the GeoJSON layer once loaded so the toggle can add/remove it
var landmarkLayer = null;
var landmarksVisible = true;

//Creates a Leaflet divIcon with the SVG rendered inside a colored circular pin badge.
function buildIcon(config) {
    var size = 32;
    var html = `
        <div style="
            width: ${size}px;
            height: ${size}px;
            background: ${config.color};
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            box-shadow: 0 2px 6px rgba(0,0,0,0.35);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid rgba(255,255,255,0.8);
        ">
            <img src="${config.file}"
                 style="
                     width: 16px;
                     height: 16px;
                     transform: rotate(45deg);
                     filter: brightness(0) invert(1);
                 "
            />
        </div>`;

    return L.divIcon({
        html: html,
        className: '',               // Clears Leaflet's default white box
        iconSize:   [size, size],
        iconAnchor: [size / 2, size], // Tip of the pin points to the location
        popupAnchor:[0, -size]
    });
}

// Load/Render Icons
fetch('geojson-files/cu-landmarks.geojson')
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Could not load cu-landmarks.geojson – make sure the file is in your project folder.');
        }
        return response.json();
    })
    .then(function(data) {
        // Single flat layerGroup — every marker goes directly in here.
        // A flat group is reliably toggled with map.removeLayer/addLayer.
        var markers = L.layerGroup();

        data.features.forEach(function(feature) {
            var props  = feature.properties;
            var type   = props.amenity || props.highway || '';
            var config = landmarkIcons[type];

            // Skip features we don't have an icon for
            if (!config) return;

            var name = props.name || config.label;
            var latlng;

            if (feature.geometry.type === 'Point') {
                // GeoJSON coords are [lng, lat] — flip for Leaflet
                var coords = feature.geometry.coordinates;
                latlng = L.latLng(coords[1], coords[0]);

            } else if (feature.geometry.type === 'Polygon') {
                // Use the centroid of the polygon's bounding box
                var ring = feature.geometry.coordinates[0];
                var lats = ring.map(function(c) { return c[1]; });
                var lngs = ring.map(function(c) { return c[0]; });
                latlng = L.latLng(
                    (Math.min.apply(null, lats) + Math.max.apply(null, lats)) / 2,
                    (Math.min.apply(null, lngs) + Math.max.apply(null, lngs)) / 2
                );
            } else {
                return; // skip unsupported geometry types
            }

            var marker = L.marker(latlng, { icon: buildIcon(config) })
                .bindTooltip(name, {
                    direction:  'top',
                    offset:     [0, -32],
                    className:  'landmark-tooltip'
                });

            markers.addLayer(marker);
        });

        // Assign to landmarkLayer and add to map
        landmarkLayer = markers;
        landmarkLayer.addTo(map);
    })
    .catch(function(err) {
        console.error('LandmarkOverlay error:', err.message);
    });

// Toggle Button for Landmarks
var toggleControl = L.control({ position: 'bottomright' });

toggleControl.onAdd = function() {
    var btn = L.DomUtil.create('button');

    btn.textContent = 'Hide Landmarks';
    btn.style.cssText = [
        'background: #1a1a1a',
        'color: white',
        'border: 2px solid white',
        'padding: 10px 14px',
        'border-radius: 5px',
        'font: 700 13px "Helvetica Neue", Arial, sans-serif',
        'cursor: pointer',
        'letter-spacing: 0.04em',
        'box-shadow: 0 2px 6px rgba(0,0,0,0.3)',
        'min-width: 150px'
    ].join(';');

    // Prevent map click/drag events firing through the button
    L.DomEvent.disableClickPropagation(btn);

    btn.addEventListener('click', function() {
        if (!landmarkLayer) return; // GeoJSON not loaded yet

        if (landmarksVisible) {
            map.removeLayer(landmarkLayer);
            btn.textContent = 'Show Landmarks';
            btn.style.background = '#BF112B'; // Carleton red when off
        } else {
            map.addLayer(landmarkLayer);
            btn.textContent = 'Hide Landmarks';  // ← FIX 3: was 'Hide Tunnels'
            btn.style.background = '#1a1a1a';
        }
        landmarksVisible = !landmarksVisible;
    });

    return btn;
};

toggleControl.addTo(map);

// Landmark Legend Overlay
var landmarkLegend = L.control({ position: 'bottomleft' });

landmarkLegend.onAdd = function() {
    var div = L.DomUtil.create('div');
    div.style.cssText = [
        'background: rgba(255,255,255,0.92)',
        'padding: 10px 14px',
        'border-radius: 6px',
        'box-shadow: 0 2px 8px rgba(0,0,0,0.2)',
        'font: 13px/1.8 "Helvetica Neue", Arial, sans-serif',
        'min-width: 150px'
    ].join(';');

    // Deduplicate legend entries by label
    var seen = {};
    var entries = Object.values(landmarkIcons).filter(function(c) {
        if (seen[c.label]) return false;
        seen[c.label] = true;
        return true;
    });

    div.innerHTML = '<strong style="display:block;margin-bottom:6px;">Landmarks</strong>' +
        entries.map(function(c) {
            return `<div style="display:flex;align-items:center;gap:8px;margin-bottom:2px">
                <span style="
                    display:inline-flex;align-items:center;justify-content:center;
                    width:22px;height:22px;border-radius:50%;
                    background:${c.color};flex-shrink:0;
                ">
                    <img src="${c.file}" style="width:12px;height:12px;filter:brightness(0) invert(1)"/>
                </span>
                <span>${c.label}</span>
            </div>`;
        }).join('');

    return div;
};

landmarkLegend.addTo(map);