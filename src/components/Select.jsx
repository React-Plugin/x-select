/*
 * Created with Visual Studio Code.
 * github: https://github.com/React-xui/x-select
 * User: 田想兵
 * Date: 2018-12-10
 * Time: 20:00:00
 * Contact: 55342775@qq.com
 */
import React, { Component } from 'react';
import List from 'jsx-list';
import SelectInput from './SelectInput';

const ListContainer = (ListComponent,SelectComponent)=> class extends Component {
  constructor(props){
    super(props);
    this.state = {isShow:props.isShow || false};
    this.onClick = this.onClick.bind(this);
  }
  onClick(){
    this.setState({isShow:!this.state.isShow});
  }
  render () {
    let {children,placeholder} = this.props;
    return (
      <div className="x-select">
        <SelectComponent placeholder={placeholder} onClick={this.onClick}/>
        <div className={this.state.isShow?'x-select-list x-select-show':'x-select-hide'}>
          <ListComponent>
            {children}
          </ListComponent>
        </div>
      </div>
    );
  }
}
const Select  = ListContainer(List,SelectInput)
Select.Option = List.Option;
export default Select;