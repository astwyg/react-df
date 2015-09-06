/** @jsx React.DOM */
var React = require('react');
var Bootstrap = require('react-bootstrap');
var classNames = require('classNames');
var Pager = Bootstrap.Pager;
var PageItem = Bootstrap.PageItem;

var Pagination = React.createClass({
    displayName: 'Pagination',

    propTypes: {
      pageNo: React.PropTypes.number.isRequired, // 当前页
      totalPageNo: React.PropTypes.number.isRequired, // 总页数
      onSelect: React.PropTypes.func.isRequired // 回调函数
    },

    getInitialState : function(){
      return {
      }
    },
    render: function () {
      var prevClassNames = classNames({
        'disabled': this.props.pageNo <= 1
      });
      var nextClassNames = classNames({
        'disabled': this.props.pageNo >= this.props.totalPageNo
      });
      return (
          <Pager className="mtn mbn text-force-right">
            <PageItem className={prevClassNames} onClick = {this._prev}><i className="fa fa-angle-double-left"></i> 上一页</PageItem>
            <PageItem className={nextClassNames} onClick = {this._next}>下一页 <i className="fa fa-angle-double-right"></i></PageItem>
          </Pager>
      );
    },
    _prev: function(e) {
      e.preventDefault();
      var pageNo = this.props.pageNo;
      if (pageNo <= 1) return;
      pageNo--;
      this.props.onSelect(pageNo);
    },
    _next: function(e) {
      e.preventDefault();
      var pageNo = this.props.pageNo;
      if (pageNo >= this.props.totalPageNo) return;
      pageNo++;
      this.props.onSelect(pageNo);
    }
});

module.exports = Pagination;
