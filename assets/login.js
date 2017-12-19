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
return webpackJsonp([6],{

/***/ "./src/login.js":
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

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
var _antd = antd,
    Form = _antd.Form,
    Input = _antd.Input,
    Tabs = _antd.Tabs,
    Button = _antd.Button,
    Icon = _antd.Icon,
    Checkbox = _antd.Checkbox,
    Row = _antd.Row,
    Col = _antd.Col,
    Alert = _antd.Alert;


var FormItem = Form.Item;
var TabPane = Tabs.TabPane;

var Login = function (_React$Component) {
  (0, _inherits3.default)(Login, _React$Component);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      count: 0,
      type: 'account'
    }, _this.onSwitch = function (key) {
      _this.setState({
        type: key
      });
    }, _this.onGetCaptcha = function () {
      var count = 59;
      _this.setState({ count: count });
      _this.interval = setInterval(function () {
        count -= 1;
        _this.setState({ count: count });
        if (count === 0) {
          clearInterval(_this.interval);
        }
      }, 1000);
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      var type = _this.state.type;

      _this.props.form.validateFields({ force: true }, function (err, values) {
        if (!err) {
          _this.props.dispatch({
            type: 'login/' + type + 'Submit',
            payload: values
          });
        }
      });
    }, _this.renderMessage = function (message) {
      return React.createElement(Alert, {
        style: { marginBottom: 24 },
        message: message,
        type: 'error',
        showIcon: true
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Login, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          form = _props.form,
          login = _props.login;
      var getFieldDecorator = form.getFieldDecorator;
      var _state = this.state,
          count = _state.count,
          type = _state.type;

      return React.createElement(
        'div',
        { className: 'main' },
        React.createElement(
          Form,
          { onSubmit: this.handleSubmit },
          React.createElement(
            Tabs,
            { animated: false, className: 'tabs', activeKey: type, onChange: this.onSwitch },
            React.createElement(
              TabPane,
              { tab: '\u8D26\u6237\u5BC6\u7801\u767B\u5F55', key: 'account' },
              React.createElement(
                FormItem,
                null,
                getFieldDecorator('userName', {
                  rules: [{
                    required: type === 'account', message: '请输入账户名！'
                  }]
                })(React.createElement(Input, {
                  size: 'large',
                  prefix: React.createElement(Icon, { type: 'user', className: 'prefixIcon' }),
                  placeholder: 'admin'
                }))
              ),
              React.createElement(
                FormItem,
                null,
                getFieldDecorator('password', {
                  rules: [{
                    required: type === 'account', message: '请输入密码！'
                  }]
                })(React.createElement(Input, {
                  size: 'large',
                  prefix: React.createElement(Icon, { type: 'lock', className: 'prefixIcon' }),
                  type: 'password',
                  placeholder: '888888'
                }))
              )
            ),
            React.createElement(
              TabPane,
              { tab: '\u624B\u673A\u53F7\u767B\u5F55', key: 'mobile' },
              React.createElement(
                FormItem,
                null,
                getFieldDecorator('mobile', {
                  rules: [{
                    required: type === 'mobile', message: '请输入手机号！'
                  }, {
                    pattern: /^1\d{10}$/, message: '手机号格式错误！'
                  }]
                })(React.createElement(Input, {
                  size: 'large',
                  prefix: React.createElement(Icon, { type: 'mobile', className: 'prefixIcon' }),
                  placeholder: '\u624B\u673A\u53F7'
                }))
              ),
              React.createElement(
                FormItem,
                null,
                React.createElement(
                  Row,
                  { gutter: 8 },
                  React.createElement(
                    Col,
                    { span: 16 },
                    getFieldDecorator('captcha', {
                      rules: [{
                        required: type === 'mobile', message: '请输入验证码！'
                      }]
                    })(React.createElement(Input, {
                      size: 'large',
                      prefix: React.createElement(Icon, { type: 'mail', className: 'prefixIcon' }),
                      placeholder: '\u9A8C\u8BC1\u7801'
                    }))
                  ),
                  React.createElement(
                    Col,
                    { span: 8 },
                    React.createElement(
                      Button,
                      {
                        disabled: count,
                        className: 'getCaptcha',
                        size: 'large',
                        onClick: this.onGetCaptcha
                      },
                      count ? count + ' s' : '获取验证码'
                    )
                  )
                )
              )
            )
          ),
          React.createElement(
            FormItem,
            { className: 'additional' },
            getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(React.createElement(
              Checkbox,
              { className: 'autoLogin' },
              '\u81EA\u52A8\u767B\u5F55'
            )),
            React.createElement(
              'a',
              { className: 'forgot', href: '' },
              '\u5FD8\u8BB0\u5BC6\u7801'
            ),
            React.createElement(
              Button,
              { size: 'large', loading: '', className: 'submit', type: 'primary', htmlType: 'submit' },
              '\u767B\u5F55'
            )
          )
        )
      );
    }
  }]);
  return Login;
}(React.Component);

var WrappedNormalLoginForm = Form.create()(Login);

ReactDOM.render(React.createElement(WrappedNormalLoginForm, null), document.getElementById('root'));

/***/ })

},["./src/login.js"]);
});