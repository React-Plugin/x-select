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
  }
  onClick(){
    this.toggleShow();
  }
  toggleShow(){
    this.setState({isShow:!this.state.isShow},()=>{
      //获取元素位置
      let dom = ReactDOM.findDOMNode(this.handle);
      let {x,y} = getOffset(dom);
      console.log(x,y)
      let minWidth = dom.offsetWidth;
      this.setState({listStyle:{left:x,top:y,minWidth}})
    });
  }
  onSelect(value,text,e){
    e.nativeEvent.stopImmediatePropagation();
    if(this.props.multiple){

    }
    this.setState({selectItem:{value,text}},()=>{
      this.toggleShow();
    });
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
        selected = selectItem.value.filter(it=>it.value == value).length>0 ;
      }else{
        selected = selectItem.value == value;
      }
      if(selected){
        selectedItem.push({value,text});
      }
      return (<Option key={value} {...item.props} selected={selected} onSelect={this.onSelect.bind(this,value,text)}/>)
    });
    return {
      options,
      selectedItem
    }
  } 
  render () {
    let {children,multiple,width} = this.props;
    let {options,selectedItem}=this.formatlist(children);
    return (
      <div className="x-select" onBlur={this.hide}>
        <SelectComponent multiple={multiple} onHide={this.hide} {...this.props} isActive={this.state.isShow} selectedItem={selectedItem} onClick={this.onClick} ref={ref=>this.handle=ref}/>
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