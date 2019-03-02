const PubSub = require('../helpers/pub_sub.js');

const LocationInputView = function () {
};

LocationInputView.prototype.bindEvents = function() {
  const form = document.querySelector('#location-coordinates-form');
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const inputtedCoordinates = evt.target.number.value;
//TEST
  console.warn(inputtedCoordinates);

  //PubSub.publish('LocationInputView:coordinates-submited', inputtedCoordinates);
  });
};


module.exports = LocationInputView;
