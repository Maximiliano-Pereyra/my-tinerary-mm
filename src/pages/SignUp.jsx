import React, {useEffect, useRef} from "react";
import Input from "../components/Input";

function SignUp(){
    const fullName = useRef(null);
    const country = useRef(null);
    const mail = useRef(null);
    const pass = useRef(null);
    const subt = useRef(null);
    
    useEffect(()=>{
        fullName.current.focus();       
    }, []);

    function fullKeyDown(e){
        if (e.key === "Enter"){
      country.current.focus();
    }}
    function counKeyDown(e){
        if (e.key === "Enter"){
       mail.current.focus();
    }}
    function mailKeyDown(e){
        if (e.key === "Enter"){
        pass.current.focus();
    }}
    function passKeyDown(e){
        if (e.key === "Enter"){
        subt.current.focus();
    }}
    return (
        <div>
            <Input type="text" onKeyDown={fullKeyDown} ref={fullName} placeholder="Full Name"/>
            <Input type="text" onKeyDown={counKeyDown} ref={country} placeholder="Country"/>
            <Input type="text" onKeyDown={mailKeyDown} ref={mail} placeholder="Email" />
            <Input type="text" onKeyDown={passKeyDown} ref={pass} placeholder="Password" />
            <button ref={subt}>Submit</button>
            <button>Google</button>
        </div>
    )
}
export default SignUp;