/** @jsx React.DOM */
'use strict'

var React = require('react');
var TencentMap = require('../components/tencentMap/map');

var markers =  [{x:116,y:30,description:'This is a description'},
				{x:117,y:31,description:'This is a description'},
				{x:118,y:32,description:'This is a description'},
				{x:119,y:34,description:'This is a description'},
				{x:120,y:33,description:'This is a description'},
				{x:121,y:35,description:'This is a description'}];

React.renderComponent(
	<div>

	<TencentMap id="1"  mapData={markers}  height={"300px"} width={"300px"} ></TencentMap>

	</div>, document.getElementById('content1'));


React.renderComponent(<div><TencentMap id="2"  mapData={markers}  height={"500px"} width={"500px"} > </TencentMap></div>, document.getElementById('content2'));

