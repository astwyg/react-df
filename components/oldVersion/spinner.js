var React = require('react');

var Spinner = React.createClass({
  render: function() {
    return <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  }
});

module.exports = Spinner;
