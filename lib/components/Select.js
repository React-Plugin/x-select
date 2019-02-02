'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SelectInput = require('./SelectInput');

var _SelectInput2 = _interopRequireDefault(_SelectInput);

var _ListPortal = require('./ListPortal');

var _ListPortal2 = _interopRequireDefault(_ListPortal);

var _jsxList = require('jsx-list');

var _jsxList2 = _interopRequireDefault(_jsxList);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created with Visual Studio Code.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * github: https://github.com/React-xui/x-select
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * User: 田想兵
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 2018-12-10
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Time: 20:00:00
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Contact: 55342775@qq.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Option = _jsxList2.default.Option;

// 获取元素在页面上的绝对位置
function getOffset(element) {
  var actualLeft = element.offsetLeft;
  var parent = element.offsetParent;
  var actualTop = element.offsetTop;
  while (parent != null) {
    actualLeft += parent.offsetLeft + (parent.offsetWidth - parent.clientWidth) / 2;
    actualTop += parent.offsetTop + (parent.offsetHeight - parent.clientHeight) / 2;
    parent = parent.offsetParent;
  }
  return { x: actualLeft, y: actualTop + element.offsetHeight };
}
var ListContainer = function ListContainer(ListComponent, SelectComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(_class, _Component);

    function _class(props) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      _this.hide = function () {
        _this.setState({ isShow: false });
      };

      _this.state = { isShow: props.isShow || false, selectItem: { value: _this.props.defaultValue }, listStyle: {} };
      _this.onClick = _this.onClick.bind(_this);
      _this.onSelect = _this.onSelect.bind(_this);
      return _this;
    }

    _createClass(_class, [{
      key: 'onClick',
      value: function onClick() {
        this.toggleShow();
      }
    }, {
      key: 'toggleShow',
      value: function toggleShow() {
        var _this2 = this;

        this.setState({ isShow: !this.state.isShow }, function () {
          //获取元素位置
          var dom = _reactDom2.default.findDOMNode(_this2.handle);

          var _getOffset = getOffset(dom),
              x = _getOffset.x,
              y = _getOffset.y;

          console.log(x, y);
          var minWidth = dom.offsetWidth;
          _this2.setState({ listStyle: { left: x, top: y, minWidth: minWidth } });
        });
      }
    }, {
      key: 'onSelect',
      value: function onSelect(value, text, e) {
        var _this3 = this;

        e.nativeEvent.stopImmediatePropagation();
        if (this.props.multiple) {}
        this.setState({ selectItem: { value: value, text: text } }, function () {
          _this3.toggleShow();
        });
      }
    }, {
      key: 'formatlist',
      value: function formatlist(children) {
        var _this4 = this;

        var selectedItem = [];
        var options = children.map(function (item) {
          var value = item.props.value || item.props.children;
          var text = item.props.children;
          var selected = false;
          var selectItem = _this4.state.selectItem;

          if (_typeof(selectItem.value) === 'object') {
            selected = selectItem.value.filter(function (it) {
              return it.value == value;
            }).length > 0;
          } else {
            selected = selectItem.value == value;
          }
          if (selected) {
            selectedItem.push({ value: value, text: text });
          }
          return _react2.default.createElement(Option, _extends({ key: value }, item.props, { selected: selected, onSelect: _this4.onSelect.bind(_this4, value, text) }));
        });
        return {
          options: options,
          selectedItem: selectedItem
        };
      }
    }, {
      key: 'render',
      value: function render() {
        var _this5 = this;

        var _props = this.props,
            children = _props.children,
            multiple = _props.multiple,
            width = _props.width;

        var _formatlist = this.formatlist(children),
            options = _formatlist.options,
            selectedItem = _formatlist.selectedItem;

        return _react2.default.createElement(
          'div',
          { className: 'x-select', onBlur: this.hide },
          _react2.default.createElement(SelectComponent, _extends({ multiple: multiple, onHide: this.hide }, this.props, { isActive: this.state.isShow, selectedItem: selectedItem, onClick: this.onClick, ref: function ref(_ref) {
              return _this5.handle = _ref;
            } })),
          _react2.default.createElement(
            ListComponent,
            null,
            _react2.default.createElement(
              'div',
              { className: this.state.isShow ? 'x-select-list x-select-show' : 'x-select-hide', style: this.state.listStyle },
              options
            )
          )
        );
      }
    }]);

    return _class;
  }(_react.Component), _class.propTypes = {
    children: _propTypes2.default.array,
    defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
    multiple: _propTypes2.default.bool
  }, _class.defaultProps = {
    defaultValue: '',
    multiple: false
  }, _temp;
};
var Select = ListContainer(_ListPortal2.default, _SelectInput2.default);
Select.Option = Option;
exports.default = Select;