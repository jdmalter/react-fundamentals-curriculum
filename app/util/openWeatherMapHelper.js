var axios = require('axios');

var baseURL = 'http://api.openweathermap.org/data/2.5/';
var APIKEY = 'b714ec74bbab5650795063cb0fdf5fbe';

function getQueryString(city) {
   return {q: city, type: 'accurate', APPID: APIKEY, cnt: 5}
}

function getRouteParams(queryString) {
   return Object.keys(queryString).map(function (key) {
      return key + '=' + encodeURIComponent(queryString[key]);
   }).join('&')
}

function getUrl(type, queryString) {
   return baseURL + type + '?' + getRouteParams(queryString)
}

function getCurrentWeather(city) {
   var queryString = getQueryString(city);
   var url = getUrl('weather', queryString);

   return axios.get(url).then(function (currentWeather) {
      console.log(currentWeather.data)
   }).catch(function (err) {
      console.warn('Error in getCurrentWeather', err)
   })
}

function getForecast(city) {
   var queryString = getQueryString(city);
   var url = getUrl('forecast/daily', queryString);

   return axios.get(url).then(function (forecast) {
      console.log(forecast.data)
   }).catch(function (err) {
      console.warn('Error in getForecast', err)
   })
}

module.exports = {
   getCurrentWeather: getCurrentWeather,
   getForecast: getForecast
};