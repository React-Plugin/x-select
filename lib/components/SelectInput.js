'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectInput = function (_Component) {
    _inherits(SelectInput, _Component);

    function SelectInput(props) {
        _classCallCheck(this, SelectInput);

        var _this = _possibleConstructorReturn(this, (SelectInput.__proto__ || Object.getPrototypeOf(SelectInput)).call(this, props));

        _this.state = { isExtends: false, overItem: { isover: false } };
        _this.onClick = _this.onClick.bind(_this);
        _this.onBlur = _this.onBlur.bind(_this);
        return _this;
    }

    _createClass(SelectInput, [{
        key: 'onClick',
        value: function onClick(e) {
            this.setState({ isExtends: !this.state.isExtends });
            this.props.onClick(e);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps, newState) {
            if (newProps && newProps.isActive !== this.state.isActive) {
                if (newProps.isActive && this.state.isExtends != newProps.isActive) {
                    this.addEvent();
                } else if (!newProps.isActive && this.state.isExtends != newProps.isActive) {
                    this.removeEvent();
                }
                this.setState({ isExtends: newProps.isActive });
            }
        }
    }, {
        key: 'addEvent',
        value: function addEvent() {
            window.addEventListener('blur', this.onBlur);
            document.addEventListener('click', this.onBlur);
        }
    }, {
        key: 'onBlur',
        value: function onBlur() {
            this.props.onHide();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.removeEvent();
        }
    }, {
        key: 'removeEvent',
        value: function removeEvent() {
            window.removeEventListener('blur', this.onBlur);
            document.removeEventListener('click', this.onBlur);
        }
        //取消选择项

    }, {
        key: 'unSelect',
        value: function unSelect(v, e) {
            e.stopPropagation();
            this.props.unSelect(v, e);
        }
    }, {
        key: 'formatSelected',
        value: function formatSelected() {
            var _this2 = this;

            var _props = this.props,
                selectedItem = _props.selectedItem,
                placeholder = _props.placeholder,
                name = _props.name,
                multiple = _props.multiple;

            var titleArr = [];
            if (selectedItem.length == 0) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        placeholder
                    ),
                    _react2.default.createElement('input', { type: 'hidden', ref: function ref(_ref) {
                            return _this2.input = _ref;
                        }, name: name, defaultValue: '' })
                );
            } else {
                var selectedvalue = [];
                var arr = selectedItem.map(function (item) {
                    selectedvalue.push(item.value);
                    titleArr.push(item.text);
                    return _react2.default.createElement(
                        'div',
                        { className: 'x-selected-item', key: item.value },
                        item.text,
                        multiple ? _react2.default.createElement('i', { className: 'xui icon-close', onClick: _this2.unSelect.bind(_this2, item.value) }) : undefined
                    );
                });
                if (!multiple) {
                    selectedvalue = selectedvalue.join('');
                } else {
                    selectedvalue = JSON.stringify(selectedvalue);
                }
                if (this.state.overItem.isover) {
                    arr = _react2.default.createElement(
                        'div',
                        null,
                        'select ' + this.props.selectedItem.length + ' items'
                    );
                }
                return _react2.default.createElement(
                    'div',
                    { ref: function ref(_ref3) {
                            return _this2.list = _ref3;
                        }, title: titleArr.join(',') },
                    arr,
                    _react2.default.createElement('input', { type: 'hidden', ref: function ref(_ref2) {
                            return _this2.input = _ref2;
                        }, name: name, defaultValue: selectedvalue })
                );
            }
        }
    }, {
        key: 'computItem',
        value: function computItem() {
            if (this.list && this.props.selectedItem.length > 1) {
                var c = this.list.querySelectorAll('.x-selected-item');
                if (c.length) {
                    var lw = this.list.offsetWidth;
                    var cw = 0;
                    Array.prototype.slice.call(c).forEach(function (item) {
                        cw += item.offsetWidth + 4;
                    });
                    if (cw > lw && !this.state.overItem.isover) {
                        //超出下拉宽显示选中个数
                        this.setState({ "overItem": { isover: true } });
                    } else if (this.state.overItem.isover) {
                        this.setState({ "overItem": { isover: false } });
                    }
                }
            } else if (this.state.overItem.isover) {
                this.setState({ "overItem": { isover: false } });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.computItem();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.computItem();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                isActive = _props2.isActive,
                onClick = _props2.onClick,
                width = _props2.width,
                multiple = _props2.multiple;
            // const {text,value} = selectedItem||{};

            return _react2.default.createElement(
                'div',
                { className: "x-select-handle " + (multiple ? "multiple" : ""), style: { width: width }, onClick: this.onClick },
                this.formatSelected(),
                _react2.default.createElement('i', { className: !this.state.isExtends ? "xui icon-arrowdown x-arrow" : "xui icon-arrowup x-arrow" })
            );
        }
    }]);

    return SelectInput;
}(_react.Component);

SelectInput.displayName = 'SelectInput';
exports.default = SelectInput;