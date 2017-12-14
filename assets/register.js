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

/***/ "./node_modules/antd/lib/auto-complete/InputElement.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var InputElement = function (_React$Component) {
    (0, _inherits3['default'])(InputElement, _React$Component);

    function InputElement() {
        (0, _classCallCheck3['default'])(this, InputElement);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (InputElement.__proto__ || Object.getPrototypeOf(InputElement)).apply(this, arguments));

        _this.focus = function () {
            _this.ele.focus ? _this.ele.focus() : (0, _reactDom.findDOMNode)(_this.ele).focus();
        };
        _this.blur = function () {
            _this.ele.blur ? _this.ele.blur() : (0, _reactDom.findDOMNode)(_this.ele).blur();
        };
        _this.saveRef = function (ele) {
            _this.ele = ele;
            var childRef = _this.props.children.ref;
            if (typeof childRef === 'function') {
                childRef(ele);
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(InputElement, [{
        key: 'render',
        value: function render() {
            return _react2['default'].cloneElement(this.props.children, (0, _extends3['default'])({}, this.props, { ref: this.saveRef }), null);
        }
    }]);
    return InputElement;
}(_react2['default'].Component);

exports['default'] = InputElement;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/auto-complete/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _rcSelect = __webpack_require__("./node_modules/rc-select/es/index.js");

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _select = __webpack_require__("./node_modules/antd/lib/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _input = __webpack_require__("./node_modules/antd/lib/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _InputElement = __webpack_require__("./node_modules/antd/lib/auto-complete/InputElement.js");

var _InputElement2 = _interopRequireDefault(_InputElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function isSelectOptionOrSelectOptGroup(child) {
    return child && child.type && (child.type.isSelectOption || child.type.isSelectOptGroup);
}

var AutoComplete = function (_React$Component) {
    (0, _inherits3['default'])(AutoComplete, _React$Component);

    function AutoComplete() {
        (0, _classCallCheck3['default'])(this, AutoComplete);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).apply(this, arguments));

        _this.getInputElement = function () {
            var children = _this.props.children;

            var element = children && _react2['default'].isValidElement(children) && children.type !== _rcSelect.Option ? _react2['default'].Children.only(_this.props.children) : _react2['default'].createElement(_input2['default'], null);
            var elementProps = (0, _extends3['default'])({}, element.props);
            // https://github.com/ant-design/ant-design/pull/7742
            delete elementProps.children;
            return _react2['default'].createElement(
                _InputElement2['default'],
                elementProps,
                element
            );
        };
        return _this;
    }

    (0, _createClass3['default'])(AutoComplete, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                size = _props.size,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className,
                notFoundContent = _props.notFoundContent,
                prefixCls = _props.prefixCls,
                optionLabelProp = _props.optionLabelProp,
                dataSource = _props.dataSource,
                children = _props.children;

            var cls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-sm', size === 'small'), (0, _defineProperty3['default'])(_classNames, className, !!className), (0, _defineProperty3['default'])(_classNames, prefixCls + '-show-search', true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-auto-complete', true), _classNames));
            var options = void 0;
            var childArray = _react2['default'].Children.toArray(children);
            if (childArray.length && isSelectOptionOrSelectOptGroup(childArray[0])) {
                options = children;
            } else {
                options = dataSource ? dataSource.map(function (item) {
                    if (_react2['default'].isValidElement(item)) {
                        return item;
                    }
                    switch (typeof item === 'undefined' ? 'undefined' : (0, _typeof3['default'])(item)) {
                        case 'string':
                            return _react2['default'].createElement(
                                _rcSelect.Option,
                                { key: item },
                                item
                            );
                        case 'object':
                            return _react2['default'].createElement(
                                _rcSelect.Option,
                                { key: item.value },
                                item.text
                            );
                        default:
                            throw new Error('AutoComplete[dataSource] only supports type `string[] | Object[]`.');
                    }
                }) : [];
            }
            return _react2['default'].createElement(
                _select2['default'],
                (0, _extends3['default'])({}, this.props, { className: cls, mode: 'combobox', optionLabelProp: optionLabelProp, getInputElement: this.getInputElement, notFoundContent: notFoundContent }),
                options
            );
        }
    }]);
    return AutoComplete;
}(_react2['default'].Component);

exports['default'] = AutoComplete;

