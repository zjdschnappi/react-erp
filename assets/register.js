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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/register.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/register.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _antd = antd,
    Form = _antd.Form,
    Input = _antd.Input,
    Tooltip = _antd.Tooltip,
    Icon = _antd.Icon,
    Cascader = _antd.Cascader,
    Select = _antd.Select,
    Row = _antd.Row,
    Col = _antd.Col,
    Checkbox = _antd.Checkbox,
    Button = _antd.Button,
    AutoComplete = _antd.AutoComplete;

var FormItem = Form.Item;
var Option = Select.Option;
var AutoCompleteOption = AutoComplete.Option;

var residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake'
    }]
  }]
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men'
    }]
  }]
}];

var RegistrationForm = function (_React$Component) {
  _inherits(RegistrationForm, _React$Component);

  function RegistrationForm(props) {
    _classCallCheck(this, RegistrationForm);

    var _this = _possibleConstructorReturn(this, (RegistrationForm.__proto__ || Object.getPrototypeOf(RegistrationForm)).call(this, props));

    _this.state = {
      confirmDirty: false,
      autoCompleteResult: []
    };;

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleConfirmBlur = _this.handleConfirmBlur.bind(_this);
    _this.checkPassword = _this.checkPassword.bind(_this);
    _this.checkConfirm = _this.checkConfirm.bind(_this);
    return _this;
  }

  _createClass(RegistrationForm, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  }, {
    key: 'handleConfirmBlur',
    value: function handleConfirmBlur(e) {
      var value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
  }, {
    key: 'checkPassword',
    value: function checkPassword(rule, value, callback) {
      var form = this.props.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    }
  }, {
    key: 'checkConfirm',
    value: function checkConfirm(rule, value, callback) {
      var form = this.props.form;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    }
  }, {
    key: 'handleWebsiteChange',
    value: function handleWebsiteChange(value) {
      var autoCompleteResult = void 0;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(function (domain) {
          return '' + value + domain;
        });
      }
      this.setState({ autoCompleteResult: autoCompleteResult });
    }
  }, {
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var autoCompleteResult = this.state.autoCompleteResult;


      var formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 14 }
        }
      };
      var tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 14,
            offset: 6
          }
        }
      };
      var prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86'
      })(React.createElement(
        Select,
        { style: { width: 60 } },
        React.createElement(
          Option,
          { value: '86' },
          '+86'
        ),
        React.createElement(
          Option,
          { value: '87' },
          '+87'
        )
      ));

      var websiteOptions = autoCompleteResult.map(function (website) {
        return React.createElement(
          AutoCompleteOption,
          { key: website },
          website
        );
      });

      return React.createElement(
        Form,
        { onSubmit: this.handleSubmit },
        React.createElement(
          FormItem,
          _extends({}, formItemLayout, {
            label: 'E-mail',
            hasFeedback: true
          }),
          getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '输入的不是有效的邮箱格式!'
            }, {
              required: true, message: '请输入邮箱地址!'
            }]
          })(React.createElement(Input, null))
        ),
        React.createElement(
          FormItem,
          _extends({}, formItemLayout, {
            label: 'Password',
            hasFeedback: true
          }),
          getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入你的密码!'
            }, {
              validator: this.checkConfirm
            }]
          })(React.createElement(Input, { type: 'password' }))
        ),
        React.createElement(
          FormItem,
          _extends({}, formItemLayout, {
            label: 'Confirm Password',
            hasFeedback: true
          }),
          getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请确认你的密码!'
            }, {
              validator: this.checkPassword
            }]
          })(React.createElement(Input, { type: 'password', onBlur: this.handleConfirmBlur }))
        ),
        React.createElement(
          FormItem,
          _extends({}, formItemLayout, {
            label: React.createElement(
              'span',
              null,
              'Nickname\xA0',
              React.createElement(
                Tooltip,
                { title: '\u4F60\u5E0C\u671B\u522B\u4EBA\u600E\u4E48\u79F0\u547C\u4F60?' },
                React.createElement(Icon, { type: 'question-circle-o' })
              )
            ),
            hasFeedback: true
          }),
          getFieldDecorator('nickname', {
            rules: [{ required: true, message: '请输入昵称', whitespace: true }]
          })(React.createElement(Input, null))
        ),
        React.createElement(
          FormItem,
          _extends({}, formItemLayout, {
            label: 'Habitual Residence'
          }),
          getFieldDecorator('residence', {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }]
          })(React.createElement(Cascader, { options: residences }))
        ),
        React.createElement(
          FormItem,
          _extends({}, formItemLayout, {
            label: 'Phone Number'
          }),
          getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入手机号!' }]
          })(React.createElement(Input, { addonBefore: prefixSelector, style: { width: '100%' } }))
        ),
        React.createElement(
          FormItem,
          _extends({}, formItemLayout, {
            label: 'Website'
          }),
          getFieldDecorator('website', {
            rules: [{ required: true, message: '请输入网址!' }]
          })(React.createElement(
            AutoComplete,
            {
              dataSource: websiteOptions,
              onChange: this.handleWebsiteChange,
              placeholder: 'website'
            },
            React.createElement(Input, null)
          ))
        ),
        React.createElement(
          FormItem,
          _extends({}, formItemLayout, {
            label: 'Captcha',
            extra: '\u4F60\u662F\u673A\u5668\u5417.'
          }),
          React.createElement(
            Row,
            { gutter: 8 },
            React.createElement(
              Col,
              { span: 12 },
              getFieldDecorator('captcha', {
                rules: [{ required: true, message: '请输入你收到的验证码!' }]
              })(React.createElement(Input, { size: 'large' }))
            ),
            React.createElement(
              Col,
              { span: 12 },
              React.createElement(
                Button,
                { size: 'large' },
                'Get captcha'
              )
            )
          )
        ),
        React.createElement(
          FormItem,
          _extends({}, tailFormItemLayout, { style: { marginBottom: 8 } }),
          getFieldDecorator('agreement', {
            valuePropName: 'checked'
          })(React.createElement(
            Checkbox,
            null,
            'I have read the ',
            React.createElement(
              'a',
              { href: '' },
              'agreement'
            )
          ))
        ),
        React.createElement(
          FormItem,
          tailFormItemLayout,
          React.createElement(
            Button,
            { type: 'primary', htmlType: 'submit' },
            'Register'
          )
        )
      );
    }
  }]);

  return RegistrationForm;
}(React.Component);

var WrappedRegistrationForm = Form.create()(RegistrationForm);

ReactDOM.render(React.createElement(WrappedRegistrationForm, null), document.getElementById('root'));

/***/ })

/******/ });
});