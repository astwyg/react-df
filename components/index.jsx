/** @jsx React.DOM */
'use strict'

var React = require('react');
require('bootstrap');
var TencentMap = require('./tencentMap/map');
var Tab = require("./tabs/tab");
var Tabs = require("./tabs/tabs");


React.renderComponent(<div>
	<div className="content">
	<span>地图</span>
	<TencentMap id="2"   height={"500px"} width={"500px"} > </TencentMap>
	<div className="col-xs-2">
		<Tabs maxHeight="300px">
	        <Tab title="111" id="1">
	            <p>456</p><p>456</p><p>456</p><p>456</p><p>456</p><p>456</p>
	        </Tab>
	        <Tab title="222" id="2" isActive={true}>
	            <p>789</p>
	        </Tab>
	    </Tabs>
    </div>
    </div>
	

</div>, document.getElementById('content'));

