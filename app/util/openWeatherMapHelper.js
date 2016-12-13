var axios = require('axios');

var baseURL = 'http://api.openweathermap.org/data/2.5/';
var APIKEY = '886f8ddfa6ab926a541707e532fee99d';

function getQueryString(city) {
   return {q: city, type: 'accurate', APPID: APIKEY, cnt: 7}
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
      return currentWeather.data
   }).catch(function (err) {
      console.warn('Error in getCurrentWeather', err)
   })
}

function getForecast(city) {
   var queryString = getQueryString(city);
   var url = getUrl('forecast/daily', queryString);

   return axios.get(url).then(function (forecast) {
      return forecast.data
   }).catch(function (err) {
      console.warn('Error in getForecast', err)
   })
}

module.exports = {
   getCurrentWeather: getCurrentWeather,
   getForecast: getForecast
};