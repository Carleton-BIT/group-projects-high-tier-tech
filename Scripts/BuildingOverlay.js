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

var selectedLayer = null;

// ─────────────────────────────────────────────────────────────────────────────
// Info Panel — injected once into the page, shown/hidden on click
// ─────────────────────────────────────────────────────────────────────────────
(function createInfoPanel() {
    var style = document.createElement('style');
    style.textContent = `
        #building-info-panel {
            display: none;
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1000;
            background: #1a1a1a;
            color: #f0f0f0;
            border-radius: 8px;
            box-shadow: 0 6px 24px rgba(0,0,0,0.45);
            min-width: 320px;
            max-width: 480px;
            font-family: 'Helvetica Neue', Arial, sans-serif;
            overflow: hidden;
        }
        #building-info-panel.visible {
            display: block;
        }
        .bip-header {
            background: #BF112B;
            padding: 12px 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .bip-title {
            font-size: 1rem;
            font-weight: 700;
            color: #fff;
            margin: 0;
            letter-spacing: 0.03em;
        }
        .bip-abbr {
            font-size: 0.75rem;
            background: rgba(255,255,255,0.2);
            color: #fff;
            padding: 2px 8px;
            border-radius: 3px;
            font-weight: 600;
            letter-spacing: 0.06em;
        }
        .bip-close {
            background: none;
            border: none;
            color: #fff;
            font-size: 1.2rem;
            cursor: pointer;
            line-height: 1;
            padding: 0 0 0 12px;
            opacity: 0.8;
        }
        .bip-close:hover { opacity: 1; }
        .bip-body {
            padding: 14px 16px;
        }
        .bip-description {
            font-size: 0.88rem;
            line-height: 1.5;
            color: #cccccc;
            margin-bottom: 12px;
        }
        .bip-section-label {
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: #BF112B;
            margin-bottom: 5px;
        }
        .bip-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            margin-bottom: 12px;
        }
        .bip-tag {
            background: #2e2e2e;
            color: #dddddd;
            font-size: 0.75rem;
            padding: 3px 9px;
            border-radius: 3px;
        }
        .bip-link {
            display: inline-block;
            margin-top: 4px;
            font-size: 0.8rem;
            color: #BF112B;
            text-decoration: none;
            font-weight: 600;
        }
        .bip-link:hover { text-decoration: underline; }
        .bip-osm-row {
            font-size: 0.78rem;
            color: #888;
            margin-top: 10px;
            border-top: 1px solid #333;
            padding-top: 8px;
        }
    `;
    document.head.appendChild(style);

    var panel = document.createElement('div');
    panel.id = 'building-info-panel';
    panel.innerHTML = `
        <div class="bip-header">
            <div style="display:flex;align-items:center;gap:8px">
                <span class="bip-title" id="bip-name">Building Name</span>
                <span class="bip-abbr"  id="bip-abbr"></span>
            </div>
            <button class="bip-close" id="bip-close">✕</button>
        </div>
        <div class="bip-body">
            <p class="bip-description" id="bip-desc"></p>
            <div id="bip-depts-block">
                <div class="bip-section-label">Departments</div>
                <div class="bip-tags" id="bip-depts"></div>
            </div>
            <div id="bip-features-block">
                <div class="bip-section-label">Features</div>
                <div class="bip-tags" id="bip-features"></div>
            </div>
            <div id="bip-osm-block" class="bip-osm-row"></div>
            <a class="bip-link" id="bip-link" href="#" target="_blank"></a>
        </div>
    `;
    document.body.appendChild(panel);

    document.getElementById('bip-close').addEventListener('click', function() {
        closeInfoPanel();
    });
})();

function openInfoPanel(name, osmProperties) {
    var panel   = document.getElementById('building-info-panel');
    var info    = (typeof buildingInfo !== 'undefined') ? buildingInfo[name] : null;

    // Title + abbr
    document.getElementById('bip-name').textContent = name || 'Unknown Building';
    document.getElementById('bip-abbr').textContent = info ? (info.abbr || '') : '';

    // Description
    document.getElementById('bip-desc').textContent = info
        ? info.description
        : 'No additional information available for this building.';

    // Departments
    var deptsBlock = document.getElementById('bip-depts-block');
    var deptsEl    = document.getElementById('bip-depts');
    if (info && info.departments && info.departments.length) {
        deptsEl.innerHTML = info.departments.map(function(d) {
            return '<span class="bip-tag">' + d + '</span>';
        }).join('');
        deptsBlock.style.display = 'block';
    } else {
        deptsBlock.style.display = 'none';
    }

    // Features
    var featBlock = document.getElementById('bip-features-block');
    var featEl    = document.getElementById('bip-features');
    if (info && info.features && info.features.length) {
        featEl.innerHTML = info.features.map(function(f) {
            return '<span class="bip-tag">' + f + '</span>';
        }).join('');
        featBlock.style.display = 'block';
    } else {
        featBlock.style.display = 'none';
    }

    // OSM fallback properties (address, opening hours, etc.)
    var osmBlock = document.getElementById('bip-osm-block');
    var osmParts = [];
    if (osmProperties) {
        if (osmProperties['addr:street']) {
            var num    = osmProperties['addr:housenumber'] || '';
            var street = osmProperties['addr:street'] || '';
            osmParts.push('📍 ' + (num ? num + ' ' : '') + street);
        }
        if (osmProperties['opening_hours']) {
            osmParts.push('🕐 ' + osmProperties['opening_hours']);
        }
        if (osmProperties['phone'] || osmProperties['contact:phone']) {
            osmParts.push('📞 ' + (osmProperties['phone'] || osmProperties['contact:phone']));
        }
    }
    osmBlock.innerHTML  = osmParts.join('<br>');
    osmBlock.style.display = osmParts.length ? 'block' : 'none';

    // Website link
    var linkEl = document.getElementById('bip-link');
    if (info && info.website) {
        linkEl.href        = info.website;
        linkEl.textContent = 'Visit Website →';
        linkEl.style.display = 'inline-block';
    } else {
        linkEl.style.display = 'none';
    }

    panel.classList.add('visible');
}

function closeInfoPanel() {
    document.getElementById('building-info-panel').classList.remove('visible');
    if (selectedLayer) {
        selectedLayer.setStyle(buildingStyle);
        selectedLayer = null;
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// Load and Render Buildings
// ─────────────────────────────────────────────────────────────────────────────
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
                    if (selectedLayer !== layer) {
                        layer.setStyle(buildingStyle);
                    }
                    if (name) {
                        layer.closeTooltip();
                    }
                });

                // ── CLICK ────────────────────────────────
                layer.on('click', function() {
                    // Clicking the same building again closes the panel
                    if (selectedLayer === layer) {
                        closeInfoPanel();
                        return;
                    }

                    // Deselect previous building
                    if (selectedLayer && selectedLayer !== layer) {
                        selectedLayer.setStyle(buildingStyle);
                    }

                    selectedLayer = layer;
                    layer.setStyle(buildingHoverStyle);
                    layer.bringToFront();

                    if (name) {
                        openInfoPanel(name, feature.properties);
                    }
                });
            }
        }).addTo(map);
    })
    .catch(function(err) {
        console.error('BuildingOverlay error:', err.message);
    });