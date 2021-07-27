import React from 'react';

function Input({label, id, value, setValue, ...props}) {
    return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input
        id={id}
        type="text"
        value={value}
        onChange={({target}) => setValue(target.value)}
        {...props}
        />
    </div>
    )
}

export default Input;