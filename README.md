# x-select
react select下拉框组件
# npm 
    npm install --save jsx-select
# demo
```
import Select from 'jsx-select';
const {Option} = Select;

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
        </div>
      </div>
```

### 关于作者
[https://github.com/tianxiangbing](https://github.com/tianxiangbing)

### 组件github地址
[https://github.com/react-xui/x-select](https://github.com/react-xui/x-select)


### xui
react xui组件一直在持续更新中，欢迎大家关注[https://github.com/react-xui](https://github.com/react-xui)