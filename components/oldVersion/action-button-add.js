
var React = require('react');

/**
 * 就是个普通button
 * @param  {空}
 * @return {React Component}
 */
var ActionButtonAdd = React.createClass({
    displayName: 'ActionButtonAdd',
    render: function () {
        return (
            <button className="btn btn-outlined btn-info btn-sm" onClick={this.props.onClick}>
              <i className="fa fa-plus"></i> {this.props.children}
            </button>
        );
    }
});

module.exports = ActionButtonAdd;
