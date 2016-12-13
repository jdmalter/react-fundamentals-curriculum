var daysMap = {
   "0": "Sunday",
   "1": "Monday",
   "2": "Tuesday",
   "3": "Wednesday",
   "4": "Thursday",
   "5": "Friday",
   "6": "Saturday"
};

var monthsMap = {
   "0": "Jan",
   "1": "Feb",
   "2": "Mar",
   "3": "Apr",
   "4": "May",
   "5": "June",
   "6": "July",
   "7": "Aug",
   "8": "Sept",
   "9": "Oct",
   "10": "Nov",
   "11": "Dec"
};

function parseDate(timestamp) {
   var date = new Date(timestamp * 1000);
   var day = daysMap[date.getDay()];
   var month = monthsMap[date.getMonth()] + ' ' + date.getDate();
   return day + ', ' + month;
}

function convertToCelsius(kelvin) {
   return kelvin - 273.15;
}

function convertToFahrenheit(kelvin) {
   return convertToCelsius(kelvin) * 1.8000 + 32.0;
}

module.exports = {
   parseDate: parseDate,
   convertToCelsius: convertToCelsius,
   convertToFahrenheit: convertToFahrenheit
}