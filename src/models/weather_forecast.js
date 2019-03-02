const ApiKey = require('../helpers/api_key.js');
const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


const WeatherForecast = function () {
  this.data = null;
}

WeatherForecast.prototype.getData = function () {
  const apiKey = ApiKey;
  //38.7103,-9.1379
  const url = `http://api.openweathermap.org/data/2.5/forecast?lat=38.71&lon=-9.13&APPID=${apiKey}`;
  const request = new RequestHelper(url);
  request.get()
    .then( (data) => {
      this.data = data;
      //console.log(this.data);
      PubSub.publish('WeatherForecast:forecast-ready', this.data);
    })
    .catch( (error) => console.error(error) );
};

//WeatherForecast.prototype.coordinates = #

module.exports = WeatherForecast;
