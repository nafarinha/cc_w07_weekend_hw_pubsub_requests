const PubSub = require('../helpers/pub_sub.js');

const WeatherForecast = require('../models/weather_forecast.js');

const LocationInputView = function () {
};

LocationInputView.prototype.bindEvents = function() {
  const form = document.querySelector('#location-coordinates-form');
  form.addEventListener('submit', this.formSubmitHandler.bind(this));
};

LocationInputView.prototype.formSubmitHandler = function(evt) {
  evt.preventDefault();
  const form = evt.target;
  const locationCoordinates = this.formValues(form);

  PubSub.publish('LocationInputView:coordinates-submited', locationCoordinates);
  form.reset();
};

LocationInputView.prototype.formValues = function (form) {
  return {
    latitude: form.latitude.value,
    longitude: form.longitude.value
  }
}

// const formValues = (form) => ({
//     latitude: form.latitude.value,
//     longitude: form.longitude.value
// });


module.exports = LocationInputView;
