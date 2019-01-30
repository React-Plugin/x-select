'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jsxList = require('jsx-list');

var _jsxList2 = _interopRequireDefault(_jsxList);

var _SelectInput = require('./SelectInput');

var _SelectInput2 = _interopRequireDefault(_SelectInput);

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
  return function (_Component) {
    _inherits(_class, _Component);

    function _class(props) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

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
      value: function onSelect(value, text) {
        var _this3 = this;

        this.setState({ selectItem: { value: value, text: text } }, function () {
          _this3.toggleShow();
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;

        var _props = this.props,
            children = _props.children,
            placeholder = _props.placeholder,
            width = _props.width;
        var Option = ListComponent.Option;

        return _react2.default.createElement(
          'div',
          { className: 'x-select' },
          _react2.default.createElement(SelectComponent, _extends({ style: { width: width } }, this.props, { selectItem: this.state.selectItem, onClick: this.onClick, ref: function ref(_ref) {
              return _this4.handle = _ref;
            } })),
          _react2.default.createElement(
            'div',
            { className: this.state.isShow ? 'x-select-list x-select-show' : 'x-select-hide', style: this.state.listStyle },
            _react2.default.createElement(
              ListComponent,
              null,
              children.map(function (item) {
                var value = item.props.value || item.props.children;
                var text = item.props.children;
                return _react2.default.createElement(Option, _extends({ key: value }, item.props, { onSelect: _this4.onSelect.bind(_this4, value, text) }));
              })
            )
          )
        );
      }
    }]);

    return _class;
  }(_react.Component);
};
var Select = ListContainer(_jsxList2.default, _SelectInput2.default);
Select.Option = _jsxList2.default.Option;
exports.default = Select;