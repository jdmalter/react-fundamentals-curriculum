var React = require('react');
var Forecast = require('../components/Forecast');
var getForecast = require('../util/openWeatherMapHelper').getForecast;

var ForecastContainer = React.createClass({
   getInitialState: function () {
      return {isLoading: true, forecast: {}}
   },
   componentDidMount: function () {
      this.requestForecast(this.props.routeParams.city)
   },
   componentWillReceiveProps: function (nextProps) {
      this.requestForecast(nextProps.routeParams.city)
   },
   requestForecast: function (city) {
      getForecast(city).then(function (forecast) {
         this.setState({isLoading: false, forecast: forecast});
      }.bind(this))
   },
   render: function () {
      return (<Forecast city={this.props.routeParams.city} isLoading={this.state.isLoading} forecast={this.state.forecast}/>)
   }
});

module.exports = ForecastContainer;