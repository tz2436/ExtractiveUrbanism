'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoidHoyNDM2IiwiYSI6ImNrM3pjd3ZhYjB0NWgzc3Noa282ejAxaXcifQ.ZZ3infSzMfQQ9e1iGdy0kA'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [36.23, -18.07],
    zoom: 5
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
      'circle-radius':{
      	'property': 'Net Profit_Estimated',
      	'stops':[
      	[{zoom:5, value: 0}, 3],
      	[{zoom:5, value: 1000}, 6],
      	[{zoom:5, value: 1000000}, 9],
      	[{zoom:5, value: 1000000000}, 12],
      	]
      },
      'circle-color': [
      'match',
      ['get', 'Nationality'],
      'Australia',
      '#FFD700',
      'Brazil',
      '#3CB371',
      'China',
      '#DC143C',
      'France',
      '#00BFFF',
      'German',
      '#FFFF00',
      'India',
      '#FFA500',
      'Ireland',
      '#FFA07A',
      'Malaysia',
      '#FF69B4',
      'Mozambique',
      '#00FF00',
      'Norwey',
      '#66CDAA',
      'Portugal',
      '#F4A460',
      'South Africa',
      '#FFDEAD',
      'Switzerland',
      '#4169E1',
      'UK',
      '#7FFFD4',
      'United Arab Emirates',
      '#F0E68C',
      'USA',
      '#0000FF',
      'Zimbabwe',
      '#F08080',
      '#D3D3D3'
      ],
      'circle-opacity':0.7
    },
  })

});