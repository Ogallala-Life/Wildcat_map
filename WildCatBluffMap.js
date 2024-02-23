// Initialize the map
var map = L.map('map',{
  center: [35.2425,-101.9445],
  zoom: 16,
  minZoom: 16,   //Set the minimum allowed zoom level
  maxBounds: L.latLngBounds([35.233579, -101.958148], [35.250973, -101.931660]) // Set the maximum bounds
  });


// Add a street view tile layer
var streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a satellite tile layer (hidden by default)
var satelliteLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGJja2lyayIsImEiOiJjbHJyMjE5ZTAwOW9qMmlva2twMmN2cXhjIn0.if4mRdsJt7AQwMHeayh-bQ', {
  attribution: '© OpenStreetMap contributors, © Mapbox',
  id: 'mapbox/satellite-v9',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoidGJja2lyayIsImEiOiJjbHJyMjE5ZTAwOW9qMmlva2twMmN2cXhjIn0.if4mRdsJt7AQwMHeayh-bQ'
});

//############################################################################


//Add event listeners for photo gallery buttons
var currentIndex = 0;

document.getElementById('next-arrow').addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % structurePoints[currentPointIndex].images.length;
  updateGalleryImage();
});

document.getElementById('prev-arrow').addEventListener('click', function() {
  currentIndex = (currentIndex - 1 + structurePoints[currentPointIndex].images.length) % structurePoints[currentPointIndex].images.length;
  updateGalleryImage();
});

// Function to update the gallery image
function updateGalleryImage() {
  document.getElementById('gallery-image').src = structurePoints[currentPointIndex].images[currentIndex];
}



//############################################################################


// Add event listeners for next and previous point buttons
document.getElementById('next-point-btn').addEventListener('click', function() {
  // Move to the next point
  currentPointIndex = (currentPointIndex + 1) % structurePoints.length;
  updateMarkerInfo();
});

document.getElementById('prev-point-btn').addEventListener('click', function() {
  // Move to the previous point
  currentPointIndex = (currentPointIndex - 1 + structurePoints.length) % structurePoints.length;
  updateMarkerInfo();
});

// Function to update marker info
function updateMarkerInfo() {
  var point = structurePoints[currentPointIndex];
  var markerInfoElement = document.getElementById('info-container');
  markerInfoElement.innerHTML = `
    <h3>${point.title}</h3>
    <p>${point.description}</p>
  `;
  currentIndex = 0;
  updateGalleryImage();
}

function updateGalleryImage() {
  document.getElementById('gallery-image').src = structurePoints[currentPointIndex].images[currentIndex];
}

//############################################################################






var landmarkPoints = [
  //          Landmark Points
  {
    latlng: [35.235, -101.93965],
    title: 'HQ',
    images: [ 'Photos/2024_Photos/1January/Sections/Landmarks/TestPhoto.jpg'
    ],
    description: 'Description for Point 1.'
  },
  {
    latlng: [35.242103, -101.948720],
    title: 'Wildcat Bluff',
    images: ['images/image2.jpg', 'images/image2_2.jpg'], // Array of image paths
    description: 'Description for Point 2.'
  },
  {
    latlng: [35.239369, -101.949653],
    title: 'Windmill',
    images: ['images/image2.jpg', 'images/image2_2.jpg'], // Array of image paths
    description: 'Description for Point 2.'
  }
]


