var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var parseDate = require('../util/converter').parseDate;

var styles = {
   overallForecast: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      maxWidth: 1200,
      margin: '50px auto'
   },
   dailyForecast: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      margin: 35
   },
   header: {
      fontSize: 65,
      color: '#333',
      fontWeight: 100,
      textAlign: 'center'
   },
   subheader: {
      fontSize: 30,
      color: '#333',
      fontWeight: 100
   },
   weatherIcon: {
      height: 130
   }
}

function DailyForecast(props) {
   var date = parseDate(props.day.dt);
   var icon = props.day.weather[0].icon;
   return (
      <div style={styles.dailyForecast}>
         <img style={styles.weatherIcon} src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather'/>
         <h2 style={styles.subheader}>{date}</h2>
      </div>
   )
}

function OverallForecast(props) {
   return (
      <div>
         <h1 style={styles.header}>{props.city}</h1>
         <div style={styles.overallForecast}>
            {props.forecast.list.map(function (dailyForecast) {
               return <DailyForecast key={dailyForecast.dt} day={dailyForecast}/>
            })}
         </div>
      </div>
   )
}

function Forecast(props) {
   return (
      <div>
         {props.isLoading
            ? <Loading/>
            : <OverallForecast city={props.city} forecast={props.forecast}/>}
      </div>
   )
}

Forecast.propTypes = {
   city: PropTypes.string.isRequired,
   forecast: PropTypes.object.isRequired,
   isLoading: PropTypes.bool.isRequired
}

module.exports = Forecast;