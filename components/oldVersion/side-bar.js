/**
 * Created by Administrator on 2015/5/7.
 */
var _ = require('underscore');
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var $ = require('jquery');

var SideBar = React.createClass({
    getInitialState: function() {
        return {
            toggle: true
        }
    },
    componentDidMount : function(){
    },
    render : function(){
        var self = this;
        var list = this.props.list;

        var menu = list && list.length ? list.map(function(item, key) {

            if (item.children&&item.children.length==0&&item.url&&item.url.length>0) {

                return <li key={key}><Link to={item.url}><span className="menu-title">{item.name}</span></Link></li>
            } else {
                if (item.children && item.children.length>0) {

                    return (
                        <li key={key}>
                            <a href="#" onClick={self._toggleSub}>
                                <span className="menu-title">{item.name}</span>
                                <span className="fa fa-arrow arrow"></span>
                            </a>
                            <ul className="nav nav-second-level mtn collapse">
                                {item.children.map(function(sub, subKey) {

                                    if (sub.url&&sub.url.length>0) {
                                        return <li key={subKey}>
                                            <Link to={sub.url}><i className="fa fa-angle-right"></i><span className="submenu-title">{sub.name}</span></Link>
                                        </li>
                                    } else {
                                        if (sub.children && sub.children.length>0) {
                                            return (
                                                <li key={subKey}>
                                                    <a href="#" onClick={self._toggleSub}>
                                                        <i className="fa fa-angle-right"></i>
                                                        <span className="submenu-title">{sub.name}</span>
                                                        <span className="fa fa-arrow arrow"></span>
                                                    </a>
                                                    <ul className="nav nav-third-level mtn collapse">
                                                    {sub.children.map(function(third, thirdKey) {
                                                        return <li key={thirdKey}>
                                                            <Link to={third.url}>
                                                                <i className="fa fa-angle-double-right"></i>
                                                                <span className="submenu-title">{third.name}</span>
                                                            </Link>
                                                        </li>
                                                    })}
                                                    </ul>
                                                </li>
                                            )
                                        }
                                    }
                                    if(sub.url&&sub.url.length>0){
                                        return <li key={subKey}>
                                         <Link to={sub.url}>{sub.name}</Link>
                                        </li>
                                    }

                                })}
                            </ul>
                        </li>
                    )
                }
            }
        }) : false;
        return <nav id="sidebar" className="navbar-default navbar-static-side">
            <div className="sidebar-collapse menu-scroll">
                <ul id="sidebar-menu" className="nav mtn">
                    {menu}
                </ul>
            </div>
        </nav>;

    },

    _toggleSub: function(e) {
        e.preventDefault();
        $(e.target).parent('li').toggleClass('active');
        $(e.target).next('ul').toggleClass('in');

        setTimeout(function() {
            if ($(e.target).parent().hasClass('active')) {
                $('html, body').animate({
                    scrollTop: ($(e.target).offset().top - 100)
                }, 'slow');
            }
        }, 300);
    }
});

module.exports = SideBar;
