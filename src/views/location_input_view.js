const PubSub = require('../helpers/pub_sub.js');

const LocationInputView = function () {
};

LocationInputView.prototype.bindEvents = function() {
  const form = document.querySelector('#location-coordinates-form');
  form.addEventListener('submit', this.formSubmitHandler);
};

LocationInputView.prototype.formSubmitHandler = function(evt) {
  evt.preventDefault();
  const form = evt.target;
  const locationCoordinates = formValues(form);
  //TEST
  console.log('location:', locationCoordinates);
  PubSub.publish('LocationInputView:coordinates-submited', locationCoordinates);
  form.reset();
};

const formValues = (form) => ({
    latitude: form.latitude.value,
    longitude: form.longitude.value
});


module.exports = LocationInputView;
