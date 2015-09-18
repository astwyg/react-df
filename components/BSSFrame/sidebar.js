var React = require('react');
var API = require("../const/API");
var Debug = require("../utils/debug");
var Ajax = require("../utils/ajax");
/**
 * 由Route取代, 这里是临时使用
 */
var Link = React.createClass({
	displayName: "Link",
	getDefaultProps: function(){
        return{
        	to:"#",
        }
    },
	render: function(){
		return(<a href={this.props.to}>
				{this.props.children}
			</a>)
	}
})

var SideBar = React.createClass({
    displayName: 'SideBar',
    getInitialState:function(){
		return {
			menu:null
		}
	},
    componentWillMount: function(){
    	Ajax.get(API.SIDE_BAR_MENU,function(){
    		//FIXME
    	});
    	var list = [{"id":"bc373cb764484ab69dc27d827ec0e539","name":"签到查询管理","url":"","parentId":"-1","level":null,"children":[{"id":"0c7e6c00307b4063934cc6e293e580dd","name":"签到查询","url":"/mp/sign","parentId":"bc373cb764484ab69dc27d827ec0e539","level":null,"children":[],"btnRight":{}}],"btnRight":{}},{"id":"576ac42df3574c2b97b1eda80e553451","name":"通用报表查询","url":"","parentId":"-1","level":null,"children":[{"id":"75ff6fc071dd44d69b3677522eb26df0","name":"统计报表","url":"","parentId":"576ac42df3574c2b97b1eda80e553451","level":null,"children":[{"id":"75cee05cb0ac4047b44797d8ce31a21c","name":"云公司列收统计表","url":"/showReport/b857b799e2c646199efeaf4ca46993c9","parentId":"75ff6fc071dd44d69b3677522eb26df0","level":null,"children":[],"btnRight":{}},{"id":"c7909c55be7d4b43be5a11b00dca45a1","name":"合同列收","url":"/showReport/c3573aabc59f4324afc3fcbe8109460b","parentId":"75ff6fc071dd44d69b3677522eb26df0","level":null,"children":[],"btnRight":{}},{"id":"479527286c4343d7b12e31e1e39f6650","name":"电商日发展量统计","url":"/showReport/212550b3f1bd4e5e9f9cde1470b36046","parentId":"75ff6fc071dd44d69b3677522eb26df0","level":null,"children":[],"btnRight":{}},{"id":"b6b1a11956354d7c890c39f56156d68e","name":"客户列收统计表","url":"/showReport/304ffddde6954447b770abb489719e69","parentId":"75ff6fc071dd44d69b3677522eb26df0","level":null,"children":[],"btnRight":{}},{"id":"b4bbf43e86d04939ab144fc32efaebc2","name":"加班餐月统计表","url":"/showReport/e33972f5ccd340fd81e29e7284184c3f","parentId":"75ff6fc071dd44d69b3677522eb26df0","level":null,"children":[],"btnRight":{}},{"id":"99eb01f394c8496c904e1a49ec40d39e","name":"O2O结算报表","url":"/showReport/3eed9d09d86b456d8d0fc05dada24682","parentId":"75ff6fc071dd44d69b3677522eb26df0","level":null,"children":[],"btnRight":{}},{"id":"70865455a6244300b18de7f4d2b52fa6","name":"到期用户统计","url":"/showReport/52fb732fcd1a46daba796f15b918688a","parentId":"75ff6fc071dd44d69b3677522eb26df0","level":null,"children":[],"btnRight":{}},{"id":"f36145ed72fd495596db9f9fc74a317a","name":"报表组(正在测试)","url":"/showReportGroup/1","parentId":"75ff6fc071dd44d69b3677522eb26df0","level":null,"children":[],"btnRight":{}}],"btnRight":{}},{"id":"1c84d894db2747579f407262c53c8e2b","name":"报表组管理","url":"/report/manageReportGroup","parentId":"576ac42df3574c2b97b1eda80e553451","level":null,"children":[],"btnRight":{}},{"id":"3d24158fb8c3424e922d7fe18987af18","name":"报表元数据管理","url":"/report/metadata","parentId":"576ac42df3574c2b97b1eda80e553451","level":null,"children":[],"btnRight":{}},{"id":"9e0e3e45c1da487e9dae4640113fb0ec","name":"通用报表配置管理","url":"/report/config","parentId":"576ac42df3574c2b97b1eda80e553451","level":null,"children":[],"btnRight":{}},{"id":"f617cdec57414b46b24a836272ddae86","name":"通用报表模板管理","url":"/report/manage","parentId":"576ac42df3574c2b97b1eda80e553451","level":null,"children":[],"btnRight":{}}],"btnRight":{}},{"id":"0fe92edb3aee463baa98d0d98d733832","name":"基础管理","url":"","parentId":"-1","level":null,"children":[{"id":"1c5d0409bde94898a7533b21f0ef3337","name":"用户组管理","url":"/group/query","parentId":"0fe92edb3aee463baa98d0d98d733832","level":null,"children":[],"btnRight":{}},{"id":"ac4686b108884fb5879098f6fa635e22","name":"菜单管理","url":"/module/query","parentId":"0fe92edb3aee463baa98d0d98d733832","level":null,"children":[],"btnRight":{}},{"id":"66901e23eba74d00b3f03ba4aff3a7b5","name":"日志管理","url":"/log/querySystemOpertationLogInit","parentId":"0fe92edb3aee463baa98d0d98d733832","level":null,"children":[],"btnRight":{}},{"id":"0524f63884f3440e9c1c5a9d2280357c","name":"角色管理","url":"/role/query","parentId":"0fe92edb3aee463baa98d0d98d733832","level":null,"children":[],"btnRight":{}},{"id":"e572fcbd2b5c42e0b3ce6281e4e2fb7e","name":"代码管理","url":"/codeInfo/query","parentId":"0fe92edb3aee463baa98d0d98d733832","level":null,"children":[],"btnRight":{}},{"id":"2ed2a975faba41f3a6d8440f2772e3ef","name":"用户管理","url":"/user/query","parentId":"0fe92edb3aee463baa98d0d98d733832","level":null,"children":[],"btnRight":{}},{"id":"1e2ecc37fedb4fc6b74f73bd828e4600","name":"部门管理","url":"/department/query","parentId":"0fe92edb3aee463baa98d0d98d733832","level":null,"children":[],"btnRight":{}}],"btnRight":{}}];
        Debug.log(self._toggleSub,"self._toggleSub");
        var menu = (list && list.length) ? list.map(function(item, key) {
            if (item.children&&item.children.length==0&&item.url&&item.url.length>0) {
                return <li key={key}><Link to={item.url}><span className="menu-title">{item.name}</span></Link></li>
            } else {
                if (item.children && item.children.length>0) {
                    return (
                        <li key={key}>
                            <a href="#" >
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
                                                    <a href="#" >
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
		this.setState({menu:menu});
		this.state.menu = menu;
    },
    render: function () {
        return (<div>
			    <nav id="sidebar" role="navigation" className="navbar-default navbar-static-side">
	            <div className="sidebar-collapse menu-scroll">
	                <ul id="side-menu" className="nav">
	                	<li></li>
	                    {this.state.menu}
	                </ul>
	            </div>
	        </nav>
        </div>);
    }
});

module.exports = SideBar;