var React = require('react');
var Detail = require('../components/Detail');

var DetailContainer = React.createClass({
   contextTypes: {
      router: React.PropTypes.object.isRequired
   },
   handleClick: function () {
      this.context.router.push({
         pathname: '/forecast/' + this.props.routeParams.city
      })
   },
   render: function () {
      return <Detail weather={this.props.location.state.weather} city={this.props.routeParams.city} handleClick={this.handleClick}/>
   }
});

module.exports = DetailContainer;