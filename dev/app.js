import React from 'react';
import ReactDOM from 'react-dom';
import Select from '../src/index';
import '../src/_index';
const {Option} = Select;
var appElement = document.getElementById('example');
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  onSelectHandle(item,index){
    console.log(item,index)
  }
  render() {
    return (
      <div>
        <Select placeholder="请选择">
          <Option>你好1</Option>
          <Option>我好2</Option>
        </Select>
      </div>
    )
  }
}
ReactDOM.render(<App />, appElement);