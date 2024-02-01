require([
  "esri/Map",
  "esri/layers/CSVLayer",
  "esri/views/MapView",
  "esri/symbols/SimpleMarkerSymbol",
  "esri/Color"
], function(Map, CSVLayer, MapView, SimpleMarkerSymbol, Color) {
 
  // URL to the CSV file
  var url = "https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%202/stl_crime_wgs_84.csv";
 
  // Define the map
  var map = new Map({
    basemap: "streets" 
  });
 
  // Create a CSV layer
  const csvLayer = new CSVLayer({
    url: url,
    popupTemplate: {
      title: "Crime Incident in St. Louis",
      content: "Crime: {Crime}<br>District: {District}<br>Neighborhood: {Neighborhood}<br> Streets:{ILEADSStreet}"
    },
    renderer: {
      type: "simple", 
      symbol: new SimpleMarkerSymbol({
        color: new Color([0, 0, 255]), 
        size: 4,
        outline: null
      })
    }
  });
 
  // Add the CSV 
  map.add(csvLayer);
 
  var view = new MapView({
    container: "viewDiv", 
    map: map,
    center: [-90.1994, 38.6270], // St. Louis
    zoom: 12
  });
 
});