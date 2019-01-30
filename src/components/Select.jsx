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
import List from 'jsx-list';
import SelectInput from './SelectInput';
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
  onSelect(value,text){
    this.setState({selectItem:{value,text}},()=>{
      this.toggleShow();
    });
  }
  render () {
    let {children,placeholder,width} = this.props;
    let {Option} = ListComponent;
    return (
      <div className="x-select">
        <SelectComponent style={{width}} {...this.props} selectItem={this.state.selectItem} onClick={this.onClick} ref={ref=>this.handle=ref}/>
        <div className={this.state.isShow?'x-select-list x-select-show':'x-select-hide'} style={this.state.listStyle}>
          <ListComponent>
            {
              children.map(item => {
                let value = item.props.value || item.props.children;
                let text = item.props.children;
                return (<Option key={value} {...item.props} onSelect={this.onSelect.bind(this,value,text)}/>)
              })
            }
          </ListComponent>
        </div>
      </div>
    );
  }
}
const Select  = ListContainer(List,SelectInput)
Select.Option = List.Option;
export default Select;