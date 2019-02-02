import React,{Component} from 'react';
import ReactDOM from 'react-dom';

export default class SelectInput extends Component{
    static displayName='SelectInput';
    constructor(props){
        super(props);
        this.state={isExtends:false};
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
    formatSelected(){
        const {selectedItem,placeholder,name,multiple} = this.props;
        if(selectedItem.length ==0){
            return <div><div className="x-selected-item">{placeholder}</div><input type="hidden" ref={ref=>this.input=ref} name={name} defaultValue=''/></div>
        }else{
            let selectedvalue = [];
            let arr = selectedItem.map(item=>{
                selectedvalue.push(item.value);
                return <div title={item.text} className="x-selected-item" key={item.value}>{item.text}</div>
            })
            if(!multiple){
                selectedvalue = selectedvalue.join('');
            }else{
                selectedvalue = JSON.stringify(selectedvalue);
            }
            return <div>{arr}<input type="hidden" ref={ref=>this.input=ref} name={name} defaultValue={selectedvalue}/></div>;
        }
    }
    render(){
        const {isActive,onClick,width} = this.props;
        // const {text,value} = selectedItem||{};
        return (
            <div className="x-select-handle" style={{width}} onClick={this.onClick}>
                {this.formatSelected()}
                <i className={!this.state.isExtends ? "xui icon-arrowdown x-arrow":"xui icon-arrowup x-arrow"}/>
            </div>
        )
    }
}