AutoComplete.Option = _rcSelect.Option;
AutoComplete.OptGroup = _rcSelect.OptGroup;
AutoComplete.defaultProps = {
    prefixCls: 'ant-select',
    transitionName: 'slide-up',
    optionLabelProp: 'children',
    choiceTransitionName: 'zoom',
    showSearch: false,
    filterOption: false
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/cascader/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _rcCascader = __webpack_require__("./node_modules/rc-cascader/lib/index.js");

var _rcCascader2 = _interopRequireDefault(_rcCascader);

var _arrayTreeFilter = __webpack_require__("./node_modules/array-tree-filter/index.js");

var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__("./node_modules/omit.js/es/index.js");

var _omit2 = _interopRequireDefault(_omit);

var _KeyCode = __webpack_require__("./node_modules/rc-util/lib/KeyCode.js");

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _input = __webpack_require__("./node_modules/antd/lib/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _icon = __webpack_require__("./node_modules/antd/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

function highlightKeyword(str, keyword, prefixCls) {
    return str.split(keyword).map(function (node, index) {
        return index === 0 ? node : [_react2['default'].createElement(
            'span',
            { className: prefixCls + '-menu-item-keyword', key: 'seperator' },
            keyword
        ), node];
    });
}
function defaultFilterOption(inputValue, path) {
    return path.some(function (option) {
        return option.label.indexOf(inputValue) > -1;
    });
}
function defaultRenderFilteredOption(inputValue, path, prefixCls) {
    return path.map(function (_ref, index) {
        var label = _ref.label;

        var node = label.indexOf(inputValue) > -1 ? highlightKeyword(label, inputValue, prefixCls) : label;
        return index === 0 ? node : [' / ', node];
    });
}
function defaultSortFilteredOption(a, b, inputValue) {
    function callback(elem) {
        return elem.label.indexOf(inputValue) > -1;
    }
    return a.findIndex(callback) - b.findIndex(callback);
}
var defaultDisplayRender = function defaultDisplayRender(label) {
    return label.join(' / ');
};

var Cascader = function (_React$Component) {
    (0, _inherits3['default'])(Cascader, _React$Component);

    function Cascader(props) {
        (0, _classCallCheck3['default'])(this, Cascader);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Cascader.__proto__ || Object.getPrototypeOf(Cascader)).call(this, props));

        _this.handleChange = function (value, selectedOptions) {
            _this.setState({ inputValue: '' });
            if (selectedOptions[0].__IS_FILTERED_OPTION) {
                var unwrappedValue = value[0];
                var unwrappedSelectedOptions = selectedOptions[0].path;
                _this.setValue(unwrappedValue, unwrappedSelectedOptions);
                return;
            }
            _this.setValue(value, selectedOptions);
        };
        _this.handlePopupVisibleChange = function (popupVisible) {
            if (!('popupVisible' in _this.props)) {
                _this.setState({
                    popupVisible: popupVisible,
                    inputFocused: popupVisible,
                    inputValue: popupVisible ? _this.state.inputValue : ''
                });
            }
            var onPopupVisibleChange = _this.props.onPopupVisibleChange;
            if (onPopupVisibleChange) {
                onPopupVisibleChange(popupVisible);
            }
        };
        _this.handleInputBlur = function () {
            _this.setState({
                inputFocused: false
            });
        };
        _this.handleInputClick = function (e) {
            var _this$state = _this.state,
                inputFocused = _this$state.inputFocused,
                popupVisible = _this$state.popupVisible;
            // Prevent `Trigger` behaviour.

            if (inputFocused || popupVisible) {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
            }
        };
        _this.handleKeyDown = function (e) {
            if (e.keyCode === _KeyCode2['default'].BACKSPACE) {
                e.stopPropagation();
            }
        };
        _this.handleInputChange = function (e) {
            var inputValue = e.target.value;
            _this.setState({ inputValue: inputValue });
        };
        _this.setValue = function (value) {
            var selectedOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange(value, selectedOptions);
            }
        };
        _this.clearSelection = function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (!_this.state.inputValue) {
                _this.setValue([]);
                _this.handlePopupVisibleChange(false);
            } else {
                _this.setState({ inputValue: '' });
            }
        };
        _this.state = {
            value: props.value || props.defaultValue || [],
            inputValue: '',
            inputFocused: false,
            popupVisible: props.popupVisible,
            flattenOptions: props.showSearch && _this.flattenTree(props.options, props.changeOnSelect)
        };
        return _this;
    }

    (0, _createClass3['default'])(Cascader, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({ value: nextProps.value || [] });
            }
            if ('popupVisible' in nextProps) {
                this.setState({ popupVisible: nextProps.popupVisible });
            }
            if (nextProps.showSearch && this.props.options !== nextProps.options) {
                this.setState({ flattenOptions: this.flattenTree(nextProps.options, nextProps.changeOnSelect) });
            }
        }
    }, {
        key: 'getLabel',
        value: function getLabel() {
            var _props = this.props,
                options = _props.options,
                _props$displayRender = _props.displayRender,
                displayRender = _props$displayRender === undefined ? defaultDisplayRender : _props$displayRender;

            var value = this.state.value;
            var unwrappedValue = Array.isArray(value[0]) ? value[0] : value;
            var selectedOptions = (0, _arrayTreeFilter2['default'])(options, function (o, level) {
                return o.value === unwrappedValue[level];
            });
            var label = selectedOptions.map(function (o) {
                return o.label;
            });
            return displayRender(label, selectedOptions);
        }
    }, {
        key: 'flattenTree',
        value: function flattenTree(options, changeOnSelect) {
            var _this2 = this;

            var ancestor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

            var flattenOptions = [];
            options.forEach(function (option) {
                var path = ancestor.concat(option);
                if (changeOnSelect || !option.children || !option.children.length) {
                    flattenOptions.push(path);
                }
                if (option.children) {
                    flattenOptions = flattenOptions.concat(_this2.flattenTree(option.children, changeOnSelect, path));
                }
            });
            return flattenOptions;
        }
    }, {
        key: 'generateFilteredOptions',
        value: function generateFilteredOptions(prefixCls) {
            var _this3 = this;

            var _props2 = this.props,
                showSearch = _props2.showSearch,
                notFoundContent = _props2.notFoundContent;
            var _showSearch$filter = showSearch.filter,
                filter = _showSearch$filter === undefined ? defaultFilterOption : _showSearch$filter,
                _showSearch$render = showSearch.render,
                render = _showSearch$render === undefined ? defaultRenderFilteredOption : _showSearch$render,
                _showSearch$sort = showSearch.sort,
                sort = _showSearch$sort === undefined ? defaultSortFilteredOption : _showSearch$sort;
            var _state = this.state,
                flattenOptions = _state.flattenOptions,
                inputValue = _state.inputValue;

            var filtered = flattenOptions.filter(function (path) {
                return filter(_this3.state.inputValue, path);
            }).sort(function (a, b) {
                return sort(a, b, inputValue);
            });
            if (filtered.length > 0) {
                return filtered.map(function (path) {
                    return {
                        __IS_FILTERED_OPTION: true,
                        path: path,
                        label: render(inputValue, path, prefixCls),
                        value: path.map(function (o) {
                            return o.value;
                        }),
                        disabled: path.some(function (o) {
                            return o.disabled;
                        })
                    };
                });
            }
            return [{ label: notFoundContent, value: 'ANT_CASCADER_NOT_FOUND', disabled: true }];
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames, _classNames2, _classNames3;

            var props = this.props,
                state = this.state;

            var prefixCls = props.prefixCls,
                inputPrefixCls = props.inputPrefixCls,
                children = props.children,
                placeholder = props.placeholder,
                size = props.size,
                disabled = props.disabled,
                className = props.className,
                style = props.style,
                allowClear = props.allowClear,
                _props$showSearch = props.showSearch,
                showSearch = _props$showSearch === undefined ? false : _props$showSearch,
                otherProps = __rest(props, ["prefixCls", "inputPrefixCls", "children", "placeholder", "size", "disabled", "className", "style", "allowClear", "showSearch"]);

            var value = state.value;
            var sizeCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, inputPrefixCls + '-lg', size === 'large'), (0, _defineProperty3['default'])(_classNames, inputPrefixCls + '-sm', size === 'small'), _classNames));
            var clearIcon = allowClear && !disabled && value.length > 0 || state.inputValue ? _react2['default'].createElement(_icon2['default'], { type: 'cross-circle', className: prefixCls + '-picker-clear', onClick: this.clearSelection }) : null;
            var arrowCls = (0, _classnames2['default'])((_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, prefixCls + '-picker-arrow', true), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-picker-arrow-expand', state.popupVisible), _classNames2));
            var pickerCls = (0, _classnames2['default'])(className, (_classNames3 = {}, (0, _defineProperty3['default'])(_classNames3, prefixCls + '-picker', true), (0, _defineProperty3['default'])(_classNames3, prefixCls + '-picker-with-value', state.inputValue), (0, _defineProperty3['default'])(_classNames3, prefixCls + '-picker-disabled', disabled), _classNames3));
            // Fix bug of https://github.com/facebook/react/pull/5004
            // and https://fb.me/react-unknown-prop
            var inputProps = (0, _omit2['default'])(otherProps, ['onChange', 'options', 'popupPlacement', 'transitionName', 'displayRender', 'onPopupVisibleChange', 'changeOnSelect', 'expandTrigger', 'popupVisible', 'getPopupContainer', 'loadData', 'popupClassName', 'filterOption', 'renderFilteredOption', 'sortFilteredOption', 'notFoundContent']);
            var options = props.options;
            if (state.inputValue) {
                options = this.generateFilteredOptions(prefixCls);
            }
            // Dropdown menu should keep previous status until it is fully closed.
            if (!state.popupVisible) {
                options = this.cachedOptions;
            } else {
                this.cachedOptions = options;
            }
            var dropdownMenuColumnStyle = {};
            var isNotFound = (options || []).length === 1 && options[0].value === 'ANT_CASCADER_NOT_FOUND';
            if (isNotFound) {
                dropdownMenuColumnStyle.height = 'auto'; // Height of one row.
            }
            // The default value of `matchInputWidth` is `true`
            var resultListMatchInputWidth = showSearch.matchInputWidth === false ? false : true;
            if (resultListMatchInputWidth && state.inputValue && this.refs.input) {
                dropdownMenuColumnStyle.width = this.refs.input.refs.input.offsetWidth;
            }
            var input = children || _react2['default'].createElement(
                'span',
                { style: style, className: pickerCls },
                _react2['default'].createElement(
                    'span',
                    { className: prefixCls + '-picker-label' },
                    this.getLabel()
                ),
                _react2['default'].createElement(_input2['default'], (0, _extends3['default'])({}, inputProps, { ref: 'input', prefixCls: inputPrefixCls, placeholder: value && value.length > 0 ? undefined : placeholder, className: prefixCls + '-input ' + sizeCls, value: state.inputValue, disabled: disabled, readOnly: !showSearch, autoComplete: 'off', onClick: showSearch ? this.handleInputClick : undefined, onBlur: showSearch ? this.handleInputBlur : undefined, onKeyDown: this.handleKeyDown, onChange: showSearch ? this.handleInputChange : undefined })),
                clearIcon,
                _react2['default'].createElement(_icon2['default'], { type: 'down', className: arrowCls })
            );
            return _react2['default'].createElement(
                _rcCascader2['default'],
                (0, _extends3['default'])({}, props, { options: options, value: value, popupVisible: state.popupVisible, onPopupVisibleChange: this.handlePopupVisibleChange, onChange: this.handleChange, dropdownMenuColumnStyle: dropdownMenuColumnStyle }),
                input
            );
        }
    }]);
    return Cascader;
}(_react2['default'].Component);

