/*
 * Created with Visual Studio Code.
 * github: https://github.com/React-xui/x-select
 * User: 田想兵
 * Date: 2018-12-10
 * Time: 20:00:00
 * Contact: 55342775@qq.com
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SelectInput from './SelectInput';
import ListPortal from './ListPortal';
import List from 'jsx-list';
import PropTypes from 'prop-types';

let Option = List.Option;

// 获取元素在页面上的绝对位置
function offset(node) {
  var offest = {
    top: 0,
    left: 0
  };
  // 当前为IE11以下, 直接返回{top: 0, left: 0}
  if (!node.getClientRects().length) {
    return offest;
  }
  // 当前DOM节点的 display === 'node' 时, 直接返回{top: 0, left: 0}
  if (window.getComputedStyle(node)['display'] === 'none') {
    return offest;
  }
  // Element.getBoundingClientRect()方法返回元素的大小及其相对于视口的位置。
  // 返回值包含了一组用于描述边框的只读属性——left、top、right和bottom，单位为像素。除了 width 和 height 外的属性都是相对于视口的左上角位置而言的。
  // 返回如{top: 8, right: 1432, bottom: 548, left: 8, width: 1424…}
  offest = node.getBoundingClientRect();
  var docElement = node.ownerDocument.documentElement;
  return {
    top: offest.top + window.pageYOffset - docElement.clientTop,
    left: offest.left + window.pageXOffset - docElement.clientLeft
  };
}
const ListContainer = (ListComponent, SelectComponent) => class extends Component {
  static propTypes = {
    children: PropTypes.array,
    defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    value: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    multiple: PropTypes.bool,
    onChange: PropTypes.func
  }
  static defaultProps = {
    defaultValue: '',
    value: null,
    multiple: false
  }
  constructor(props) {
    super(props);
    this.state = { isShow: props.isShow || false, selectItem: { value: this.props.value != null ? this.props.value : this.props.defaultValue }, listStyle: {} };
    // console.log(this.state.selectItem)
    this.onClick = this.onClick.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.unSelect = this.unSelect.bind(this);
  }
  onClick() {
    this.toggleShow();
  }
  componentWillReceiveProps(newProps) {
    if (typeof newProps.value !== 'undefined') {
      if (typeof newProps.value === 'object') {
        if (JSON.stringify(newProps.value) !== JSON.stringify(this.props.value)) {
          this.setState({ selectItem: { value: newProps.value } }, () => {
            this.props.onChange && this.props.onChange(this.state.selectItem.value);
          });
        }
      } else if (newProps.value !== this.props.value) {
        this.setState({ selectItem: { value: newProps.value } }, () => {
          this.props.onChange && this.props.onChange(this.state.selectItem.value);
        });
      }
    }
  }
  setPosition() {
    //获取元素位置
    let dom = ReactDOM.findDOMNode(this.handle);
    let { left, top } = offset(dom);
    // console.log(x,y)
    let minWidth = dom.offsetWidth;
    let y = dom.offsetHeight + top + 2;
    this.setState({ listStyle: { left: left, top: y, minWidth } });
  }
  toggleShow() {
    this.setState({ isShow: !this.state.isShow }, this.setPosition);
  }
  findIndex(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
      if (callback(arr[i])) return i;
    }
    return -1;
  }
  //移除数组项,返回新数组
  remove = function (arr, callback) {
    var index = this.findIndex(arr, callback);
    if (index > -1) {
      return arr.filter((item, i) => i != index);
    }
  }
  onSelect(value, text, selected, e) {
    // console.log(selected)
    let selectValue = []
    if (this.props.multiple) {
      if (typeof this.state.selectItem.value === 'object') {
        //取消选中
        if (selected) {
          selectValue = this.remove(this.state.selectItem.value, o => o == value);
        } else {
          selectValue = selectValue.concat(this.state.selectItem.value, value);
        }
      } else {
        if (selected) {
          selectValue = this.remove([this.state.selectItem.value], o => o == value);
        } else {
          selectValue = selectValue.concat([this.state.selectItem.value], value);
        }
      }
    } else {
      selectValue = value;
    }
    this.setState({ selectItem: { value: selectValue, text } }, () => {
      if (!this.props.multiple) {
        this.toggleShow();
      }
      this.setPosition();
      this.props.onChange && this.props.onChange(this.state.selectItem.value);
    });
    e.nativeEvent.stopImmediatePropagation();
  }
  hide = () => {
    this.setState({ isShow: false });
  }
  formatlist(children) {
    let selectedItem = [];
    let options = children.map(item => {
      let value = item.props.value || item.props.children;
      let text = item.props.children;
      let selected = false;
      let { selectItem } = this.state;
      if (typeof selectItem.value === 'object') {
        selected = selectItem.value.filter(it => it == value).length > 0;
      } else {
        selected = selectItem.value == value;
      }
      if (selected) {
        selectedItem.push({ value, text });
      }
      return (<Option key={value} {...item.props} selected={selected} onSelect={this.onSelect.bind(this, value, text, selected)} />)
    });
    return {
      options,
      selectedItem
    }
  }
  //取消选中项
  unSelect(v, e) {
    this.onSelect(v, '', true, e)
  }
  componentDidUpdate() {
    if (this.state.isShow) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }
  startTimer() {
    if(!this.timer){
      this.timer = setTimeout(() => {
        clearTimeout(this.timer);
        this.timer =null;
        this.setPosition();
        // console.log('timer...')
      }, 200);
    }
  }
  stopTimer() {
    if(this.timer){
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
  render() {
    let { children, multiple, width } = this.props;
    let { options, selectedItem } = this.formatlist(children);
    return (
      <div className="x-select" onBlur={this.hide}>
        <SelectComponent multiple={multiple} onHide={this.hide} {...this.props} isActive={this.state.isShow} unSelect={this.unSelect} selectedItem={selectedItem} onClick={this.onClick} ref={ref => this.handle = ref} />
        <ListComponent>
          <div className={this.state.isShow ? 'x-select-list x-select-show' : 'x-select-hide'} style={this.state.listStyle}>
            {
              options
            }
          </div>
        </ListComponent>
      </div>
    );
  }
}
const Select = ListContainer(ListPortal, SelectInput);
Select.Option = Option;
export default Select;