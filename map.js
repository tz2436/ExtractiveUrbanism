'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoidHoyNDM2IiwiYSI6ImNrM3pjd3ZhYjB0NWgzc3Noa282ejAxaXcifQ.ZZ3infSzMfQQ9e1iGdy0kA'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [31.3119762, -18.5732531],
    zoom: 8
});

var mining_url = "./data/MiningTrans.geojson"

map.on('load',function(){
  // define a 'source' for your point dataset
  map.addSource('mining_data',{
    'type':'geojson',
    'data': "./data/MiningTrans.geojson"
  });
  // add a new layer with your points
  map.addLayer({
    'id':'mining',
    'type':'circle',
    'source':'mining_data',
    'paint':{
      'circle-radius':4,
      'circle-color': '#349f27',
      'circle-opacity':0.7
    },
  })


});