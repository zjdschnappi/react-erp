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
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/login.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _antd = antd,
    Form = _antd.Form,
    Icon = _antd.Icon,
    Input = _antd.Input,
    Button = _antd.Button,
    Checkbox = _antd.Checkbox;

var FormItem = Form.Item;

var NormalLoginForm = function (_React$Component) {
  _inherits(NormalLoginForm, _React$Component);

  function NormalLoginForm() {
    _classCallCheck(this, NormalLoginForm);

    return _possibleConstructorReturn(this, (NormalLoginForm.__proto__ || Object.getPrototypeOf(NormalLoginForm)).apply(this, arguments));
  }

  _createClass(NormalLoginForm, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.form.validateFields(function (err, values) {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;

      return React.createElement(
        Form,
        { onSubmit: this.handleSubmit.bind(this), className: 'login-form' },
        React.createElement(
          FormItem,
          null,
          getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(React.createElement(Input, { prefix: React.createElement(Icon, { type: 'user', style: { fontSize: 13 } }), placeholder: 'Username' }))
        ),
        React.createElement(
          FormItem,
          null,
          getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(React.createElement(Input, { prefix: React.createElement(Icon, { type: 'lock', style: { fontSize: 13 } }), type: 'password', placeholder: 'Password' }))
        ),
        React.createElement(
          FormItem,
          null,
          getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(React.createElement(
            Checkbox,
            null,
            'Remember me'
          )),
          React.createElement(
            'a',
            { className: 'login-form-forgot', href: '' },
            'Forgot password'
          ),
          React.createElement(
            Button,
            { type: 'primary', htmlType: 'submit', className: 'login-form-button' },
            'Log in'
          ),
          'Or ',
          React.createElement(
            'a',
            { href: '' },
            'register now!'
          )
        )
      );
    }
  }]);

  return NormalLoginForm;
}(React.Component);

var WrappedNormalLoginForm = Form.create()(NormalLoginForm);

ReactDOM.render(React.createElement(WrappedNormalLoginForm, null), document.getElementById('root'));

/***/ })

/******/ });
});