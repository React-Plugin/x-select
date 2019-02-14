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
function getOffset(element){
  let actualLeft=element.offsetLeft;
  let parent=element.offsetParent;
  let actualTop = element.offsetTop;
  while(parent!=null){
      actualLeft+=parent.offsetLeft+(parent.offsetWidth-parent.clientWidth)/2;
      actualTop+=parent.offsetTop+(parent.offsetHeight-parent.clientHeight)/2;
      parent=parent.offsetParent;
  }
  return {x:actualLeft,y:actualTop+element.offsetHeight};
}
const ListContainer = (ListComponent,SelectComponent)=> class extends Component {
  static propTypes ={
    children: PropTypes.array,
    defaultValue: PropTypes.oneOfType([PropTypes.array,PropTypes.string]),
    multiple:PropTypes.bool,
  }
  static defaultProps = {
    defaultValue:'',
    multiple:false
  }
  constructor(props){
    super(props);
    this.state = {isShow:props.isShow || false , selectItem:{value:this.props.defaultValue},listStyle:{}};
    this.onClick = this.onClick.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.unSelect = this.unSelect.bind(this);
  }
  onClick(){
    this.toggleShow();
  }
  setPosition(){
    //获取元素位置
    let dom = ReactDOM.findDOMNode(this.handle);
    let {x,y} = getOffset(dom);
    // console.log(x,y)
    let minWidth = dom.offsetWidth;
    this.setState({listStyle:{left:x,top:y,minWidth}});
  }
  toggleShow(){
    this.setState({isShow:!this.state.isShow},this.setPosition);
  }
  findIndex(arr,callback) { 
      for (var i = 0; i < arr.length; i++) { 
          if (callback (arr[i]) ) return i; 
      } 
      return -1; 
  }
  //移除数组项,返回新数组
  remove = function(arr,callback) { 
      var index = this.findIndex(arr,callback); 
      if (index > -1) { 
        return arr.filter((item,i)=>i != index);
      } 
  }
  onSelect(value,text,selected,e){
    // console.log(selected)
    let selectValue = []
    if(this.props.multiple){
      if(typeof this.state.selectItem.value ==='object'){
        //取消选中
        if(selected){
          selectValue = this.remove(this.state.selectItem.value,o=>o==value);
        }else{
          selectValue = selectValue.concat(this.state.selectItem.value,value);
        }
      }else{
        selectValue = selectValue.concat([this.state.selectItem.value],value);
      }
    }else{
      selectValue.push(value);
    }
    this.setState({selectItem:{value:selectValue,text}},()=>{
      if(!this.props.multiple){
        this.toggleShow();
      }
      this.setPosition();
    });
    e.nativeEvent.stopImmediatePropagation();
  }
  hide=()=>{
    this.setState({isShow:false});
  }
  formatlist(children){
    let selectedItem = [];
    let options = children.map(item => {
      let value = item.props.value || item.props.children;
      let text = item.props.children;
      let selected = false;
      let {selectItem} = this.state;
      if(typeof selectItem.value==='object'){
        selected = selectItem.value.filter(it=>it == value).length>0 ;
      }else{
        selected = selectItem.value == value;
      }
      if(selected){
        selectedItem.push({value,text});
      }
      return (<Option key={value} {...item.props} selected={selected} onSelect={this.onSelect.bind(this,value,text,selected)}/>)
    });
    return {
      options,
      selectedItem
    }
  } 
  //取消选中项
  unSelect(v,e){
    this.onSelect(v,'',true,e)
  }
  render () {
    let {children,multiple,width} = this.props;
    let {options,selectedItem}=this.formatlist(children);
    return (
      <div className="x-select" onBlur={this.hide}>
        <SelectComponent multiple={multiple} onHide={this.hide} {...this.props} isActive={this.state.isShow} unSelect={this.unSelect} selectedItem={selectedItem} onClick={this.onClick} ref={ref=>this.handle=ref}/>
          <ListComponent>
            <div className={this.state.isShow?'x-select-list x-select-show':'x-select-hide'} style={this.state.listStyle}>
                {
                 options
                }
            </div>
          </ListComponent>
      </div>
    );
  }
}
const Select  = ListContainer(ListPortal,SelectInput);
Select.Option = Option;
export default Select;