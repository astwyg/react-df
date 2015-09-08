
var React = require('react');
var $ = require('jquery');

var SearchPane = React.createClass({
	// componentDidMount:function(){
 //        $(this.refs.portletBody.getDOMNode()).toggle();
 //    },
    render: function () {
      var classes = React.addons.classSet({
        'portlet': true,
        'box': true,
        'portlet-grey': true,
        'hide': !this.props.visible
      });
        return (
            <div className={classes}>
              <div className="portlet-header">
                  <div className="caption">查询条件</div>
                  <div className="tools">
                      <i className="fa fa-chevron-up" onClick={this._togglePanel}></i>
                  </div>
              </div>
              <div className="portlet-body ptn pbn" ref="portletBody">
                  <div className="row">
                    {this.props.children}
                  </div>
              </div>
          </div>
        );
    },

    _togglePanel: function(e) {
      e.preventDefault();
      $(e.currentTarget).toggleClass('fa-chevron-up fa-chevron-down');
      $(this.refs.portletBody.getDOMNode()).toggle();
    }
});

module.exports = SearchPane;
