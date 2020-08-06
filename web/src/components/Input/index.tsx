import React, { InputHTMLAttributes } from 'react';

import './style.css';


interface inputprops extends InputHTMLAttributes<HTMLInputElement>{
    label : string;    
    name: string;
}

const Input : React.FC<inputprops> = ({ name, label, ...rest } )=> {
    return (
        <div className="input-block">
            <label htmlFor={name}> {label}</label>
            <input type="text" id={name} {...rest}/>
        </div>
   );

}


export default Input;