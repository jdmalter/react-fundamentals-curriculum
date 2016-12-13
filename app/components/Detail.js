var React = require('react');
var DailyForecast = require('./DailyForecast');
var convertToFahrenheit = require('../util/converter').convertToFahrenheit;

var styles = {
   overallForecast: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column',
      flexWrap: 'wrap',
      margin: '50px auto'
   },
   descriptionContainer: {
      fontSize: 34,
      fontWeight: 100,
      maxWidth: 600,
      margin: '0 auto',
      textAlign: 'center'
   }
}

function Detail(props) {
   return (
      <div style={styles.overallForecast}>
         <DailyForecast day={props.weather} handleClick={props.handleClick}/>
         <div style={styles.descriptionContainer}>
            <p>{props.city}</p>
            <p>{props.weather.weather[0].description}</p>
            <p>min temp: {convertToFahrenheit(props.weather.temp.min).toFixed(2)}
               degrees</p>
            <p>max temp: {convertToFahrenheit(props.weather.temp.max).toFixed(2)}
               degrees</p>
            <p>humidity: {props.weather.humidity}</p>
         </div>
      </div>
   )
}

module.exports = Detail;