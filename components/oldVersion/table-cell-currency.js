/** @jsx React.DOM */
var React = require('react');
var numeral = require('numeral');

var CurrencyTD = React.createClass({
  displayName: 'CurrencyTD',
  render: function () {
    var result = numeral(this.props.children).format('$0,0.00');
    return (
      <td>{result}</td>
    );
  }
});

module.exports = CurrencyTD;
