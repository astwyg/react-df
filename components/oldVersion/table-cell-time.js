/**
 * Created by Marshall on 1/12/15.
 */
var React = require('react');
var moment = require('moment');

var TimeTD = React.createClass({
  render: function() {
    return <td>{this.props.children ? moment(this.props.children).format('YYYY-MM-DD') : ' - '}</td>;
  }
});

module.exports = TimeTD;
