
var React = require('react');

var ErrorHandler = React.createClass({

  propTypes: {
    error: React.PropTypes.object.isRequired,
    destroy: React.PropTypes.func.isRequired
  },

  getDefaultProps: function() {
    return {
      error: {
        msg: '没有这种病'
      }
    }
  },

  render: function() {

    return (
      <div className="global-error alert alert-danger" style={style.globalError}>
        <a className="close pull-right" onClick={this.props.destroy} style={style.close}>&times;</a>
        <i className="fa fa-exclamation-triangle" style={style.icon}></i>
        {this.props.error.msg}
      </div>
    )

  }
});

var style = {
  globalError: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    zIndex: 99999,
    minWidth: '300px',
    padding: '30px 20px',
    backgroundColor: '#bf4346',
    border: 0,
    boxShadow: '0 3px 30px rgba(0, 0, 0, 0.4)',
    color: '#fff',
    textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
  },
  icon: {
    fontSize: '20px',
    verticalAlign: 'baseline',
    marginRight: '20px'
  },
  close: {
    fontSize: '30px',
    lineHeight: '21px'
  }
}

module.exports = ErrorHandler;
