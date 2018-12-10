'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

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