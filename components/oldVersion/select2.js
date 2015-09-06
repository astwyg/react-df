var React = require('react');
var select2 = require('select2');
var $ = require('jquery');
var _ = require('underscore');

var Select2Component = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    dataSet: React.PropTypes.array.isRequired, // 数据列表
    hasError: React.PropTypes.bool,
    errorClass: React.PropTypes.string,
    onSelection: React.PropTypes.func, // 当选择完成时的回调函数，参数为当前已选择项
    multiple: React.PropTypes.bool, // 是否多选
    placeholder: React.PropTypes.string,
    val: React.PropTypes.arrayOf(React.PropTypes.number), // 初始化数据，若是多个提供一个id list，若是单个提供一个id即可
    styleWidth: React.PropTypes.string, // styles for select2
    enabled: React.PropTypes.bool // disabled or not
  },

  getDefaultProps: function() {
    return {
      hasError: false,
      errorClass: 'has-error',
      multiple: false,
      placeholder: '-----请选择-----',
      val: [],
      styleWidth: '100%',
      enabled: true,
      dataSet: []
    }
  },

  getInitialState: function() {
    return {
      options: this.props.options ? this.props.options : {}
    }
  },

  componentDidUpdate: function(prevProps, prevState) {
    var self = this;
    if (this._isDataUpdated(prevProps.dataSet)) {
      this.createSelect2();
    } else {
      if (prevProps.placeholder !== this.props.placeholder) {
        this.setPlaceholderTo(this.getInputElem(), this.props.placeholder);
      }

      var updateVal = false;

      if (prevProps.val.length == this.props.val.length) {
        $.each(prevProps.val, function(index, value) {
          if (self.props.val[index] != value) {
            updateVal = true;
          }
        });
      } else {
        updateVal = true;
      }

      if (updateVal) {
        this.getInputElem().select2('val', this.props.val);
      }

      if (prevProps.enabled != this.props.enabled) {
        this.getInputElem().select2('enable', this.props.enabled);
      }
    }
  },

  componentDidMount: function () {
    var $node = this.createSelect2();
  },

  createSelect2: function() {
    var val = null;
    if (this.props.val.length > 0) {
      val = this.props.multiple ? this.props.val : this.props.val[0];
    }

    var opts = {
      data: this.props.dataSet,
      multiple: this.props.multiple,
      val: val
    };

    opts = _.extend({}, opts, this.state.options);

    var $el = this.getInputElem();

    $el.val(val)
       .select2(opts)
       .on('change', this.handleChange)
       .on('select2-open', this.handleErrorState)
       .select2('enable', this.props.enabled);

    this.setPlaceholderTo($el, this.props.placeholder);
  },

  setPlaceholderTo: function($el, placeholder) {
    if (!placeholder) {
      placeholder = '';
    }
    var currData = $el.select2('data');

    $el.attr('placeholder', placeholder);
    $el.select2('data', null);
    $el.select2('data', {});
    $el.select2('data', currData);
  },

  handleErrorState: function() {
    var $drop = $('#select2-drop');
    var className = $drop[0].className.split(/\s+/);

    if (this.props.hasError) {
      var hasErrorClass = $.inArray(this.props.errorClass, className);

      if (hasErrorClass == -1) {
        $drop.addClass(this.props.errorClass);
      }
    } else {
      $drop.removeClass(this.props.errorClass);
    }
  },

  handleChange: function(e) {
    if (this.props.onSelection) {
      this.props.onSelection(e, this.getInputElem().select2('data'));
    }
  },

  getInputElem: function() {
    return $('#' + this.props.id);
  },

  _isDataUpdated: function(oldData) {
    if (oldData.length !== this.props.dataSet.length) {
      return true;
    }
    return false;
  },

  render: function() {
    var style = {width: this.props.styleWidth};
    return (
      <div className={this.props.hasError ? this.props.errorClass : ''}>
        <input type='hidden' style={style} id={this.props.id} />
      </div>
    );
  }
});

module.exports = Select2Component;
