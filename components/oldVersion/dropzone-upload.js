var Dropzone = require('dropzone');
var React = require('react');
var _ = require('underscore');

var DropzoneUpload = React.createClass({
    displayName: 'DropzoneUpload',
    getInitialState: function() {
      return {
        options: {
          url: this.props.url,
          uploadMultiple: true,
          dictDefaultMessage: '拖拽上传或点击上传文件',
          paramName: 'myfiles'
        }
      }
    },
    componentDidMount: function () {
      if (!this.props.uploadedFiles) {
        var options = this.state.options;
        this.uploader = new Dropzone(this.getDOMNode(), _.extend({}, Dropzone.prototype.defaultOptions, options));
        this.uploader.on('sending', this._onSending);
        this.uploader.on('success', this._onSuccess);
        this.uploader.on('error', this._onError);
        this.uploader.on('addedfile', this._onAdded);
      }
    },
    componentWillUnmount: function () {
      if (!this.props.uploadedFiles) {
        this.uploader.destroy();
        this.uploader = null;
      }
    },
    render: function () {
      var children = this.props.children;
      return <div className="dropzone" {...this.props}>
          {children ? <div className="fallback">{children}</div> : null}
        </div>;
    },
    _onSending: function(file, xhr, formData) {
      var addition = this.props.addition ? this.props.addition : [];
      if (addition) {
        _.keys(addition).forEach(function(key) {
          _.values(addition).forEach(function(value) {
            formData.append(key, value);
          });
        });
      }
    },
    _onSuccess: function(file, res) {
    },
    _onError: function(file, res) {
      console.log(res);
    },
    _onAdded: function(file) {
      file.previewElement.addEventListener('click', function() {
      }.bind(this));
    }
});

module.exports = DropzoneUpload;