// Array of Structure points with information
var structurePoints = [
  
  //   {
  //   latlng: [, ],
  //   title: '',
  //   images: ['', ''], // Array of image paths
  //   description: ''
  // },
  
  //          Section 1 Points

   {
     latlng: [35.2487933333333,-101.944646666667],
     title: 'S1_Point 1',
     folderPath: 'Section_1',
     ttle: 'S1D1_JAN',
     numOfPhotos: 3,
     images: [''], 
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
   },
  {
    latlng: [35.2487483333333,-101.945906666667],
    title: 'S1_Point 2',
    folderPath: 'Section_1',
    ttle: 'S1D2_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  },
  //{
  //  latlng: [],
  //  title: 'S1_Point 3',
  //  folderPath: 'Section_1/S1D3_JAN',
  //  ttle: 'S1D3_JAN',
  //  numOfPhotos: 2,
  //  images: [''], 
  //  description: ''
  //},
  {
    latlng: [35.248305,-101.94591],
    title: 'S1_Point 4',
    folderPath: 'Section_1',
    ttle: 'S1D4_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  },
  {
    latlng: [35.2479666666667,-101.945901666667],
    title: 'S1_Point 5',
    folderPath: 'Section_1',
    ttle: 'S1D5_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  },
  {
    latlng: [35.2478366666667,-101.945603333333],
    title: 'S1_Point 6',
    folderPath: 'Section_1',
    ttle: 'S1D6_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: ''
  },
 // {
 //   latlng: [],
 //   title: 'S1_Point 7',
 //   folderPath: 'Section_1',
 //   ttle: 'S1D7_JAN',
 //   numOfPhotos: 2,
 //   images: [''], 
 //   description: ''
 // },
 // {
 //   latlng: [],
 //   title: 'S1_Point 8',
 //   folderPath: 'Section_1',
 //   ttle: 'S1D8_JAN',
 //   numOfPhotos: 2,
 //   images: [''], 
 //   description: ''
 // },
  {
    latlng: [35.2474133333333,-101.945303333333],
    title: 'S1_Point 9',
    folderPath: 'Section_1',
    ttle: 'S1D9_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: ''
  },
  {
    latlng: [35.2473433333333,-101.945371666667],
    title: 'S1_Point 10',
    folderPath: 'Section_1',
    ttle: 'S1D10_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: ''
  },
  {
    latlng: [35.2471183333333,-101.94558],
    title: 'S1_Point 11',
    folderPath: 'Section_1',
    ttle: 'S1D11_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: ''
  },
  {
    latlng: [35.246965,-101.945966666667],
    title: 'S1_Point 12',
    folderPath: 'Section_1',
    ttle: 'S1D12_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: ''
  },
  {
    latlng: [35.24691,-101.946168333333],
    title: 'S1_Point 13',
    folderPath: 'Section_1',
    ttle: 'S1D13_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: ''
  },
  {
    latlng: [35.246865,-101.946505],
    title: 'S1_Point 14',
    folderPath: 'Section_1',
    ttle: 'S1D14_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: ''
  },
  {
    latlng: [35.2467166666667,-101.946815],
    title: 'S1_Point 15',
    folderPath: 'Section_1',
    ttle: 'S1D15_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: ''
  },

  //          Section 2 Points
  {
    latlng: [35.2464316666667,-101.947408333333],
    title: 'S2_Point 1',
    folderPath: 'Section_2',
    ttle: 'S2D1_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: ''
  },
  {
    latlng: [35.2462833333333,-101.947761666667],
    title: 'S2_Point 2',
    folderPath: 'Section_2',
    ttle: 'S2D2_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: ''
  },
  {
    latlng: [35.2460266666667,-101.948188333333],
    title: 'S2_Point 3',
    folderPath: 'Section_2',
    ttle: 'S2D3_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: ''
  },
  {
    latlng: [35.24607,-101.948391666667],
    title: 'S2_Point 4',
    folderPath: 'Section_2',
    ttle: 'S2D4_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: ''
  },
  {
    latlng: [35.2459916666667,-101.948588333333],
    title: 'S2_Point 5',
    folderPath: 'Section_2',
    ttle: 'S2D5_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: ''
  },
  {
    latlng: [35.2456716666667,-101.948418333333],
    title: 'S2_Point 6',
    folderPath: 'Section_2',
    ttle: 'S2D6_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: ''
  },
  {
    latlng: [35.2454383333333,-101.948245],
    title: 'S2_Point 7',
    folderPath: 'Section_2',
    ttle: 'S2D7_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: ''
  },
  {
    latlng: [35.245325,-101.947783333333],
    title: 'S2_Point 8',
    folderPath: 'Section_2',
    ttle: 'S2D8_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: ''
  },
  {
    latlng: [35.245345,-101.947328333333],
    title: 'S2_Point 9',
    folderPath: 'Section_2',
    ttle: 'S2D9_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: ''
  },
  {
    latlng: [35.2451783333333,-101.94715],
    title: 'S2_Point 10',
    folderPath: 'Section_2',
    ttle: 'S2D10_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: ''
  },
  {
    latlng: [35.24505,-101.947205],
    title: 'S2_Point 11',
    folderPath: 'Section_2',
    ttle: 'S2D11_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: ''
  },
  {
    latlng: [35.2448983333333,-101.947525],
    title: 'S2_Point 12',
    folderPath: 'Section_2',
    ttle: 'S2D12_JAN',
    numOfPhotos: 2,
    images: [''], 
    description: ''
  },
  //Stop Point
  //{
  //  latlng: ,
  //  title: 'S2_Point 13',
  //  images: ['', ''], // Array of image paths
  //  description: ''
  //},
  //{
  //  latlng: ,
  //  title: 'S2_Point 14',
  //  images: ['', ''], // Array of image paths
  //  description: ''
  //},
  {
    latlng: [35.2442916666667,-101.947928333333],
    title: 'S2_Point 15',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2442633333333,-101.948086666667],
    title: 'S2_Point 16',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.244355,-101.948436666667],
    title: 'S2_Point 17',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2443033333333,-101.949001666667],
    title: 'S2_Point 18',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2442833333333,-101.949376666667],
    title: 'S2_Point 19',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2442833333333,-101.949583333333],
    title: 'S2_Point 20',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2443566666667,-101.949815],
    title: 'S2_Point 21',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2444483333333,-101.94999],
    title: 'S2_Point 22',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2446766666667,-101.95043],
    title: 'S2_Point 23',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2446433333333,-101.950516666667],
    title: 'S2_Point 24',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2444983333333,-101.950646666667],
    title: 'S2_Point 25',
    images: ['', ''], // Array of image paths
    description: ''
  },
  
  //          Section 3 Points
  {
    latlng: [35.244425,-101.950566666667],
    title: 'S3_Point 1',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2441916666667,-101.950245],
    title: 'S3_Point 2',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2439733333333,-101.950763333333],
    title: 'S3_Point 3',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.24396,-101.950971666667],
    title: 'S3_Point 4',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.24391,-101.951271666667],
    title: 'S3_Point 5',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2434383333333,-101.9518],
    title: 'S3_Point 6',
    images: ['', ''], // Array of image paths
    description: ''
  },
  //{
  //  latlng: ,
  //  title: 'S3_Point 7',
  //  images: ['', ''], // Array of image paths
  //  description: ''
  //},
  {
    latlng: [35.2430783333333,-101.95065],
    title: 'S3_Point 8',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2426483333333,-101.950061666667],
    title: 'S3_Point 9',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2420333333333,-101.949936666667],
    title: 'S4_Point 1',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2414416666667,-101.949516666667],
    title: 'S4_Point 2',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2400883333333,-101.949621666667],
    title: 'S4_Point 3',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2398866666667,-101.949778333333],
    title: 'S4_Point 4',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2398266666667,-101.94983],
    title: 'S4_Point 5',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2397166666667,-101.949791666667],
    title: 'S4_Point 6',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2395066666667,-101.950083333333],
    title: 'S4_Point 7',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.238875,-101.951018333333],
    title: 'S4_Point 8',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.23877,-101.951338333333],
    title: 'S4_Point 9',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2387916666667,-101.951696666667],
    title: 'S4_Point 10',
    images: ['', ''], // Array of image paths
    description: ''
  },
  







  //          Section 3 Offshoot Points
  {
    latlng: [35.24329,-101.951981666667],
    title: 'S3OS_Point 1',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2433516666667,-101.952855],
    title: 'S3OS_Point 2',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2432383333333,-101.953255],
    title: 'S3OS_Point 3',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2434816666667,-101.953616666667],
    title: 'S3OS_Point 4',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2437666666667,-101.953878333333],
    title: 'S3OS_Point 5',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.243855,-101.954043333333],
    title: 'S3OS_Point 6',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2438983333333,-101.954411666667],
    title: 'S3OS_Point 7',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2437566666667,-101.954756666667],
    title: 'S3OS_Point 8',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.243665,-101.955163333333],
    title: 'S3OS_Point 9',
    images: ['', ''], // Array of image paths
    description: ''
  },
  {
    latlng: [35.2436933333333,-101.955791666667],
    title: 'S3OS_Point 10',
    images: ['images/image2.jpg', 'images/image2_2.jpg'], // Array of image paths
    description: 'text'
  },
  {
    latlng: [35.2439266666667,-101.955953333333],
    title: 'S3OS_Point 11',
    images: ['images/image2.jpg', 'images/image2_2.jpg'], // Array of image paths
    description: 'text'
  },
  {
    latlng: [35.244258333, -101.95624667],
    title: 'S3OS_Point 12',
    images: ['images/image2.jpg', 'images/image2_2.jpg'], // Array of image paths
    description: 'text'
  },
  
  // Add more points as needed
];

