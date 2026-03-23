var tunnelColors = {
    'Tunnel A': '#888888',
    'Tunnel B': '#22CC00',
    'Tunnel C': '#EE00AA',
    'Tunnel D': '#FF6600',
    'Tunnel E': '#7700CC',
    'Tunnel F': '#FFAA00',
    'Tunnel G': '#0077EE',
};

var defaultColor = '#999999';
var tunnelLayer = null;
var tunnelsVisible = true;

// 1. Define the Legend FIRST so the toggle button can access it
var legend = L.control({ position: 'bottomleft' });

legend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'leaflet-control');
    L.DomEvent.disableClickPropagation(div);
    L.DomEvent.disableScrollPropagation(div);

    div.style.cssText = [
        'background: rgba(255,255,255,0.92)',
        'color: #333333',
        'padding: 10px 14px',
        'border-radius: 6px',
        'box-shadow: 0 2px 8px rgba(0,0,0,0.2)',
        'font: 13px/1.6 "Helvetica Neue", Arial, sans-serif',
        'min-width: 150px'
    ].join(';');

    div.innerHTML = '<strong style="display:block;margin-bottom:6px;">Tunnel Legend</strong>' +
        Object.entries(tunnelColors).map(function(entry) {
            return '<div style="display:flex;align-items:center;gap:8px;margin-bottom:3px">' +
                '<span style="display:inline-block;width:28px;height:5px;border-radius:3px;' +
                'background:' + entry[1] + '"></span>' +
                '<span>' + entry[0] + '</span>' +
                '</div>';
        }).join('');

    return div;
};

// Add the legend by default since tunnels are visible by default
legend.addTo(map);

// 2. Define the Toggle Button
var toggleControl = L.control({ position: 'bottomright' });

toggleControl.onAdd = function() {
    var btn = L.DomUtil.create('button', 'leaflet-control');

    btn.textContent = 'Hide Tunnels';
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

    L.DomEvent.disableClickPropagation(btn);
    L.DomEvent.disableScrollPropagation(btn);

    btn.addEventListener('click', function() {
        if (!tunnelLayer) return;

        if (tunnelsVisible) {
            // HIDE LAYER AND LEGEND
            map.removeLayer(tunnelLayer);
            map.removeControl(legend);
            btn.textContent = 'Show Tunnels';
            btn.style.background = '#BF112B';
        } else {
            // SHOW LAYER AND LEGEND
            map.addLayer(tunnelLayer);
            legend.addTo(map);
            btn.textContent = 'Hide Tunnels';
            btn.style.background = '#1a1a1a';
        }
        tunnelsVisible = !tunnelsVisible;
    });

    return btn;
};

toggleControl.addTo(map);

// 3. Load/Render Tunnels
fetch('geojson-files/cu-tunnels.geojson')
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Could not load cu-tunnels.geojson.');
        }
        return response.json();
    })
    .then(function(data) {
        // Expose raw GeoJSON globally so Navigation.js can build a routing graph
        window.tunnelGeoJSON = data;

        tunnelLayer = L.geoJSON(data, {
            filter: function(feature) {
                var name = feature.properties.name || feature.properties.ref || '';
                return tunnelColors.hasOwnProperty(name);
            },
            style: function(feature) {
                var name = feature.properties.name || feature.properties.ref || '';
                return {
                    color:    tunnelColors[name] || defaultColor,
                    weight:   6,
                    opacity:  0.75,
                    lineJoin: 'round',
                    lineCap:  'round'
                };
            },
            onEachFeature: function(feature, layer) {
                var name = feature.properties.name || feature.properties.ref || 'Tunnel';
                layer.bindTooltip(name, { sticky: true });
            }
        }).addTo(map);
    })
    .catch(function(err) {
        console.error('TunnelOverlay error:', err.message);
    });