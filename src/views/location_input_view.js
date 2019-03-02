const PubSub = require('../helpers/pub_sub.js');

const LocationInputView = function () {
};

LocationInputView.prototype.bindEvents = function() {
  const form = document.querySelector('#location-coordinates-form');
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const location = this.formValues(form);

    console.log('location:', location);

    form.reset();
  });
};

LocationInputView.prototype.formValues = (form) => ({
  latitude: form.latitude.value,
  longitude: form.longitude.value
});

module.exports = LocationInputView;
