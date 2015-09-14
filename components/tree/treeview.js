/*
 * WangYG 2015年8月3日 08:48:41
*/


var React=require("react/addons");
var treeCommonMixin = require("./treecommon");
var Debug = require("../common/debug");

/**
 * 使用说明
 * <Treeview data={tree1Data} selectType="checkbox"/>
 * data: (object)树中展现的数据, 格式请参考demo.js, 每个节点可以有如下属性:
    -"name":显示的名称.
    -"uid":唯一的Id,注意,此ID必须唯一, 如果留空,则自动生成一个.
    -"selectType":该节点的选择类型,可以为"checkbox"(节点可以多选,默认值),"radio"(在该级下单选),"none"(不显示选择框)
    -"isSelected":(string)该节点默认被选中,默认值为"none",可选:"all","part","none"
    -"isExpanded":(boolean)该节点默认被展开,默认值为flase.
 * selectType: (string)
    -"none":树的每个节点前没有可操作的元素
    -"checkbox":树的每个节点前有一个勾选框
    -"radio":树的每个节点成为单选项
 * onElementCheck: (function)节点被勾选(取消勾选)时的回调函数.
 *  -return parms:
 *      -uid:目标节点的uid值,如果输入的data中没有标记uid,会返回一个唯一的随机字符串.
 *      -status:目标节点操作状态, 'check'为勾选操作, 'unckeck'为取消勾选.
 *      -name: 目标节点显示的内容
 * onElementFlod: (function)节点被展开(收起)时的回调函数.
 *  -return params:
 *      -uid:目标节点的uid值,如果输入的data中没有标记uid,会返回一个唯一的随机字符串.
 *      -status:目标节点操作状态, 'flod'为收起操作, 'unckeck'为展开操作.
 * expandLevel: (int)展开级别
 * maxHeight:(string) 比如:"300px"
 *
 *
 * 静态方法:
 * getAllCheckedNodes: 返回所有已经被勾选的节点的uid
 */

