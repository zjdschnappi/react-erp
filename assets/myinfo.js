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

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference common"))(845);

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference common"))(1);

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference common"))(7);

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference common"))(9);

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference common"))(2);

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference common"))(4);

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference common"))(3);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference common"))(8);

/***/ }),

/***/ "./node_modules/omit.js/es/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference common"))(30);

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference common"))(6);

/***/ }),

/***/ "./node_modules/rc-animate/es/Animate.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference common"))(22);

/***/ }),

/***/ "./node_modules/rc-notification/es/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference common"))(421);

/***/ }),

/***/ "./node_modules/rc-progress/es/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference common"))(833);

/***/ }),

/***/ "./node_modules/rc-tooltip/es/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference common"))(812);

/***/ }),

/***/ "./node_modules/rc-upload/es/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference common"))(1051);

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference common"))(11);

/***/ }),

/***/ "./node_modules/react/react.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference common"))(0);

/***/ }),

/***/ "./src/myinfo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _upload = __webpack_require__("./node_modules/antd/lib/upload/index.js");

var _upload2 = _interopRequireDefault(_upload);

var _icon = __webpack_require__("./node_modules/antd/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

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

var _message2 = __webpack_require__("./node_modules/antd/lib/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    _message3.default.error('You can only upload JPG file!');
  }
  var isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    _message3.default.error('Image must smaller than 2MB!');
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
      return _react2.default.createElement(
        _upload2.default,
        {
          className: 'avatar-uploader',
          name: 'avatar',
          showUploadList: false,
          action: 'https://jsonplaceholder.typicode.com/posts/',
          beforeUpload: beforeUpload,
          onChange: this.handleChange
        },
        imageUrl ? _react2.default.createElement('img', { src: imageUrl, alt: '', className: 'avatar' }) : _react2.default.createElement(_icon2.default, { type: 'plus', className: 'avatar-uploader-trigger' })
      );
    }
  }]);
  return Avatar;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Avatar, null), document.getElementById('root'));

/***/ }),

/***/ "dll-reference common":
/***/ (function(module, exports) {

module.exports = common;

/***/ })

},["./src/myinfo.js"]);
});