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
return webpackJsonp([2],{

/***/ "./node_modules/babel-runtime/core-js/array/from.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/array/from.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/toConsumableArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__("./node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__("./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__("./node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__("./node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__("./node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _data = __webpack_require__("./src/module/data.js");

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import React from 'react';
// import ReactDOM from 'react-dom';
var _antd = antd,
    Form = _antd.Form,
    Row = _antd.Row,
    Col = _antd.Col,
    Input = _antd.Input,
    Button = _antd.Button,
    Layout = _antd.Layout,
    Menu = _antd.Menu,
    Icon = _antd.Icon,
    Dropdown = _antd.Dropdown,
    Table = _antd.Table,
    Popconfirm = _antd.Popconfirm,
    DatePicker = _antd.DatePicker;
var Header = Layout.Header,
    Sider = Layout.Sider,
    Content = Layout.Content;

var FormItem = Form.Item;

var AdvancedSearchForm = function (_React$Component) {
  (0, _inherits3.default)(AdvancedSearchForm, _React$Component);

  function AdvancedSearchForm() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AdvancedSearchForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AdvancedSearchForm.__proto__ || (0, _getPrototypeOf2.default)(AdvancedSearchForm)).call.apply(_ref, [this].concat(args))), _this), _this.handleReset = function () {
      _this.props.form.resetFields();
    }, _this.submitHandler = function () {
      _this.props.submitHandler();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AdvancedSearchForm, [{
    key: "getFields",


    // To generate mock Form.Item
    value: function getFields() {

      var formItemLayout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 19 }
      };
      var children = [];
      children.push(React.createElement(
        Col,
        { span: 8, key: 0 },
        React.createElement(
          FormItem,
          (0, _extends3.default)({}, formItemLayout, { label: "Field " + 0 }),
          React.createElement(Input, { placeholder: "placeholder", name: "asds" })
        )
      ));
      children.push(React.createElement(
        Col,
        { span: 8, key: 1 },
        React.createElement(
          FormItem,
          (0, _extends3.default)({}, formItemLayout, { label: "Field " + 1 }),
          React.createElement(Input, { placeholder: "placeholder", name: "fffff" })
        )
      ));
      children.push(React.createElement(
        Col,
        { span: 8, key: 2 },
        React.createElement(
          FormItem,
          (0, _extends3.default)({}, formItemLayout, { label: "Field " + 2 }),
          React.createElement(Input, { placeholder: "placeholder", name: "ddddd" })
        )
      ));
      return children;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        Form,
        {
          className: "ant-advanced-search-form",
          onSubmit: this.handleSearch
        },
        React.createElement(
          Row,
          { gutter: 40 },
          this.getFields()
        ),
        React.createElement(
          Row,
          { gutter: 40 },
          React.createElement(
            Col,
            { span: 8, key: 3 },
            React.createElement(
              FormItem,
              {
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                label: "Field " + 3
              },
              React.createElement(DatePicker.RangePicker, {
                format: "YYYY/MM/DD"
              })
            )
          )
        ),
        React.createElement(
          Row,
          null,
          React.createElement(
            Col,
            { span: 24, style: { textAlign: 'right' } },
            React.createElement(
              Button,
              { type: "primary", htmlType: "button", onClick: this.submitHandler },
              "Search"
            ),
            React.createElement(
              Button,
              { style: { marginLeft: 8 }, onClick: this.handleReset },
              "Clear"
            )
          )
        )
      );
    }
  }]);
  return AdvancedSearchForm;
}(React.Component);

var Formdemo = Form.create()(AdvancedSearchForm);

var Mtable = function (_React$Component2) {
  (0, _inherits3.default)(Mtable, _React$Component2);

  function Mtable() {
    (0, _classCallCheck3.default)(this, Mtable);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (Mtable.__proto__ || (0, _getPrototypeOf2.default)(Mtable)).call(this));

    _this2.onDelete = function (key) {
      // const dataSource = [...this.props.params.dataSource];
      // this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
      _this2.props.onDelete(key);
    };

    _this2.handleTableChange = function (pagination, filters, sorter) {
      var pager = (0, _extends3.default)({}, _this2.state.pagination);
      pager.current = pagination.current;
      _this2.setState({
        pagination: pager
      });
      _this2.props.params.submitHandler();
    };

    _this2.state = {
      selectedRowKeys: [], // Check here to configure the default column
      dataSource: [],
      pagination: {
        pageSize: 20
      }
    };
    _this2.columns = [{
      title: 'ID',
      dataIndex: 'id'
    }, {
      title: '用户名',
      dataIndex: 'username'
    }, {
      title: '手机号',
      dataIndex: 'cell'
    }, {
      title: 'QQ',
      dataIndex: 'qq'
    }, {
      title: '账户余额',
      dataIndex: 'account'
    }, {
      title: '注册时间',
      dataIndex: 'time'
    }, {
      title: '所属销售',
      dataIndex: 'belong'
    }, {
      title: '备注',
      dataIndex: 'memo'
    }, {
      title: '状态',
      dataIndex: 'status'
    }, {
      title: '操作',
      dataIndex: 'action',
      render: function render(text, record) {
        return _this2.props.params.dataSource.length > 1 ? React.createElement(
          Popconfirm,
          { title: "Sure to delete?", onConfirm: function onConfirm() {
              return _this2.onDelete(record.key);
            } },
          React.createElement(
            "a",
            { href: "#" },
            "Delete"
          )
        ) : null;
      }
    }];
    return _this2;
  }

  //   loading: false,
  // };


  (0, _createClass3.default)(Mtable, [{
    key: "render",
    value: function render() {
      return React.createElement(Table, {
        columns: this.columns,
        rowKey: function rowKey(record) {
          return record.registered;
        },
        dataSource: this.props.params.dataSource,
        pagination: this.state.pagination,
        loading: this.props.params.loading,
        onChange: this.handleTableChange
      });
    }
  }]);
  return Mtable;
}(React.Component);