var Treeview = React.createClass({
    name: 'treeview',
    mixins: [treeCommonMixin],
    statics:{
        treedata:[],
        targetTreedata:null, //注意, static方法不能给static方法提供返回值.
        getAllCheckedNodes: function(uid){
            Treeview.treedata = Treeview.treedata;
            var checked = [];
            if(uid){
                Treeview.findTreedata(uid,Treeview.treedata);
                Treeview.pushNodes(Treeview.targetTreedata,checked);
                return checked;
            }
            Treeview.pushNodes(Treeview.treedata,checked);
            return checked;
        },
        pushNodes: function(treedata,checked){
            for(var i in treedata){
                if(treedata[i].hasOwnProperty("children")&&treedata[i].children){
                    Treeview.pushNodes(treedata[i].children,checked);
                }
                if(treedata[i].isSelected!="none"&&treedata[i].selectType!="none"){
                    checked.push(treedata[i].uid);
                }
            }
        },
        findTreedata: function(uid,treedata){
            for(var i in treedata){
                if(treedata[i].hasOwnProperty("children")&&treedata[i].children){
                    Treeview.findTreedata(uid,treedata[i].children);
                }
                if(treedata[i].uid==uid){
                    Treeview.targetTreedata = treedata[i].children;
                }
            }
        }
    },
    
    // attribute definitions
    getAttributes: function() {
        var attributes = [
            { name:'boxClass', type:'string', required:false, defaultValue:'', note:'container CSS class' },
            { name:'selectType', type:'string', required:false, defaultValue:"none", note:'select type:none/checkbox/radio' },
            { name:'expandLevel', type:'number', required:false, defaultValue:1, note:'levels to expand' },
            { name:'treedata', type:'array', required:false, defaultValue:[], note:'input treeview data' },
            // internal, don't pass in
            { name:'treedataObject', type:'object', required:false, defaultValue:[], note:'treeview data object' },
            { name:'treedataCol', type:'array', required:false, defaultValue:[], note:'treeview data in hash array' },
            { name:'maxHeight', type:'string', required:false, defaultValue:"none", note:"max height"}
        ];
        return attributes;
    },

    getDefaultProps: function(){
        return{
            onElementCheck: function(){return},
            onElementFlod: function(){return},
        }
    },
    
    componentWillMount: function() {
        this.state.treedataObject = this.prepareTreedata(this.state.treedata);
        this.state.nodes = this.getNodesFromTreeItem(this.state.treedataObject); //用于操作的节点
    },

    componentWillReceiveProps : function(nextProps){
        if (!nextProps.data){
            return ;
        }
        var state = this.state;
        var propsData = nextProps.data || {};
        var attributes = this.getAttributes();
        // loop through attributes defined for component
        for (var i = 0; i < attributes.length; i++) {
            var attribute = attributes[i];
            var name = attribute.name;
            var attributeValue = this.props[name] || propsData[name];
            state[name] = attributeValue || attribute.defaultValue;
        }
        state.containerClassNames = [this.name + '-container'];
        state.boxClass && state.containerClassNames.push(state.boxClass);
        // run additional setup if present
        //this.setupInitial && this.setupInitial();
        state.treedataObject = this.prepareTreedata(nextProps.data.treedata); //用传入的数据
        //这里需要读取state.nodes.isExpanded/isSelected赋给state.treedataObject.children.isExpanded/isSelected
        this.copyProps(state.nodes,state.treedataObject.children);
        this.state.nodes = this.getNodesFromTreeItem(state.treedataObject);
        this.forceUpdate(); //需要强制刷新,防止缓存?
    },
    componentDidMount : function(){
        this.state.treedata.forEach(function(ins){
            Treeview.treedata.push(ins); //把所有根节点压栈,所有根节点uid必须不同.
        });
    },

    copyProps: function(nodes,children){
        for(var i=0; i<children.length; i++){
            for(var j=0; j<nodes.length; j++){
                if(children[i].uid==nodes[j].uid){
                    children[i].isExpanded = nodes[j].isExpanded;
                    children[i].isSelected = nodes[j].isSelected;
                }
                if(children[i].hasOwnProperty("children")){
                    this.copyProps(nodes,children[i].children);
                }
            }
        }
    },
    
    // add unique id to treedata
    prepareTreedata: function(treedata) {
        // convert object into array
        var startLevel = 1;
        this.state.treedataCol = {};
        if (typeof treedata === 'object') {
            if (treedata.constructor.name === 'Array') { //如果treedata为列表时 调用
                startLevel = 0;
                treedata = { children:treedata };
            }
        }
        this.processTreedataItem(treedata, startLevel);
        return treedata;
    },
    
    processTreedataItem: function(item, level) {
        item.level = level;
        item.uid = item.uid || this.generateUid();
        item.selectType = item.selectType || this.state.selectType;
        if(item.isSelected){ //可以通过{data}传入isSelected参数控制isSelected
            item.isSelected=item.isSelected;
        }
        else{
            item.isSelected = "none"; // select status can be all | partial | none
        } 
        item.isExpanded = item.isExpanded||(level < this.state.expandLevel) || false; //可以通过{data}传入该参数
        item.hasChildren = (item.children && item.children.length > 0) || false;
        if (level > 0) {
            this.state.treedataCol[item.uid] = item;
        }
        if (item.children) {
            for (var i = 0; i < item.children.length; i++) {
                var childItem = item.children[i];
                this.processTreedataItem(childItem, level + 1);
            }
        }
    },
    
    /*
    Getting nodes from treedata item
    Example input treedata:
    [
        {
            "name": "Top Level",
            "uid": "uid1",
            "children": [
                {
                    "name": "Level 2: A",
                    "uid": "uid2",
                    "children": [
                        {
                            "name": "Son of A"
                        },
                        {
                            "name": "Daughter of A"
                        }
                    ]
                },
                {
                    "name": "Level 2: B"
                },
                {
                    "name": "Level 2: C",
                    "children": [
                        {
                            "name": "Son of C"
                        }
                    ]
                }
            ]
        }
    ]
    output nodes:
    [
        { display:'Top Level', level:1 },
        { display:'Level 2: A', level:2 },
        { display:'Son of A', level:3 },
        { display:'Daughter of A', level:3 },
        { display:'Level 2: B', level:2 },
        { display:'Level 2: C', level:2 },
        { display:'Son of C', level:3 }
    ]
    */
    getNodesFromTreeItem: function(item) {
        var nodes = [];
        var currentNode = { isExpanded:true };
        var display = item.name || item.text || 'NA';
        // skip level 0, it is artificial object for array input
        if (item.level > 0) {
            currentNode = {
                uid: item.uid,
                selectType : item.selectType,
                display: display,
                level: item.level,
                hasChildren: item.hasChildren,
                isExpanded: item.isExpanded,
                isSelected: item.isSelected,
                boxClass: item.boxClass,
            };
            nodes.push(currentNode);
        }
        if (item.children && currentNode.isExpanded) {
            var childNodes = [];
            for (var i = 0; i < item.children.length; i++) {
                var childItem = item.children[i];
                var childNodes = this.getNodesFromTreeItem(childItem);
                nodes = nodes.concat(childNodes);
            }
        }
        return nodes;
    },
    
    /* update select status under item
     * @param item Object item under update
     * @param changedItem Object the item that has change of status originally
     * @param inheritStatus String optional, status to be updated to (inherited from parent)
     */
    updateTreeSelectStatus: function(item, changedItem, keepSelectStatus, inheritStatus) {
        if (keepSelectStatus)
            return;
        // set initial select status to tree item
        var deduceSelectStatus = false;
        if (item.uid === changedItem.uid) {
            // reached item that changes select status originally, no change is needed for item
            // set inheritStatus for children to set select status to
            inheritStatus = item.isSelected; // should be "all" or "none"
        } else if (inheritStatus) {
            // Set select status to inheritStatus if available
            item.isSelected = inheritStatus;
        } else {
            // need to deduce isSelected from children's select statuses
            if (item.children && item.children.length > 0) {
                deduceSelectStatus = true;
            } else {
                // item remains current select status
            }
        }
        // process child items, keep track of selected child items
        var selectChildrenCount = 0;
        if (item.children && item.children.length > 0) {
            for (var i = 0; i < item.children.length; i++) {
                var childItem = item.children[i];
                this.updateTreeSelectStatus(childItem, changedItem, keepSelectStatus, inheritStatus);
                if (childItem.isSelected === "all") {
                    selectChildrenCount = selectChildrenCount + 1;
                } else if (childItem.isSelected === "part") {
                    selectChildrenCount = selectChildrenCount + .5;
                }
            }
        }
        // to deduced select status, compare children count to selected children count
        if (deduceSelectStatus) {
            if (item.children && item.children.length > 0) {
                if (selectChildrenCount === item.children.length) {
                    item.isSelected = "all";
                } else if (selectChildrenCount === 0) {
                    item.isSelected = "none";
                } else {
                    item.isSelected = "part";
                }
            } else {
                item.isSelected = "none";
            }
        }
    },
    onNodeClick: function(event) {
        var target = $(event.target);
        var cellId = target.attr('data-uid'); 
        if (!cellId) { //如果点击文字, 效果和点击checkbox相同
            if (target.hasClass("treeview-textbox-content")){
                var reactId = target.attr("data-reactid");
                cellId = reactId.split("-")[1]+"-select";
            }
        }
        //move from here
        // get cellId from cell icon <i> or from cell container
        if (target.hasClass('treeview-cell-expand-container')) {
            cellId = target.find('i').attr('data-uid');
        }
        
        // cellId format: "<nodeKey>-<cellType>-<select status>-<expand status>"
        // cellId example: "36c2b148338c8d7a7f99ef6b881e281f-expand-a-e"
        var parts = cellId.split('-');
        var nodeKey = parts[0];
        var cellType = parts[1];
        var treedataItem = this.state.treedataCol[nodeKey];
        var keepSelectStatus=true;
        // change this.state.treedata according to type of icon clicked
        switch (cellType) {
            case 'expand':
                treedataItem.isExpanded = !treedataItem.isExpanded;
                break;
            case 'icon':
                break;
            case 'select':
                keepSelectStatus=false;
                //clear all node.isSelected if selectTypr=="radio" (radio)
                if(this.state.selectType=="radio"){
                    var nodes = this.state.treedataCol;
                    for (var i in nodes){
                        nodes[i].isSelected="none";   
                    }
                    this.state.treedataCol = nodes;
                }
                else if(this.state.selectType=="none"){
                    break;
                }
                switch(treedataItem.isSelected) {
                case "all":
                    treedataItem.isSelected = "none";
                    break;
                case "part":
                    treedataItem.isSelected = "all";
                    break;
                case "none":
                    treedataItem.isSelected = "all";
                    break;
                }
                break;
        }
        // sync select status of all tree nodes
        this.updateTreeSelectStatus(this.state.treedataObject, treedataItem, keepSelectStatus); //这里出了问题
        this.state.nodes = this.getNodesFromTreeItem(this.state.treedataObject);
        //执行回调函数
        if (cellId.split('-')[1]=="select"){
            var uid = cellId.split('-')[0];
            var reactId = target.attr('data-reactid');
            var rawStatus = reactId.split('-')[2];
            var status="error";
            switch(rawStatus){
                case "all":
                    status = "uncheck";
                    break;
                case "part":
                    status = "check";
                    break;
                case "none":
                    status = "check";
            }
            var name=null; //将node的name一并返回
            var selectType = null;
            for(var i in this.state.nodes){
                if(this.state.nodes[i].uid==uid){
                    name=this.state.nodes[i].display;
                    selectType = this.state.nodes[i].selectType;
                }
            }
            if(selectType=="none"){ //如果节点不可操作, 不执行回调
                return;
            }
            //根据uid 和 status进行回调
            this.props.onElementCheck(uid,status,name);
        } 
        if (target.parent().hasClass('treeview-cell-expand-container')){ //added
            var reactId = target.parent().attr('data-reactid');
            var uid = reactId.split('-')[1];
            var status = reactId.split('-')[3]=='none.$treeview'?'unfold':'fold';
            //根据uid 和 status进行回调
            this.props.onElementFlod(uid,status);
        }
        // update display
        this.forceUpdate();
        Treeview.treedata = this.state.treedata;
    },
    render: function() {
        var treenodes = [];
        for (var i = 0; i < this.state.nodes.length; i++) {
            var node = this.state.nodes[i];
            node.selectType = node.selectType || this.state.selectType;
            // need to include node properties tied with UI change, for example: isExpanded
            var nodeKey = 'treenode-' + node.uid;
            nodeKey += '-' + node.isSelected;
            nodeKey += '-' + (node.isExpanded ? 'e' : "none");
            treenodes.push(<TreeviewNode data={ node } key={ nodeKey } />);
        }
        var flagCssClass = true;
        for (var i in this.state.containerClassNames){
            if(this.state.containerClassNames[i]==this.props.cssClass){
                flagCssClass = false;
            }
        }
        if(flagCssClass){
            this.state.containerClassNames.push(this.props.cssClass);
        }
        return (
            <div className={ this.state.containerClassNames.join(' ') } style={{"max-height":this.state.maxHeight}}>
                <div onClick={ this.onNodeClick } >
                    { treenodes }
                </div>
            </div>
        );
    }
}); /*Treeview END*/


