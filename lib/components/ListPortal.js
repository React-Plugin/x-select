'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jsxList = require('jsx-list');

var _jsxList2 = _interopRequireDefault(_jsxList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var renderSubtreeIntoContainer = _reactDom2.default.unstable_renderSubtreeIntoContainer;

var ListPortal = function (_Component) {
  _inherits(ListPortal, _Component);

  function ListPortal() {
    _classCallCheck(this, ListPortal);

    return _possibleConstructorReturn(this, (ListPortal.__proto__ || Object.getPrototypeOf(ListPortal)).apply(this, arguments));
  }

  _createClass(ListPortal, [{
    key: 'componentWillReceiveProps',

    //props有更新时调用事件,更新portal组件，相当于render。
    value: function componentWillReceiveProps(newProps) {
      this.renderPortal(newProps);
    }
    //初始化时插入父级和渲染一次portal组件

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.node = document.createElement("div");
      document.body.appendChild(this.node);
      this.renderPortal(this.props);
    }
    //模拟render方法，调用portal组件时传入父级容器

  }, {
    key: 'renderPortal',
    value: function renderPortal(props) {
      // console.log(props)
      renderSubtreeIntoContainer(this, _react2.default.createElement(_jsxList2.default, props), this.node);
    }
    //组件销毁时触发,移除绑定

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _reactDom2.default.unmountComponentAtNode(this.node);
      this.node.parentNode.removeChild(this.node);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return ListPortal;
}(_react.Component);

exports.default = ListPortal;