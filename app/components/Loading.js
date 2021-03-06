var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
   container: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      fontSize: '65px'
   },
   content: {
      textAlign: 'center',
      color: '#333',
      fontWeight: 100,
      width: '100%',
      marginTop: '30px'
   }
}

var Loading = React.createClass({
   propTypes: {
      text: PropTypes.string,
      speed: PropTypes.number
   },
   getDefaultProps: function () {
      return {text: 'Loading', speed: 500}
   },
   getInitialState: function () {
      this.originalText = this.props.text
      return {text: this.originalText}
   },
   componentDidMount: function () {
      var stopper = this.originalText + '...';
      this.interval = setInterval(function () {
         this.setState({
            text: this.state.text === stopper
               ? this.originalText
               : this.state.text + '.'
         })
      }.bind(this), this.props.speed)
   },
   componentWillUnmount: function () {
      clearInterval(this.interval);
   },
   render: function () {
      return (
         <div style={styles.container}>
            <p style={styles.content}>{this.state.text}</p>
         </div>
      )
   }
});

module.exports = Loading;