// TreeviewNode component
var TreeviewNode = React.createClass({
    name: 'treeview-node',
    mixins: [treeCommonMixin],
    
    // attribute definitions
    getAttributes: function() {
        var attributes = [
            { name:'boxClass', type:'string', required:false, defaultValue:'', note:'container CSS class' },
            { name:'uid', type:'string', required:false, defaultValue:'', note:'unique id for node' },
            { name:'level', type:'number', required:false, defaultValue:1, note:'node level' },
            { name:'display', type:'string', required:false, defaultValue:'', note:'text display' },
            { name:'hasChildren', type:'boolean', required:false, defaultValue:false, note:'has children flag' },
            { name:'isExpanded', type:'boolean', required:false, defaultValue:false, note:'is expanded flag' },
            { name:'selectType', type:'string', required:false, defaultValue:"none", note:'select type:none/checkbox/radio' },
            { name:'isSelected', type:'boolean', required:false, defaultValue:"none", note:'selecte state all/partial/none' },
            { name:'item', type:'object', required:false, defaultValue:'', note:'original data item' },
        ];
        return attributes;
    },
    
    render: function() {
        var items = [];
        var cells = [];
        var level = this.state.level;

        
        // add branch cells 
        for (var i = 1; i < level; i++) {
            var cellData = { text:i, type:'space' };
            var cellKey = 'treeview-text-cell-space-' + i;
            cells.push(
                <TreeviewCell data={ cellData } key={ cellKey } />
            );
        }
        // add expand cell if there are children
        var expandCellData = {
            uid: this.state.uid + '-expand',
            type: 'expand',
            iconClass: this.state.isExpanded ? 'fa fa-caret-down' : 'fa fa-caret-right'
        };
        if (!this.state.hasChildren) {
            expandCellData.iconClass = 'fa';
        }
        cells.push(<TreeviewCell data={ expandCellData } key='treeview-expand-cell' />);
        
        // add select cell
        if (this.state.selectType == "checkbox" || this.state.selectType=="radio") {
            // checkbox select type
            var iconClass = '';
            switch(this.state.isSelected) {
            case "all":
                iconClass = 'fa fa-check-square-o';
                break;
            case "part":
                iconClass = 'fa fa-square';
                break;
            case "none":
                iconClass = 'fa fa-square-o';
                break;
            }
            var selectCellData = {
                uid: this.state.uid + '-select',
                type: 'select',
                iconClass: iconClass
            };
            var selectCellKey = 'treeview-select-cell';
            cells.push(<TreeviewCell data={ selectCellData } key={ selectCellKey } />);
        }
        
        // only add icon cell when iconClass is present
        if (this.state.item.iconClass) {
            var iconCellData = {
                uid: this.state.uid + '-icon',
                type: 'icon',
                iconClass: this.state.item.iconClass
            };
            cells.push(<TreeviewCell data={ iconCellData } key='treeview-icon-cell' />);
        }
        
        // add textbox
        var textboxData = {
            uid: this.state.uid + '-textbox',
            type: 'text',
            text: this.state.display,
        };
        cells.push(<TreeviewTextBox data={ textboxData } key='treeview-textbox' />);
        return (
            <div className={ this.state.containerClassNames.join(' ') }
                data-id={ this.state.uid } 
                >
                { cells }
            </div>
        );
    }
});


