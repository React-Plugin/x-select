# x-list
react list列表组件
# npm 
    npm install --save jsx-list
# demo
```
      <List>
        {
          [{text:'demo1'},{text:'demo2'},{text:'demo3'},{text:'demo4'},{text:'demo5'},{text:'demo6'}].map( (item,index)=><Option key={index} onSelect={this.onSelectHandle.bind(this,item,index)}>{item.text}</Option>)
        }
      </List>
```
```
        <List>
          <Option>aaa</Option>
          <Option>bbb</Option>
          <Option>ccc</Option>
        </List>
```

### 关于作者
[https://github.com/tianxiangbing](https://github.com/tianxiangbing)

### 组件github地址
[https://github.com/react-xui/x-paging](https://github.com/react-xui/x-paging)


### xui
react xui组件一直在持续更新中，欢迎大家关注[https://github.com/react-xui](https://github.com/react-xui)