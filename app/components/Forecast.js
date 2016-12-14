var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var DailyForecast = require('./DailyForecast');

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
   }
}

function OverallForecast(props) {
   return (
      <div>
         <h1 style={styles.header}>{props.city}</h1>
         <div style={styles.overallForecast}>
            {props.forecast.list.map(function (dailyForecast) {
               return <DailyForecast key={dailyForecast.dt} day={dailyForecast} handleClick={props.handleClick.bind(null, dailyForecast)}/>
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
            : <OverallForecast city={props.city} forecast={props.forecast} handleClick={props.handleClick}/>}
      </div>
   )
}

Forecast.propTypes = {
   city: PropTypes.string.isRequired,
   forecast: PropTypes.object.isRequired,
   isLoading: PropTypes.bool.isRequired,
   handleClick: PropTypes.func.isRequired
}

module.exports = Forecast;