import React, { useState } from "react";
import style from './formMes.module.css'

export const FormMes = ({ addMessage }) => {
    const [value, setValue] = useState('')

    const handlSubmit = (e) => {
        e.preventDefault();
        addMessage(value);
        setValue('');
    }

    return (
        <form onSubmit={handlSubmit}>
            <input 
                type="text" value={value}
                onChange={(e) => setValue(e.target.value)} />
            <button>send</button>
        </form>
    );
}