import { fetchPoints } from './supabase-client.js';


document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing map...');
    var map = L.map('mapid').setView([35.2425,-101.9445], 14);
    console.log('Map initialized.');

    var currentPointIndex = 0; // Start with the first point
    var allPoints = []; // This should be filled with your points data

    L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)',
        maxNativeZoom: 17,
        minZoom: 14
    }).addTo(map);

    var normalIcon = L.icon({
        iconUrl: 'https://ogallala-life.github.io/Wildcat_map/assets/leaf-green.png',
        shadowUrl: 'https://ogallala-life.github.io/Wildcat_map/assets/leaf-shadow.png',
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    
    var highlightedIcon = L.icon({
        iconUrl: 'https://ogallala-life.github.io/Wildcat_map/assets/leaf-red.png',
        shadowUrl: 'https://ogallala-life.github.io/Wildcat_map/assets/leaf-shadow.png',
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });   
    
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


    function focusOnPoint(index) {
        // Reset all markers to the normal icon
        markersArray.forEach(marker => {
            marker.setIcon(normalIcon);
        });
    
        // Change the icon of the current marker
        var currentMarker = markersArray[index];
        if (currentMarker) {
            currentMarker.setIcon(highlightedIcon);
            var latLng = currentMarker.getLatLng();
            map.setView(latLng, 18); // Adjust zoom level as needed
            map.panBy([xPixels, yPixels]);
            currentMarker.openPopup();
        }
    }

    var markersArray = [];

    var markersCluster = L.markerClusterGroup({
        maxClusterRadius: 25 // Change this value to affect when clusters break apart
    });

    function addMarkersToMap(sites) {
        allPoints = sites; 
        // Clear the existing markers from the cluster group
        markersCluster.clearLayers();

        sites.forEach((site, index) => {
            var marker = L.marker([site.latitude, site.longitude], {icon: normalIcon});
            marker.bindPopup(`<b>${site.name}</b><br>${site.description}`);
            markersArray[index] = marker;
            // Add the marker to the cluster group instead of directly to the map
            markersCluster.addLayer(marker);
        });

        // Add the cluster group to the map
        map.addLayer(markersCluster);
    }

    fetchPoints(addMarkersToMap); 

    var customControl = L.Control.extend({
        options: {
          position: 'bottomright' 
        },
      
        onAdd: function (map) {
          var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
      
          var prevButton = L.DomUtil.create('button', 'btn-prev', container);
          prevButton.innerHTML = 'Prev';
          L.DomEvent.on(prevButton, 'click', function () {
            if (currentPointIndex > 0) {
              currentPointIndex -= 1;
              focusOnPoint(currentPointIndex);
            }
          });
      
          var nextButton = L.DomUtil.create('button', 'btn-next', container);
          nextButton.innerHTML = 'Next';
          L.DomEvent.on(nextButton, 'click', function () {
            if (currentPointIndex < allPoints.length - 1) {
              currentPointIndex += 1;
              focusOnPoint(currentPointIndex);
            }
          });
      
          // Prevent map clicks when clicking the buttons
          L.DomEvent.disableClickPropagation(container);
      
          return container;
        }
      });
      
      // Add the new control to the map
      map.addControl(new customControl());
});


