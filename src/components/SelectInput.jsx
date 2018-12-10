import React,{Component} from 'react';
export default class SelectInput extends Component{
    static displayName='SelectInput';
    render(){
        const {selectItem,isActive,onClick,placeholder} = this.props;
        const {text} = selectItem||'';
        return (
            <div className="x-select-input" onClick={onClick}>
                <input type="text" placeholder ={placeholder} disabled value={text}/>
            </div>
        )
    }
}