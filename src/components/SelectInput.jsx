import React,{Component} from 'react';
export default class SelectInput extends Component{
    static displayName='SelectInput';
    render(){
        const {selectItem,isActive,onClick,placeholder,name} = this.props;
        const {text,value} = selectItem||{};
        return (
            <div className="x-select-handle" onClick={onClick}>
                <div>{typeof text==='undefined'?placeholder:text}</div>
                <input type="hidden" name={name} defaultValue={value}/>
            </div>
        )
    }
}