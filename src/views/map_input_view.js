const PubSub = require('../helpers/pub_sub.js');
const L = require('leaflet');


const MapInputView = function () {
  this.test = 90;
  this.locationCoordinates = {
    latitude: null,
    longitude: null
  };
};

MapInputView.prototype.bindEvents = function() {

  this.renderMap()

  const map = document.querySelector('#map');

//How can the callback function access the constructor attribute??
  myObj = this.locationCoordinates;
  map.addEventListener('click', function() {
    PubSub.publish('LocationInputView:coordinates-submited', myObj);
  });

  //
  // map.addEventListener('click', function() {
  //
  //   // const locationCoordinates = {};
  //   //
  //   // locationCoordinates.latitude = this.lat;
  //   // locationCoordinates.longitude = this.long;
  //
  //     // console.log('map input location :', this.locationCoordinates.latitude);
  //
  //   //  PubSub.publish('LocationInputView:coordinates-submited', this.locationCoordinates);
  //
  // });

};

MapInputView.prototype.renderMap = function () {
  const map = L.map('map');
  map.setView([55, 0], 4);
  let attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  let tiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  L.tileLayer(tiles, {
    maxZoom: 18,
    attribution: attribution
  }).addTo(map);

//TEST It logs 90 correctly
debugger;
    console.log('renderMap fn',this.test);

  //let popup = L.popup();
  map.on('click', e => this.onClick(e));
  PubSub.subscribe('MapInputView:clicked-location', (evt) => {
    // console.log('pubsub', evt.detail.lat);
    this.locationCoordinates.latitude = evt.detail.lat;
    this.locationCoordinates.longitude = evt.detail.lng;
  })

  // function onClick(e){
  //     popup
  //     .setLatLng(e.latlng)
  //     .setContent("coordinates " + e.latlng.toString())
  //     .openOn(map);
  // };
};

MapInputView.prototype.onClick = function(evt) {
  //console.log("You clicked the map at " + evt.latlng.lat)
  // this.locationCoordinates.latitude = evt.latlng.lat;

//TEST Does not read this.test correctly. Logs undefined. Why?
debugger;
  console.log('onClick fn',this.test);

  PubSub.publish('MapInputView:clicked-location', evt.latlng);
};




module.exports = MapInputView;
