var React = require('react/addons');


var Textarea=React.createClass({
    displayName:'Textarea',

    getInitialState:function(){
        return {
        };
    },
    getDefaultProps: function(){
        return{
            name:"",
            rows:"3",
            onChange: new Function(),
        }
    },
    onChange: function(e){
        this.props.children = e.target.value;
        this.props.onChange(this.props.children);
    },
    render:function(){
        return (<div className="form-group">
                    <label for="name">{this.props.name}</label>
                    <textarea className="form-control" rows={""+this.props.rows} onChange={this.onChange}>
                        {this.props.children}
                    </textarea>
                </div>);
    }
});
module.exports=Textarea;
