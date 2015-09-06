/** @jsx React.DOM */
var React = require('react');
var PageSize = require('./pagesize');
var Pagination = require('./pagination');
var constants = require('../constants/config');

var DataGrid = React.createClass({
    displayName: 'DataGrid',

    PropTypes: {
      pageSize: React.PropTypes.number.isRequired, // 当前分页大小
      pageSizes: React.PropTypes.array.isRequired, // 分页大小数组
      changePageSize: React.PropTypes.func.isRequired, // 分页回调函数
      pageNo: React.PropTypes.number.isRequired, // 当前页码
      totalPageNo: React.PropTypes.number.isRequired, // 总页码
      changePageNo: React.PropTypes.func.isRequired // 翻页回调函数
    },

    getDefaultProps: function() {
      return {
        pageSize: constants.pageSizes[2], // 默认分页大小为 10
        pageSizes: constants.pageSizes,
        pageNo: 1 // 默认当前页码为1
      }
    },

    render: function () {
        return (
            <div className="portlet-body pan">
              <div className="row mbm ptm">
                <div className="col-lg-6">
                  <div className="pagination-panel mlm">
                    <PageSize onChange={this.props.changePageSize} value={this.props.pageSize} options={this.props.pageSizes} />
                  </div>
                </div>
                <div className="col-lg-6 text-right">
                  <div className="pagination-panel mrm">
                    <Pagination pageNo={this.props.pageNo} totalPageNo={this.props.totalPageNo} onSelect = {this.props.changePageNo} />
                  </div>
                </div>
              </div>
              {this.props.children}
              <div className="row pbm">
                <div className="col-lg-6">
                  <div className="pagination-panel mlm">
                    <PageSize onChange={this.props.changePageSize} value={this.props.pageSize} options={this.props.pageSizes} />
                  </div>
                </div>
                <div className="col-lg-6 text-right">
                  <div className="pagination-panel mrm">
                    <Pagination pageNo={this.props.pageNo} totalPageNo={this.props.totalPageNo} onSelect = {this.props.changePageNo}/>
                  </div>
                </div>
              </div>
            </div>
        );
    }
});

module.exports = DataGrid;
