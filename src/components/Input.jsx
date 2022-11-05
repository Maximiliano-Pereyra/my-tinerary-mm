import React from "react";

function Input ({type, onKeyDown, placeholder, id, className, name}, ref) {
    return <input ref={ref} type={type} id={id} className={className} name={name} onKeyDown={onKeyDown} placeholder={placeholder}/>
}
const forwardRefInput = React.forwardRef(Input)
export default forwardRefInput;