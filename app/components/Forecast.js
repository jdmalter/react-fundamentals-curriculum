var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');

function Forecast(props) {
   console.log(props);
   return (props.isLoading === true
      ? <Loading/>
      : <div>
         Forecast Component
      </div>)
}

module.exports = Forecast;