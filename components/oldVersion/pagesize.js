
var React = require('react');

var PageSize = React.createClass({
    displayName: 'PageSize',

    propTypes: {
      options: React.PropTypes.array.isRequired, // 分页大小数组
      value: React.PropTypes.number.isRequired, // 当前分页大小
      onChange: React.PropTypes.func.isRequired // 分页回调函数
    },

    render: function () {
      var options = this.props.options.map(function(option, key) {
        return <option key={key} value={option}>每页显示 {option} 个</option>;
      });
        return (
            <div className="inline">
              <select value={this.props.value ? this.props.value : ''} onChange={this._onChange} className="form-control input-xsmall input-sm input-inline">
                {options}
              </select>
            </div>
        );
    },
    _onChange: function(e) {
      this.props.onChange(e.target.value);
    }
});

module.exports = PageSize;
