(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Dialog"] = factory(require("react"), require("react-dom"));
	else
		root["Dialog"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Select = __webpack_require__(1);

	var _Select2 = _interopRequireDefault(_Select);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	module.exports = _Select2.default; //使用module.exports时，从es6到es5生成的dist不会出现export.default的问题.
	/*
	 * Created with Visual Studio Code.
	 * github: https://github.com/react-xui/x-select
	 * User: 田想兵
	 * Date: 2017-05-14
	 * Time: 20:00:00
	 * Contact: 55342775@qq.com
	 */

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _jsxList = __webpack_require__(3);

	var _jsxList2 = _interopRequireDefault(_jsxList);

	var _SelectInput = __webpack_require__(7);

	var _SelectInput2 = _interopRequireDefault(_SelectInput);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} /*
	   * Created with Visual Studio Code.
	   * github: https://github.com/React-xui/x-select
	   * User: 田想兵
	   * Date: 2018-12-10
	   * Time: 20:00:00
	   * Contact: 55342775@qq.com
	   */

	var ListContainer = function ListContainer(ListComponent, SelectComponent) {
	  return function (_Component) {
	    _inherits(_class, _Component);

	    function _class(props) {
	      _classCallCheck(this, _class);

	      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

	      _this.state = { isShow: props.isShow || false };
	      _this.onClick = _this.onClick.bind(_this);
	      return _this;
	    }

	    _createClass(_class, [{
	      key: 'onClick',
	      value: function onClick() {
	        this.setState({ isShow: !this.state.isShow });
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _props = this.props,
	            children = _props.children,
	            placeholder = _props.placeholder;

	        return _react2.default.createElement('div', { className: 'x-select' }, _react2.default.createElement(SelectComponent, { placeholder: placeholder, onClick: this.onClick }), _react2.default.createElement('div', { className: this.state.isShow ? 'x-select-list x-select-show' : 'x-select-hide' }, _react2.default.createElement(ListComponent, null, children)));
	      }
	    }]);

	    return _class;
	  }(_react.Component);
	};
	var Select = ListContainer(_jsxList2.default, _SelectInput2.default);
	Select.Option = _jsxList2.default.Option;
	exports.default = Select;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _List = __webpack_require__(4);

	var _List2 = _interopRequireDefault(_List);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _List2.default; //使用module.exports时，从es6到es5生成的dist不会出现export.default的问题.
	/*
	 * Created with Visual Studio Code.
	 * github: https://github.com/React-Plugin/x-list
	 * User: 田想兵
	 * Date: 2017-05-14
	 * Time: 20:00:00
	 * Contact: 55342775@qq.com
	 */

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Option = __webpack_require__(6);

	var _Option2 = _interopRequireDefault(_Option);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created with Visual Studio Code.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * github: https://github.com/React-xui/x-list
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * User: 田想兵
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 2018-11-30
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Time: 20:00:00
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Contact: 55342775@qq.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var List = function (_Component) {
	  _inherits(List, _Component);

	  function List(props) {
	    _classCallCheck(this, List);

	    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

	    _this.state = { data: props.data };
	    return _this;
	  }

	  _createClass(List, [{
	    key: 'render',
	    value: function render() {
	      console.log(123);
	      var _props = this.props,
	          children = _props.children,
	          onSelect = _props.onSelect;
	      var data = this.state.data;

	      return _react2.default.createElement(
	        'div',
	        { className: 'x-list' },
	        children
	      );
	    }
	  }]);

	  return List;
	}(_react.Component);

	List.Option = _Option2.default;
	exports.default = List;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var getCss = function getCss(obj) {
	    var arr = [];
	    for (var k in obj) {
	        if (k === "true") {
	            arr.push(obj[k]);
	        }
	    }
	    return arr.join(' ');
	};

	exports.default = function (props) {
	    var _getCss;

	    var selected = props.selected,
	        disabled = props.disabled,
	        className = props.className,
	        children = props.children,
	        onSelect = props.onSelect;

	    var cls = getCss((_getCss = {}, _defineProperty(_getCss, selected, 'x-list-option-selected'), _defineProperty(_getCss, disabled, 'x-list-option-disabled'), _getCss));
	    return _react2.default.createElement(
	        'div',
	        { className: 'x-list-option ' + cls, onClick: onSelect },
	        children
	    );
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var SelectInput = function (_Component) {
	    _inherits(SelectInput, _Component);

	    function SelectInput() {
	        _classCallCheck(this, SelectInput);

	        return _possibleConstructorReturn(this, (SelectInput.__proto__ || Object.getPrototypeOf(SelectInput)).apply(this, arguments));
	    }

	    _createClass(SelectInput, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                selectItem = _props.selectItem,
	                isActive = _props.isActive,
	                onClick = _props.onClick,
	                placeholder = _props.placeholder;

	            var _ref = selectItem || '',
	                text = _ref.text;

	            return _react2.default.createElement('div', { className: 'x-select-input', onClick: onClick }, _react2.default.createElement('input', { type: 'text', placeholder: placeholder, disabled: true, value: text }));
	        }
	    }]);

	    return SelectInput;
	}(_react.Component);

	SelectInput.displayName = 'SelectInput';
	exports.default = SelectInput;

/***/ })
/******/ ])
});
;