var React = require('react');
var Forecast = require('../components/Forecast');
var getForecast = require('../util/openWeatherMapHelper').getForecast;

var ForecastContainer = React.createClass({
   contextTypes: {
      router: React.PropTypes.object.isRequired
   },
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
         this.setState({isLoading: false, forecast: forecast})
      }.bind(this)).catch(function (err) {
         this.setState({isLoading: true, forecast: {}})
      }.bind(this))
   },
   handleClick: function (weather) {
      this.context.router.push({
         pathname: '/detail/' + this.props.routeParams.city,
         state: {
            weather: weather
         }
      })
   },
   render: function () {
      return (<Forecast city={this.props.routeParams.city} isLoading={this.state.isLoading} forecast={this.state.forecast} handleClick={this.handleClick}/>)
   }
});

module.exports = ForecastContainer;