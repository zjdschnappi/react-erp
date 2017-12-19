(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return webpackJsonp([5],{

/***/ "./src/myinfo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import React from 'react';
// import ReactDOM from 'react-dom';
var _antd = antd,
    Upload = _antd.Upload,
    Icon = _antd.Icon,
    message = _antd.message;


function getBase64(img, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  var isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  var isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

var Avatar = function (_React$Component) {
  (0, _inherits3.default)(Avatar, _React$Component);

  function Avatar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Avatar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Avatar.__proto__ || (0, _getPrototypeOf2.default)(Avatar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.handleChange = function (info) {
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, function (imageUrl) {
          return _this.setState({ imageUrl: imageUrl });
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Avatar, [{
    key: 'render',
    value: function render() {
      var imageUrl = this.state.imageUrl;
      return React.createElement(
        Upload,
        {
          className: 'avatar-uploader',
          name: 'avatar',
          showUploadList: false,
          action: 'https://jsonplaceholder.typicode.com/posts/',
          beforeUpload: beforeUpload,
          onChange: this.handleChange
        },
        imageUrl ? React.createElement('img', { src: imageUrl, alt: '', className: 'avatar' }) : React.createElement(Icon, { type: 'plus', className: 'avatar-uploader-trigger' })
      );
    }
  }]);
  return Avatar;
}(React.Component);

ReactDOM.render(React.createElement(Avatar, null), document.getElementById('root'));

/***/ })

},["./src/myinfo.js"]);
});