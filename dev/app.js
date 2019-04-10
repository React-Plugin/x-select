import React from 'react';
import ReactDOM from 'react-dom';
import Select from '../src/index';
import '../src/_index';
const {Option} = Select;
var appElement = document.getElementById('example');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectValue:["1"]}
  }
  onSelectHandle(item,index){
    console.log(item,index)
  }
  onChange=v=>{
    console.log(v)
  }
  render() {
    return (
      <div>
          <div>设定宽度120px，默认值为空:<Select placeholder="请选择" name="myselect" width={120}>
            <Option>你好1</Option>
            <Option>我好2</Option>
          </Select>
          </div>
          <div>
          设定宽度100px，选中值为2的项，不设定内容宽:
        <Select placeholder="请选择" width={100} defaultValue="2" name="myselect" >
          <Option value="1">这是一段很长很长的文字这是一段很长很长的文字</Option>
          <Option value="2">我好2</Option>
        </Select>
          不定宽度的自适应:
        <Select placeholder="请选择" defaultValue="1" name="myselect" >
          <Option value="1">这是一段很长很长的文字这是一段很长很长的文字</Option>
          <Option value="2">我好2</Option>
        </Select>
          多选:
        <Select placeholder="请选择" multiple={true} defaultValue="" name="myselect" >
          <Option value="1">这是一段很长很长的文字这是一段很长很长的文字</Option>
          <Option value="2">我好2</Option>
          <Option value="3">E1</Option>
          <Option value="4">D3</Option>
          <Option value="5">D5</Option>
          <Option value="6">我好2</Option>
        </Select>
          多选:
        <Select placeholder="请选择" onChange={this.onChange} multiple={true} width={180} value={this.state.selectValue} name="myselect" >
          <Option value="1">这是一段很长很长的文字这是一段很长很长的文字</Option>
          <Option value="2">我好2</Option>
          <Option value="3">E1</Option>
          <Option value="4">D3</Option>
          <Option value="5">D5</Option>
          <Option value="6">我好2</Option>
        </Select>
        <button onClick={e=>this.setState({selectValue:["3"]})}>点我</button>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<App />, appElement);