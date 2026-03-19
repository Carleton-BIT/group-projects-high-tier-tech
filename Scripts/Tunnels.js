// Load/Render Tunnels
fetch('geojson-files/cu-tunnels.geojson')
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Could not load cu-tunnels.geojson.');
        }
        return response.json();
    })
    .then(function(data) {
        tunnelLayer = L.geoJSON(data, {
            filter: function(feature) {
                var name = feature.properties.name
                    || feature.properties.ref
                    || '';
                return tunnelColors.hasOwnProperty(name);
            },
            style: function(feature) {
                var name = feature.properties.name
                    || feature.properties.ref
                    || '';
                return {
                    color:    tunnelColors[name] || defaultColor,
                    weight:   6,
                    opacity:  0.75,
                    lineJoin: 'round',
                    lineCap:  'round'
                };
            },
            // Bind a tooltip showing the tunnel name on hover
            onEachFeature: function(feature, layer) {
                var name = feature.properties.name
                    || feature.properties.ref
                    || 'Tunnel';
                layer.bindTooltip(name, { sticky: true });
            }
        }).addTo(map);
    })
    .catch(function(err) {
        console.error('TunnelOverlay error:', err.message);
    });

// Toggle Button for Tunnels
var toggleControl = L.control({ position: 'bottomright' });

toggleControl.onAdd = function() {
    var btn = L.DomUtil.create('button');

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

    // Prevent map click/drag events firing through the button
    L.DomEvent.disableClickPropagation(btn);

    btn.addEventListener('click', function() {
        if (!tunnelLayer) return; // GeoJSON not loaded yet

        if (tunnelsVisible) {
            map.removeLayer(tunnelLayer);
            btn.textContent = 'Show Tunnels';
            btn.style.background = '#BF112B'; // Carleton red when off
        } else {
            map.addLayer(tunnelLayer);
            btn.textContent = 'Hide Tunnels';
            btn.style.background = '#1a1a1a';
        }
        tunnelsVisible = !tunnelsVisible;
    });

    return btn;
};

toggleControl.addTo(map);

// Legend Overlay
var legend = L.control({ position: 'bottomleft' });

legend.onAdd = function() {
    var div = L.DomUtil.create('div');
    div.style.cssText = [
        'background: rgba(255,255,255,0.92)',
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

legend.addTo(map);