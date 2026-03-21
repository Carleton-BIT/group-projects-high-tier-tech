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

// 2. TOGGLE BUTTON CONTROL
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

toggleControl.addTo(map);}