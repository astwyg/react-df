/** @jsx React.DOM */
var React = require('react');
var $ = require('jquery');

var ToTop = React.createClass({
    displayName: 'ToTop',
    componentDidMount: function () {
        $(window).scroll(function() {
          if($(this).scrollTop() < 200) {
            $('#totop').fadeOut();
          } else {
            $('#totop').fadeIn();
          }
        });
    },
    render: function () {
        return (
            <a id="totop" onClick={this._handleClick} href="#"><i className="fa fa-angle-up"></i></a>
        );
    },
    _handleClick: function(e) {
      e.stopPropagation(); e.preventDefault();
      $('html, body').animate({scrollTop:0}, 'fast');
    }
});

module.exports = ToTop;
