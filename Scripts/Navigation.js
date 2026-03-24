// Wait until the page loads
document.addEventListener("DOMContentLoaded", function() {

    // Ensure the map exists from TopMapOverlay.js
    if (!window.map) {
        console.error("Map not initialized! Make sure TopMapOverlay.js loads before Navigation.js");
        return;
    }

    var map = window.map;

    // ─────────────────────────────────────────────────────────────────────────
    // Location Coordinates
    // All entries are used for outdoor routing.
    // Tunnel routing will snap to the nearest tunnel node — buildings not
    // connected to the tunnel network will be rejected via TUNNEL_SNAP_THRESHOLD.
    // ─────────────────────────────────────────────────────────────────────────
    var locationCoords = {
        // Core Buildings
        "UC":                           [45.3831,             -75.6976            ],
        "Steacie":                      [45.38281441419413,   -75.69688916910961  ],
        "Health Science":               [45.38324661752201,   -75.69656801381647  ],
        "Herzberg":                     [45.38212041306241,   -75.69763612887995  ],
        "Richcraft":                    [45.38240733558676,   -75.69614797664528  ],
        "Paterson":                     [45.38190502158383,   -75.69863106789164  ],
        "Southam":                      [45.381250731224846,  -75.69961203445604  ],
        "Mackenzie":                    [45.384642722316215,  -75.6982928326831   ],
        "Minto":                        [45.38519202993685,   -75.69697466818896  ],
        "Field House":                  [45.38690570693125,   -75.69452948807854  ],
        "Alumni":                       [45.38656776841287,   -75.69332757666885  ],
        "Nicol":                        [45.384337212370724,  -75.696782259743    ],
        "Tory":                         [45.38413733826662,   -75.69852807495623  ],
        "Azireli Pavilion":             [45.38288725287422,   -75.69901031383795  ],
        "Azireli Theatre":              [45.383349293253715,  -75.69879344442803  ],
        "MacOdrum":                     [45.381967540245654,  -75.69971313252802  ],
        "Ice House":                    [45.385820482019405,  -75.6926284170632   ],
        "Architecture":                 [45.38401319521936,   -75.69747845760243  ],

        // Missing Academic/Misc. Buildings
        "Dunton Tower":                 [45.38267,            -75.6993105         ],
        "Loeb":                         [45.3809161,          -75.6990911         ],
        "HCI":                          [45.3806226,          -75.6997666         ],
        "VSIM":                         [45.3805,             -75.7001            ], // rough co-ordinates, verify after putting into co-ords in Navigation.js and the html file
        "SSRB":                         [45.3804167,          -75.6999805         ],
        "ARISE":                        [45.3812685,          -75.6980839         ],
        "St. Patricks":                 [45.3874575,          -75.698296          ],
        "Pigiarvik":                    [45.383386,           -75.6943563         ],
        "Nesbitt":                      [45.3839255,          -75.693274          ],
        "National Wildlife":            [45.384096,           -75.692662          ],
        "CTTC":                         [45.3845025,          -75.693652          ],
        "Maintenance Building":         [45.384479,           -75.694682          ],
        "Colonel By Childcare":         [45.385488,           -75.694131          ],
        "Engineering Design Centre":    [45.384900,           -75.698153          ],

        // The remaining athletics buildings
        "Athletics":                    [45.3862895,          -75.694216          ],
        "Tennis Centre":                [45.388069,           -75.6949791         ],
        "Norm Fenn Gym":                [45.385741,           -75.693360          ],

        // All of the residences
        "Teraanga Commons":             [45.387111,           -75.6971102         ],
        "Prescott House":               [45.385860,           -75.697485          ],
        "Frontenac House":              [45.3859707,          -75.698298          ],
        "Lanark House":                 [45.385746,           -75.6982275         ],
        "Renfrew House":                [45.386128,           -75.6971775         ],
        "Lennox and Addington House":   [45.3863945,          -75.697097          ],
        "Glengarry House":              [45.386695,           -75.6972745         ],
        "Grenville House":              [45.3865069,          -75.6984915         ],
        "Russell House":                [45.3869282,          -75.698525          ],
        "Stormont House":               [45.387678,           -75.6971526         ],
        "Dundas House":                 [45.387795,           -75.697635          ],
        "Leeds House":                  [45.3879326,          -75.698571          ],
        "Rideau House":                 [45.3884999,          -75.6974586         ],

        // Transit Stops
        "O-Train":          [45.3855925,           -75.6959248         ],
        "Bus 5813":         [45.3849696,           -75.6965033         ],
        "Bus 6680":         [45.3929817,           -75.6957757         ],
        "Bus 6612":         [45.3879025,           -75.6967321         ],
        "Bus 6790":         [45.3894500,           -75.6951220         ],
        "Bus 6610":         [45.3855198,           -75.6948046         ],
        "Bus 6611":         [45.3872704,           -75.6954751         ],
        "Bus 4881":         [45.3841436,           -75.6933554         ],

        // Parking Lots
        "P1":               [45.38095865989225,   -75.7004369622975   ],
        "P3":               [45.38484857155134,   -75.69266790267329  ],
        "P4":               [45.385361689601964,  -75.69536715332391  ],
        "P5":               [45.387311208285574,  -75.69319728442375  ],
        "P6":               [45.389489214326865,  -75.69884147064522  ],
        "P7":               [45.39068,             -75.69671           ],
        "P10":              [45.384836400058404,  -75.69322679132509  ],
        "P11":              [45.38490638610292,   -75.69398930607959  ],
        "P14":              [45.38451689745194,   -75.69154146044873  ],
        "P15":              [45.3855840407557,    -75.69374023053521  ],
        "P18":              [45.38933918729486,   -75.69710156463712  ],

        // Food and Drink
        "T&J":                   [45.38444691092358,  -75.69381600727175  ],
        "The Caf":               [45.38690139455082,  -75.69889036376755  ],
        "Starbucks-MacOdrum":    [45.387070932495874, -75.6972810383368   ],
        "Starbucks-UC":          [45.382329196114426, -75.69949455255241  ],
        "Starbucks-Residence":   [45.383029302424184, -75.69818967752366  ],
        "TimHortons-UC":         [45.38606570756748,  -75.69386366444945  ],
        "TimHortons-River":      [45.382162690068874, -75.69590492771918  ],
        "Chatime":               [45.3842765085715,   -75.69845175033419  ],
        "Bridgehead":            [45.383893101418984, -75.69732530808677  ]
    };

    // ─────────────────────────────────────────────────────────────────────────
    // Tunnel Routing — Helper Functions
    // ─────────────────────────────────────────────────────────────────────────

    /**
     * Haversine distance in metres between two [lat, lng] points.
     */
    function haversine(a, b) {
        var R = 6371000;
        var phi1 = a[0] * Math.PI / 180, phi2 = b[0] * Math.PI / 180;
        var dPhi = (b[0] - a[0]) * Math.PI / 180;
        var dLam = (b[1] - a[1]) * Math.PI / 180;
        var x = Math.sin(dPhi / 2) * Math.sin(dPhi / 2)
            + Math.cos(phi1) * Math.cos(phi2)
            * Math.sin(dLam / 2) * Math.sin(dLam / 2);
        return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
    }

    /**
     * Stable string key for a [lat, lng] coordinate.
     * Uses 7 decimal places — matches GeoJSON precision.
     */
    function coordKey(lat, lng) {
        return lat.toFixed(7) + ',' + lng.toFixed(7);
    }

    /**
     * Build an undirected weighted adjacency graph from the tunnel GeoJSON.
     * Excludes railway features (Trillium Line) and non-pedestrian ways.
     * Returns { graph, coords } where:
     * graph  — { key: [{key, dist}, ...] }
     * coords — { key: [lat, lng] }
     */
    function buildTunnelGraph(geojson) {
        var graph  = {};
        var coords = {};

        var pedestrianFeatures = geojson.features.filter(function(f) {
            var p = f.properties;
            return (
                f.geometry.type === 'LineString' &&
                p.tunnel &&
                !p.railway &&
                p.highway &&
                (p.highway === 'footway' || p.highway === 'path' || p.highway === 'cycleway')
            );
        });

        console.log('[TunnelRouter] Pedestrian tunnel features found:', pedestrianFeatures.length);

        pedestrianFeatures.forEach(function(feature) {
            // GeoJSON stores [lng, lat] — convert to [lat, lng] for Leaflet
            var points = feature.geometry.coordinates.map(function(c) {
                return [c[1], c[0]];
            });

            for (var i = 0; i < points.length; i++) {
                var k = coordKey(points[i][0], points[i][1]);
                coords[k] = points[i];
                if (!graph[k]) graph[k] = [];

                if (i > 0) {
                    var pk   = coordKey(points[i - 1][0], points[i - 1][1]);
                    var dist = haversine(points[i], points[i - 1]);
                    // Add both directions (undirected)
                    graph[k].push({ key: pk, dist: dist });
                    graph[pk].push({ key: k,  dist: dist });
                }
            }
        });

        console.log('[TunnelRouter] Graph nodes:', Object.keys(graph).length);
        return { graph: graph, coords: coords };
    }

    /**
     * Find the graph node nearest to a given [lat, lng] point.
     * Returns { key, dist } — dist is in metres.
     */
    function nearestNode(coords, point) {
        var bestKey  = null;
        var bestDist = Infinity;
        Object.keys(coords).forEach(function(k) {
            var d = haversine(point, coords[k]);
            if (d < bestDist) { bestDist = d; bestKey = k; }
        });
        return { key: bestKey, dist: bestDist };
    }

    /**
     * Dijkstra's shortest-path algorithm.
     * Returns an ordered array of [lat, lng] waypoints, or null if unreachable.
     */
    function dijkstra(graph, coords, startKey, endKey) {
        var dist    = {};
        var prev    = {};
        var visited = {};
        var queue   = [[0, startKey]];

        Object.keys(graph).forEach(function(k) { dist[k] = Infinity; });
        dist[startKey] = 0;

        while (queue.length > 0) {
            queue.sort(function(a, b) { return a[0] - b[0]; });
            var entry = queue.shift();
            var d = entry[0], u = entry[1];

            if (visited[u]) continue;
            visited[u] = true;
            if (u === endKey) break;

            var neighbours = graph[u] || [];
            for (var i = 0; i < neighbours.length; i++) {
                var v   = neighbours[i].key;
                var w   = neighbours[i].dist;
                var alt = d + w;
                // Guard: treat undefined distance entries as Infinity
                if (alt < (dist[v] !== undefined ? dist[v] : Infinity)) {
                    dist[v] = alt;
                    prev[v] = u;
                    queue.push([alt, v]);
                }
            }
        }

        // Unreachable: dist[endKey] never set or still at Infinity
        if (dist[endKey] === undefined || dist[endKey] === Infinity) return null;

        // Reconstruct path from prev pointers
        var path = [];
        var cur  = endKey;
        while (cur !== undefined) {
            if (!coords[cur]) break; // safety guard
            path.unshift(coords[cur]);
            cur = prev[cur];
        }

        // A valid route must have at least 2 points
        return path.length >= 2 ? path : null;
    }

    // ─────────────────────────────────────────────────────────────────────────
    // State
    // ─────────────────────────────────────────────────────────────────────────
    var currentMode = 'outdoor'; // 'outdoor' | 'tunnel'

    /**
     * ALL map layers added by the tunnel router are pushed into this array:
     * glow polyline, main route polyline, start marker, end marker.
     * Call clearTunnelLayers() to remove every one of them at once.
     */
    var tunnelLayers = [];

    function clearTunnelLayers() {
        tunnelLayers.forEach(function(layer) {
            if (map.hasLayer(layer)) map.removeLayer(layer);
        });
        tunnelLayers = [];
    }

    // Maximum metres a building can be from the tunnel network to be
    // considered "tunnel-accessible".
    var TUNNEL_SNAP_THRESHOLD = 200; // metres

    // ─────────────────────────────────────────────────────────────────────────
    // Routing Control  (outdoor, OSRM-based)
    // ─────────────────────────────────────────────────────────────────────────
    var routingControl = L.Routing.control({
        waypoints: [],
        router: L.Routing.osrmv1({
            serviceUrl: 'https://router.project-osrm.org/route/v1',
            profile: 'foot'
        }),
        routeWhileDragging: false,
        addWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: true,
        altLineOptions: {
            styles: [{ color: '#141e30', opacity: 0.4, weight: 6 }]
        },
        lineOptions: {
            styles: [{ color: '#00e0ff', opacity: 0.9, weight: 6 }]
        }
    }).addTo(map);

    // ─────────────────────────────────────────────────────────────────────────
    // Mode Toggle UI  — injected above the route form controls
    // ─────────────────────────────────────────────────────────────────────────
    var routeBtn    = document.getElementById("routeBtn");
    var resetBtn    = document.getElementById("resetBtn");
    var startSelect = document.getElementById("startSelect");
    var endSelect   = document.getElementById("endSelect");

    var panel = routeBtn
        ? (routeBtn.closest('div, form, section, aside') || routeBtn.parentElement)
        : null;

    if (panel) {
        var styleTag = document.createElement('style');
        styleTag.textContent = [
            '.route-mode-btn {',
            '  padding:10px 14px; border-radius:5px; font-size:13px; font-weight:700;',
            '  letter-spacing:0.04em; cursor:pointer; border:2px solid #555;',
            '  background:#2a2a2a; color:#ccc; transition:background 0.2s, color 0.2s;',
            '  white-space:nowrap;',
            '}',
            '.route-mode-btn.active {',
            '  background:#BF112B; color:#fff; border-color:#BF112B;',
            '}'
        ].join('\n');
        document.head.appendChild(styleTag);

        var outdoorBtn = document.createElement('button');
        outdoorBtn.id = 'modeOutdoorBtn';
        outdoorBtn.className = 'route-mode-btn active';
        outdoorBtn.textContent = 'USE OUTDOOR PATH';

        var tunnelBtn = document.createElement('button');
        tunnelBtn.id = 'modeTunnelBtn';
        tunnelBtn.className = 'route-mode-btn';
        tunnelBtn.textContent = 'USE TUNNEL PATH';

        panel.insertBefore(tunnelBtn,  panel.firstChild);
        panel.insertBefore(outdoorBtn, panel.firstChild);

        function setMode(mode) {
            currentMode = mode;
            if (mode === 'outdoor') {
                outdoorBtn.classList.add('active');
                tunnelBtn.classList.remove('active');
            } else {
                tunnelBtn.classList.add('active');
                outdoorBtn.classList.remove('active');
            }
            // Clear ALL route layers when switching modes
            routingControl.setWaypoints([]);
            clearTunnelLayers();
        }

        outdoorBtn.addEventListener('click', function() { setMode('outdoor'); });
        tunnelBtn.addEventListener('click',  function() { setMode('tunnel');  });
    }

    // ─────────────────────────────────────────────────────────────────────────
    // UC Shortcut Button
    // ─────────────────────────────────────────────────────────────────────────
    var ucButton = document.getElementById("gotoUC");
    if (ucButton) {
        ucButton.onclick = function() {
            map.setView([45.3831, -75.6976], 18);
        };
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Get Directions
    // ─────────────────────────────────────────────────────────────────────────
    if (routeBtn) {
        routeBtn.addEventListener("click", function() {
            var startVal = startSelect.value;
            var endVal   = endSelect.value;

            if (!startVal || !endVal) {
                alert("Please select both a Start and a Destination.");
                return;
            }
            if (startVal === endVal) {
                alert("Start and destination are the same location.");
                return;
            }

            // ── OUTDOOR MODE ──────────────────────────────────────────────
            if (currentMode === 'outdoor') {
                clearTunnelLayers();
                var startCoords = locationCoords[startVal];
                var endCoords   = locationCoords[endVal];
                routingControl.setWaypoints([
                    L.latLng(startCoords[0], startCoords[1]),
                    L.latLng(endCoords[0],   endCoords[1])
                ]);
                return;
            }

            // ── TUNNEL MODE ───────────────────────────────────────────────
            if (!window.tunnelGeoJSON) {
                alert("Tunnel data is still loading — please try again in a moment.");
                return;
            }

            // Clear everything before drawing a fresh route
            routingControl.setWaypoints([]);
            clearTunnelLayers();

            try {
                var graphData = buildTunnelGraph(window.tunnelGeoJSON);
                var graph     = graphData.graph;
                var coords    = graphData.coords;

                if (Object.keys(graph).length === 0) {
                    alert("Tunnel graph could not be built. Check that cu-tunnels.geojson loaded correctly.");
                    return;
                }

                var startPoint = locationCoords[startVal];
                var endPoint   = locationCoords[endVal];

                var snapStart = nearestNode(coords, startPoint);
                var snapEnd   = nearestNode(coords, endPoint);

                console.log('[TunnelRouter] Snap distances (m) —',
                    startVal + ':', snapStart.dist.toFixed(1),
                    '|', endVal + ':', snapEnd.dist.toFixed(1));

                if (snapStart.dist > TUNNEL_SNAP_THRESHOLD) {
                    alert(
                        '"' + startVal + '" does not appear to be connected to the underground tunnel network.\n' +
                        'Please choose a different start location, or switch to Outdoor routing.'
                    );
                    return;
                }
                if (snapEnd.dist > TUNNEL_SNAP_THRESHOLD) {
                    alert(
                        '"' + endVal + '" does not appear to be connected to the underground tunnel network.\n' +
                        'Please choose a different destination, or switch to Outdoor routing.'
                    );
                    return;
                }

                var path = dijkstra(graph, coords, snapStart.key, snapEnd.key);

                console.log('[TunnelRouter] Path result:', path ? path.length + ' nodes' : 'null (no path found)');

                if (!path) {
                    alert(
                        'No underground tunnel path could be found between "' + startVal + '" and "' + endVal + '".\n' +
                        'The two buildings may be on disconnected tunnel branches.\n' +
                        'Try Outdoor routing instead.'
                    );
                    return;
                }

                var latLngs = path.map(function(p) { return L.latLng(p[0], p[1]); });

                // ── Glow added FIRST so it renders underneath the main route ──
                var glowLayer = L.polyline(latLngs, {
                    color:    '#ffffff',
                    weight:   14,
                    opacity:  0.18,
                    lineJoin: 'round',
                    lineCap:  'round'
                }).addTo(map);
                tunnelLayers.push(glowLayer);

                // ── Main route line rendered on top of the glow ──
                var routeLayer = L.polyline(latLngs, {
                    color:    '#00e0ff',
                    weight:   7,
                    opacity:  0.95,
                    lineJoin: 'round',
                    lineCap:  'round'
                }).addTo(map);
                tunnelLayers.push(routeLayer);

                // ── Start marker ──
                var startMarker = L.circleMarker(latLngs[0], {
                    radius: 8, fillColor: '#00e0ff', color: '#fff',
                    weight: 2, fillOpacity: 1
                }).bindTooltip('Start: ' + startVal, { permanent: false }).addTo(map);
                tunnelLayers.push(startMarker);

                // ── End marker ──
                var endMarker = L.circleMarker(latLngs[latLngs.length - 1], {
                    radius: 8, fillColor: '#BF112B', color: '#fff',
                    weight: 2, fillOpacity: 1
                }).bindTooltip('End: ' + endVal, { permanent: false }).addTo(map);
                tunnelLayers.push(endMarker);

                map.fitBounds(routeLayer.getBounds(), { padding: [40, 40] });

            } catch (err) {
                console.error('[TunnelRouter] Error during tunnel routing:', err);
                alert('An unexpected error occurred while computing the tunnel route.\nSee the browser console for details.');
            }
        });
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Reset — clears ALL route layers (outdoor + tunnel)
    // ─────────────────────────────────────────────────────────────────────────
    if (resetBtn) {
        resetBtn.addEventListener("click", function() {
            routingControl.setWaypoints([]);
            clearTunnelLayers();
            startSelect.value = "";
            endSelect.value   = "";
            map.setView([45.3831, -75.6976], 16);
        });
    }

});