structurePoints.forEach(point => {
  // Generate image paths for the current point
  point.images = generateImagePaths(point.folderPath, point.numOfPhotos, point.ttle);
  console.log(point.images);
});

console.log(structurePoints[0])



var redMarker = L.divIcon({
  className: 'custom-marker',
  html: '<div style="background-color: red; border-radius: 50%; width: 20px; height: 20px;"></div>',
  iconSize: [50, 50],
  iconAnchor: [10, 10]
});

// Loop through Landmark points and add markers to the map
landmarkPoints.forEach(function(point) {
  var marker = L.marker(point.latlng,{icon:redMarker}).addTo(map);

  // Add a popup to each marker
  var popupContent = `
    <h3>${point.title}</h3>
    <div id="image-gallery" class="popup-gallery">`;
    
  point.images.forEach(function(imagePath) {
    popupContent += `<img src="${imagePath}" alt="Point Image" style="max-width: 100%;">`;
  });

  popupContent += `</div>
    <p>${point.description}</p>
  `;
  marker.bindPopup(popupContent, {
    autoPan: false, // Disable automatic panning
    autoPanPaddingTopLeft: L.point(0, 0), // Set padding to 0 from the top left
    autoPanPaddingBottomRight: L.point(0, 0) // Set padding to 0 from the bottom right
  });
});

