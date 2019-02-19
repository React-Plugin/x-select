import React,{Component} from 'react';
import ReactDOM from 'react-dom';

export default class SelectInput extends Component{
    static displayName='SelectInput';
    constructor(props){
        super(props);
        this.state={isExtends:false,overItem:{isover:false}};
        this.onClick = this.onClick.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    onClick(e){
        this.setState({isExtends:!this.state.isExtends});
        this.props.onClick(e);
    }
    componentWillReceiveProps(newProps,newState) {
        if(newProps && newProps.isActive !== this.state.isActive ){
            if(newProps.isActive && this.state.isExtends != newProps.isActive){
                this.addEvent();
            }else if(!newProps.isActive && this.state.isExtends != newProps.isActive){
                this.removeEvent();
            }
            this.setState({isExtends:newProps.isActive});
            
        }
    }
    addEvent(){
        window.addEventListener('blur', this.onBlur);
        document.addEventListener('click', this.onBlur);
    }
    onBlur(){
        this.props.onHide();
    }
    componentWillUnmount(){
        this.removeEvent();
    }
    removeEvent(){
        window.removeEventListener('blur',this.onBlur);
        document.removeEventListener('click', this.onBlur);
    }
    //取消选择项
    unSelect(v,e){
        e.stopPropagation();
        this.props.unSelect(v,e);
    }
    formatSelected(){
        const {selectedItem,placeholder,name,multiple} = this.props;
        let titleArr =[];
        if(selectedItem.length ==0){
            return <div><div>{placeholder}</div><input type="hidden" ref={ref=>this.input=ref} name={name} defaultValue=''/></div>
        }else{
            let selectedvalue = [];
            let arr = selectedItem.map(item=>{
                selectedvalue.push(item.value);
                titleArr.push(item.text)
                return <div className='x-selected-item' key={item.value}>{item.text}{multiple?<i className='xui icon-close' onClick={this.unSelect.bind(this,item.value)}/>:undefined}</div>
            })
            if(!multiple){
                selectedvalue = selectedvalue.join('');
            }else{
                selectedvalue = JSON.stringify(selectedvalue);
            }
            if(this.state.overItem.isover){
                arr = <div>{`select ${this.props.selectedItem.length} items`}</div>;
            }
            return <div ref={ref=>this.list=ref} title={titleArr.join(',')}>{arr}<input type="hidden" ref={ref=>this.input=ref} name={name} defaultValue={selectedvalue}/></div>;
        }
    }
    computItem(){
        if(this.list && this.props.selectedItem.length>1 ){
            let c = this.list.querySelectorAll('.x-selected-item');
            if(c.length){
                let lw = this.list.offsetWidth;
                let cw =0 ;
                Array.prototype.slice.call(c).forEach( item=>{
                    cw += item.offsetWidth+4;
                });
                if(cw > lw && !this.state.overItem.isover){
                    //超出下拉宽显示选中个数
                    this.setState({"overItem":{isover:true}});
                }else if(this.state.overItem.isover){
                    this.setState({"overItem":{isover:false}});
                }
            }
        }else if(this.state.overItem.isover){
            this.setState({"overItem":{isover:false}});
        }
    }
    componentDidMount(){
        this.computItem();
    }
    componentDidUpdate(){
        this.computItem();
    }
    render(){
        const {isActive,onClick,width,multiple} = this.props;
        // const {text,value} = selectedItem||{};
        return (
            <div className={"x-select-handle "+ (multiple? "multiple":"")} style={{width}} onClick={this.onClick}>
                {this.formatSelected()}
                <i className={!this.state.isExtends ? "xui icon-arrowdown x-arrow":"xui icon-arrowup x-arrow"}/>
            </div>
        )
    }
}