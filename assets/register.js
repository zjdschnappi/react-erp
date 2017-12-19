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
return webpackJsonp([4],{

/***/ "./src/register.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

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
  (0, _inherits3.default)(RegistrationForm, _React$Component);

  function RegistrationForm(props) {
    (0, _classCallCheck3.default)(this, RegistrationForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RegistrationForm.__proto__ || (0, _getPrototypeOf2.default)(RegistrationForm)).call(this, props));

    _this.state = {
      confirmDirty: false,
      autoCompleteResult: []
    };;

    // this.handleChange = this.handleChange.bind(this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleConfirmBlur = _this.handleConfirmBlur.bind(_this);
    _this.checkPassword = _this.checkPassword.bind(_this);
    _this.checkConfirm = _this.checkConfirm.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(RegistrationForm, [{
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
          (0, _extends3.default)({}, formItemLayout, {
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
          (0, _extends3.default)({}, formItemLayout, {
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
          (0, _extends3.default)({}, formItemLayout, {
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
          (0, _extends3.default)({}, formItemLayout, {
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
          (0, _extends3.default)({}, formItemLayout, {
            label: 'Habitual Residence'
          }),
          getFieldDecorator('residence', {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }]
          })(React.createElement(Cascader, { options: residences }))
        ),
        React.createElement(
          FormItem,
          (0, _extends3.default)({}, formItemLayout, {
            label: 'Phone Number'
          }),
          getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入手机号!' }]
          })(React.createElement(Input, { addonBefore: prefixSelector, style: { width: '100%' } }))
        ),
        React.createElement(
          FormItem,
          (0, _extends3.default)({}, formItemLayout, {
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
          (0, _extends3.default)({}, formItemLayout, {
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
          (0, _extends3.default)({}, tailFormItemLayout, { style: { marginBottom: 8 } }),
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

},["./src/register.js"]);
});