exports['default'] = Cascader;

Cascader.defaultProps = {
    prefixCls: 'ant-cascader',
    inputPrefixCls: 'ant-input',
    placeholder: 'Please select',
    transitionName: 'slide-up',
    popupPlacement: 'bottomLeft',
    options: [],
    disabled: false,
    allowClear: true,
    notFoundContent: 'Not Found'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/array-tree-filter/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference common"))(169);

/***/ }),

/***/ "./node_modules/rc-cascader/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference common"))(698);

/***/ }),

/***/ "./src/register.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _checkbox = __webpack_require__("./node_modules/antd/lib/checkbox/index.js");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _row = __webpack_require__("./node_modules/antd/lib/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _button = __webpack_require__("./node_modules/antd/lib/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _col = __webpack_require__("./node_modules/antd/lib/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _cascader = __webpack_require__("./node_modules/antd/lib/cascader/index.js");

var _cascader2 = _interopRequireDefault(_cascader);

var _tooltip = __webpack_require__("./node_modules/antd/lib/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _icon = __webpack_require__("./node_modules/antd/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _input = __webpack_require__("./node_modules/antd/lib/input/index.js");

var _input2 = _interopRequireDefault(_input);

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

var _autoComplete = __webpack_require__("./node_modules/antd/lib/auto-complete/index.js");

var _autoComplete2 = _interopRequireDefault(_autoComplete);

var _select = __webpack_require__("./node_modules/antd/lib/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _form = __webpack_require__("./node_modules/antd/lib/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = _form2.default.Item;
var Option = _select2.default.Option;
var AutoCompleteOption = _autoComplete2.default.Option;

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
      })(_react2.default.createElement(
        _select2.default,
        { style: { width: 60 } },
        _react2.default.createElement(
          Option,
          { value: '86' },
          '+86'
        ),
        _react2.default.createElement(
          Option,
          { value: '87' },
          '+87'
        )
      ));

      var websiteOptions = autoCompleteResult.map(function (website) {
        return _react2.default.createElement(
          AutoCompleteOption,
          { key: website },
          website
        );
      });

      return _react2.default.createElement(
        _form2.default,
        { onSubmit: this.handleSubmit },
        _react2.default.createElement(
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
          })(_react2.default.createElement(_input2.default, null))
        ),
        _react2.default.createElement(
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
          })(_react2.default.createElement(_input2.default, { type: 'password' }))
        ),
        _react2.default.createElement(
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
          })(_react2.default.createElement(_input2.default, { type: 'password', onBlur: this.handleConfirmBlur }))
        ),
        _react2.default.createElement(
          FormItem,
          (0, _extends3.default)({}, formItemLayout, {
            label: _react2.default.createElement(
              'span',
              null,
              'Nickname\xA0',
              _react2.default.createElement(
                _tooltip2.default,
                { title: '\u4F60\u5E0C\u671B\u522B\u4EBA\u600E\u4E48\u79F0\u547C\u4F60?' },
                _react2.default.createElement(_icon2.default, { type: 'question-circle-o' })
              )
            ),
            hasFeedback: true
          }),
          getFieldDecorator('nickname', {
            rules: [{ required: true, message: '请输入昵称', whitespace: true }]
          })(_react2.default.createElement(_input2.default, null))
        ),
        _react2.default.createElement(
          FormItem,
          (0, _extends3.default)({}, formItemLayout, {
            label: 'Habitual Residence'
          }),
          getFieldDecorator('residence', {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }]
          })(_react2.default.createElement(_cascader2.default, { options: residences }))
        ),
        _react2.default.createElement(
          FormItem,
          (0, _extends3.default)({}, formItemLayout, {
            label: 'Phone Number'
          }),
          getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入手机号!' }]
          })(_react2.default.createElement(_input2.default, { addonBefore: prefixSelector, style: { width: '100%' } }))
        ),
        _react2.default.createElement(
          FormItem,
          (0, _extends3.default)({}, formItemLayout, {
            label: 'Website'
          }),
          getFieldDecorator('website', {
            rules: [{ required: true, message: '请输入网址!' }]
          })(_react2.default.createElement(
            _autoComplete2.default,
            {
              dataSource: websiteOptions,
              onChange: this.handleWebsiteChange,
              placeholder: 'website'
            },
            _react2.default.createElement(_input2.default, null)
          ))
        ),
        _react2.default.createElement(
          FormItem,
          (0, _extends3.default)({}, formItemLayout, {
            label: 'Captcha',
            extra: '\u4F60\u662F\u673A\u5668\u5417.'
          }),
          _react2.default.createElement(
            _row2.default,
            { gutter: 8 },
            _react2.default.createElement(
              _col2.default,
              { span: 12 },
              getFieldDecorator('captcha', {
                rules: [{ required: true, message: '请输入你收到的验证码!' }]
              })(_react2.default.createElement(_input2.default, { size: 'large' }))
            ),
            _react2.default.createElement(
              _col2.default,
              { span: 12 },
              _react2.default.createElement(
                _button2.default,
                { size: 'large' },
                'Get captcha'
              )
            )
          )
        ),
        _react2.default.createElement(
          FormItem,
          (0, _extends3.default)({}, tailFormItemLayout, { style: { marginBottom: 8 } }),
          getFieldDecorator('agreement', {
            valuePropName: 'checked'
          })(_react2.default.createElement(
            _checkbox2.default,
            null,
            'I have read the ',
            _react2.default.createElement(
              'a',
              { href: '' },
              'agreement'
            )
          ))
        ),
        _react2.default.createElement(
          FormItem,
          tailFormItemLayout,
          _react2.default.createElement(
            _button2.default,
            { type: 'primary', htmlType: 'submit' },
            'Register'
          )
        )
      );
    }
  }]);
  return RegistrationForm;
}(_react2.default.Component);

var WrappedRegistrationForm = _form2.default.create()(RegistrationForm);

_reactDom2.default.render(_react2.default.createElement(WrappedRegistrationForm, null), document.getElementById('root'));

/***/ }),

/***/ "dll-reference common":
/***/ (function(module, exports) {

module.exports = common;

/***/ })

},["./src/register.js"]);
});