// TreeviewCell component
var TreeviewCell = React.createClass({
    name: 'treeview-cell',
    mixins: [treeCommonMixin],
    
    // attribute definitions
    getAttributes: function() {
        var attributes = [
            { name:'boxClass', type:'string', required:false, defaultValue:'', note:'container CSS class' },
            { name:'iconClass', type:'string', required:false, defaultValue:'', note:'icon CSS class' },
            { name:'uid', type:'string', required:false, defaultValue:'', note:'unique id for cell' },
            { name:'type', type:'string', required:false, defaultValue:'', note:'treeview type' }
        ];
        return attributes;
    },
    
    render: function() {
        // set iconClass
        var displayText = '';
        var iconClass = this.state.iconClass || '';
        var iconContainerClass = 'treeview-cell-' + this.state.type + '-container';
        switch (this.state.type) {
            case 'text':
                displayText = this.state.text;
                break;
            case 'expand':
                iconClass = iconClass || 'fa fa-plus-square-o';
                break;
            case 'select':
                iconClass = iconClass || 'fa fa-check-square-o';
                break;
            case 'icon':
                iconClass = iconClass || '';
                break;
        }
        return (
            <div className={ this.state.containerClassNames.join(' ') } >
                <div className={ iconContainerClass }>
                    <i className={ iconClass } data-uid={ this.state.uid } >{ displayText }</i>
                </div>
            </div>
        );
    }
});


// Treeview textbox component
var TreeviewTextBox = React.createClass({
    name: 'treeview-textbox',
    mixins: [treeCommonMixin],
    
    // attribute definitions
    getAttributes: function() {
        var attributes = [
            { name:'boxClass', type:'string', required:false, defaultValue:'', note:'container CSS class' },
            { name:'uid', type:'string', required:false, defaultValue:'', note:'unique id for cell' },
            { name:'text', type:'string', required:false, defaultValue:'', note:'display text' },
            { name:'type', type:'string', required:false, defaultValue:'', note:'treeview type' },
        ];
        return attributes;
    },

    
    render: function() {
        // set content
        var displayText = this.state.text;
        return (
            <div className={ this.state.containerClassNames.join(' ') } >
                <div className="treeview-textbox-content"
                    dangerouslySetInnerHTML={{ __html: displayText }}
                />
            </div>
        );
    }
});


module.exports=Treeview;