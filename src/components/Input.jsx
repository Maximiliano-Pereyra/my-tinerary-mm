import React from "react";

function Input ({type, placeholder, id, className, name}, ref) {
    return <input ref={ref} type={type} id={id} className={className} name={name} placeholder={placeholder}/>
}
const forwardRefInput = React.forwardRef(Input)
export default forwardRefInput;