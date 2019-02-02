import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import List from 'jsx-list';

const renderSubtreeIntoContainer = ReactDOM.unstable_renderSubtreeIntoContainer;
export default class ListPortal extends Component{
	//props有更新时调用事件,更新portal组件，相当于render。
  componentWillReceiveProps(newProps) {
    this.renderPortal(newProps);
  }
	//初始化时插入父级和渲染一次portal组件
  componentDidMount() {
    this.node = document.createElement("div");
    document.body.appendChild(this.node);
    this.renderPortal(this.props);
  }
	//模拟render方法，调用portal组件时传入父级容器
  renderPortal(props) {
    // console.log(props)
    renderSubtreeIntoContainer(
      this,
      <List {...props}/>,
      this.node
    );
  }
	//组件销毁时触发,移除绑定
  componentWillUnmount() {
		ReactDOM.unmountComponentAtNode(this.node);
		this.node.parentNode.removeChild(this.node);
  }
    render(){
        return null;
    }
}