//################################################################


//Change this to update default starting point of point gallery
var defPoint = structurePoints[0]

//Displays default point on right side
var markerInfoElement = document.getElementById('info-container');
    markerInfoElement.innerHTML = `
      <h3>${defPoint.title}</h3>
      <p>${defPoint.description}</p>
    `;
  // Update the current point index
  currentPointIndex = 0;

  // Update the gallery image
  currentIndex = 0;
  updateGalleryImage();

  //###############################################################

// Loop through Structure points and add markers to the map
structurePoints.forEach(function(point, index) {
  var marker = L.marker(point.latlng).addTo(map);

  // Bind a click event to each marker
  marker.on('click', function() {
    // Update the content of the marker data area
    var markerInfoElement = document.getElementById('info-container');
    markerInfoElement.innerHTML = `
      <h3>${point.title}</h3>
      <p>${point.description}</p>
    `;

    // Update the current point index
    currentPointIndex = index;

    // Update the gallery image
    currentIndex = 0;
    updateGalleryImage();
  });
});

// Add a control to toggle between Street View and Satellite View
var baseMaps = {
  'Street View': streetLayer,
  'Satellite View': satelliteLayer
};

L.control.layers(baseMaps).addTo(map);

// Create a map key control
var mapKeyControl = L.control({position: 'bottomleft'});

// Define the content of the map key
mapKeyControl.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'map-key');
  div.innerHTML += '<h4>Map Key</h4>';
  div.innerHTML += '<p><span class="map-marker red"></span> Red Marker</p>';
  div.innerHTML += '<p><span class="map-marker blue"></span> Blue Marker</p>';
  return div;
};

// Add the map key control to the map
mapKeyControl.addTo(map);



