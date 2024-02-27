

var map = L.map('mapid').setView([35.1882, -101.9358], 13); // Coordinates for Wildcat Bluff

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);



var marker = L.marker([35.1882, -101.9358]).addTo(map);
marker.bindPopup("<b>Wildcat Bluff Nature Center</b><br>Amarillo, TX").openPopup();

var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);
var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems
    }
});
map.addControl(drawControl);

map.on(L.Draw.Event.CREATED, function (event) {
    var layer = event.layer;
    drawnItems.addLayer(layer);
});

function addMarkersToMap(sites) {
    sites.forEach(site => {
        var marker = L.marker([site.latitude, site.longitude]).addTo(map);
        marker.bindPopup(`<b>${site.name}</b><br>${site.description}`);
    });
}

fetchPoints(addMarkersToMap);
