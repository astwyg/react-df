/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router').Link;
var $ = require('jquery');

var ProfileDropdown = React.createClass({

    getInitialState: function() {
        return {
            isOpen: false,
            avatar: 'http://i.imgur.com/zvrN7xN.jpg?1',
            name: 'guest'
        }
    },
    render: function() {
        var userName="guest";
        if(this.props.userName){
            userName=this.props.userName;
        }

        var cx = React.addons.classSet;
        var classes = cx({
            "dropdown": true,
            "topbar-user": true,
            "open": this.state.isOpen
        })
        return (
            <ul className="nav navbar navbar-top-links pull-right mbn mtn" onMouseEnter={this._toggleDropdown} onMouseLeave={this._toggleDropdown}>
                <li className={classes}><a href="#" className="dropdown-toggle"><img src={this.state.avatar} alt="" className="img-responsive img-circle"/>&nbsp;<span className="hidden-xs">{userName}</span>&nbsp;<span className="caret"></span></a>
                    <ul className="dropdown-menu dropdown-user pull-right">
                        <li><a href="/settings"><i className="fa fa-user"></i>设置</a></li>
                        <li className="divider"></li>
                        <li><a href="#" onClick={this.props.logout}><i className="fa fa-sign-out"></i>退出</a></li>
                    </ul>
                </li>
            </ul>
        );
    },
    _toggleDropdown: function() {
        this.setState({ isOpen: !this.state.isOpen });
    }
});

var TopBar = React.createClass({
    displayName: 'TopBar',
        statics:{
            userName:'guest'

        },
    render: function () {
        var userName=this.props.userName;
        var style = {
            marginBottom: 0
        };
        return (
            <div className="page-header-topbar">
                <nav id="topbar" role="navigation" style={style} className="navbar navbar-default navbar-static-top">
                    <div className="navbar-header">
                        <button type="button" data-toggle="collapse" data-target=".sidebar-collapse" className="navbar-toggle">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link id="logo" to="/" className="navbar-brand">
                            <span className="fa fa-rocket"></span>
                            <span className="logo-text">电信云公司<span className="logo-text-sup">报表查询</span></span>
                        </Link>
                    </div>
                    <div className="topbar-main">
                        {/*<SidebarToggle toggleSidebar={this._toggleSidebar} cName='fa fa-bars'/>*/}
                        <Link id="menu-toggle" to="/" className="hidden-xs"><i className='fa fa-home'></i></Link>
                        <ProfileDropdown userName={userName} logout={this.props.logout} />
                    </div>
                </nav>
            </div>
        );
    },

    _toggleSidebar: function(e) {
        $(document.body).toggleClass('sidebar-collapsed');
        if(!$('.sidebar-left').is(":hidden")){
            $('.sidebar-left').fadeOut();
        }else{
            $('.sidebar-left').fadeIn();
        }
        e.preventDefault();
    }
});

module.exports = TopBar;
