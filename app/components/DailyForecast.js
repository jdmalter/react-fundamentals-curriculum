var React = require('react');
var PropTypes = React.PropTypes;
var parseDate = require('../util/converter').parseDate;

var styles = {
   dailyForecast: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
      margin: 35
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
      <div style={styles.dailyForecast} onClick={props.handleClick}>
         <img style={styles.weatherIcon} src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather'/>
         <h2 style={styles.subheader}>{date}</h2>
      </div>
   )
}

DailyForecast.propTypes = {
   day: PropTypes.shape({dt: PropTypes.number.isRequired, weather: PropTypes.array.isRequired}).isRequired,
   handleClick: PropTypes.func.isRequired
}

module.exports = DailyForecast;