var App = function (_React$Component3) {
  (0, _inherits3.default)(App, _React$Component3);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    var _this3 = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this));

    _this3.toggle = function () {
      _this3.setState({
        collapsed: !_this3.state.collapsed
      });
    };

    _this3.fetch = function () {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      console.log('params:', params);
      _this3.setState({ loading: true });
      var self = _this3;
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://mockjs');
      xhr.responseType = 'json';

      xhr.onload = function () {

        self.setState({
          loading: false,
          dataSource: JSON.parse(xhr.response)
        });
      };

      xhr.onerror = function () {
        console.log("Oops, error");
      };

      xhr.send();
      // fetch("http://mockjs",{
      //     method: "GET",
      //     body: {
      //         userName:'',
      //         cell1:'',
      //         staffLoginName:'admin',
      //         qq:'',
      //         gmtFirstUserRegistStart:'',
      //         gmtFirstUserRegistEnd:'',
      //         customerRegisterStatus:'ALL',
      //         currentPage:params.page||1,
      //         labelIds:''
      //
      //     }
      // }).then(response => response.json())
      //   .then(data => {
      //       console.log(data)
      //   })
      //   .catch(e => console.log("Oops, error", e))
    };

    _this3.state = {
      collapsed: false,
      loading: false,
      dataSource: []
    };
    _this3.submitHandler = _this3.submitHandler.bind(_this3);
    _this3.fetch = _this3.fetch.bind(_this3);
    _this3.onDelete = _this3.onDelete.bind(_this3);
    return _this3;
  }

  (0, _createClass3.default)(App, [{
    key: "onDelete",
    value: function onDelete(key) {
      var dataSource = [].concat((0, _toConsumableArray3.default)(this.state.dataSource));
      this.setState({ dataSource: dataSource.filter(function (item) {
          return item.key !== key;
        }) });
    }
  }, {
    key: "submitHandler",
    value: function submitHandler() {
      this.fetch();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      Mock.mock('http://mockjs', _data2.default);
    }
  }, {
    key: "render",
    value: function render() {
      var dropMenu = React.createElement(
        Menu,
        null,
        React.createElement(
          Menu.Item,
          null,
          React.createElement(
            "a",
            { target: "_blank", rel: "noopener noreferrer", href: "myInfo.html" },
            "\u4E2A\u4EBA\u4E2D\u5FC3"
          )
        ),
        React.createElement(
          Menu.Item,
          null,
          React.createElement(
            "a",
            { target: "_blank", rel: "noopener noreferrer", href: "" },
            "\u9000\u51FA"
          )
        )
      );
      return React.createElement(
        Layout,
        null,
        React.createElement(
          Sider,
          {
            trigger: null,
            collapsible: true,
            collapsed: this.state.collapsed
          },
          React.createElement("div", { className: "logo" }),
          React.createElement(
            Menu,
            { theme: "dark", mode: "inline", defaultSelectedKeys: ['1'] },
            React.createElement(
              Menu.Item,
              { key: "1" },
              React.createElement(Icon, { type: "user" }),
              React.createElement(
                "span",
                null,
                "nav 1"
              )
            ),
            React.createElement(
              Menu.Item,
              { key: "2" },
              React.createElement(Icon, { type: "video-camera" }),
              React.createElement(
                "span",
                null,
                "nav 2"
              )
            ),
            React.createElement(
              Menu.Item,
              { key: "3" },
              React.createElement(Icon, { type: "upload" }),
              React.createElement(
                "span",
                null,
                "nav 3"
              )
            )
          )
        ),
        React.createElement(
          Layout,
          null,
          React.createElement(
            Header,
            { style: { background: '#fff', padding: 0 } },
            React.createElement(Icon, {
              className: "trigger",
              type: this.state.collapsed ? 'menu-unfold' : 'menu-fold',
              onClick: this.toggle
            }),
            React.createElement(
              "span",
              { className: "user-logo" },
              "admin"
            ),
            React.createElement(
              Dropdown,
              { overlay: dropMenu },
              React.createElement(
                "a",
                { className: "ant-dropdown-link", href: "#" },
                React.createElement(Icon, { type: "down" })
              )
            )
          ),
          React.createElement(
            Content,
            { style: { margin: '24px 16px', padding: 24, background: '#fff', minHeight: 880 } },
            React.createElement(Formdemo, { submitHandler: this.submitHandler }),
            React.createElement(Mtable, { onDelete: this.onDelete, params: { loading: this.state.loading, dataSource: this.state.dataSource, submitHandler: this.submitHandler } })
          )
        )
      );
    }
  }]);
  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ "./src/module/data.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var datas = [];
for (var i = 0; i < 100; i++) {
    datas.push({
        key: i,
        id: i,
        userName: 'admin' + i,
        cell: '' + (i + 200),
        qq: '' + (i + 100),
        account: '' + i * 100,
        time: Mock.Random.date('yyyy-MM-dd'),
        belong: 'admin' + i,
        memo: 'hello' + i,
        status: i

    });
}
exports.default = datas;

/***/ })

},["./src/index.js"]);
});