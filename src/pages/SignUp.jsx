import React from "react";
import Input from "../components/Input";
import { Link as Linkeador} from "react-router-dom";
import { useRef } from "react";

function SignUp(){
    const fullNameInputElement = useRef();
    const countryInputElement = useRef();
    const emailInputElement = useRef();
    const passwordInputElement = useRef();
    
    let handleSubmit = (event) => {
        event.preventDefault();
        const data = {
          fullName: fullNameInputElement.current?.value,
          country: countryInputElement.current?.value,
          email: emailInputElement.current?.value,
          password: passwordInputElement.current?.value
        };
        console.log(data);
        localStorage.setItem('user-registered', JSON.stringify(data))
    
        alert('funciona')
        console.log(event);
      }
    return (
        <div className="container-signup">

            <h2>If you don't have an account yet, please register:</h2>
            <form className="form-sign">
            <div className="container-inputs">
            <Input type="text" ref={fullNameInputElement} id='fullName' name='fullName' className='fullName-input'  placeholder="Full Name"/>
            <Input type="text" ref={countryInputElement} id='country' name='country' className='country-input' placeholder="Country"/>
            <Input type="text" ref={emailInputElement} id='email' name='email' className='email-input' placeholder="Email" />
            <Input type="text" ref={passwordInputElement} id='password' name='password' className='pasword-input' placeholder="Password" />
            </div>
            <div className="submit-buttons">
            <button type="submit" onClick={handleSubmit} className='signu'>Sign Up</button>
            <button type="submit" className="google-acc">Google</button>
            </div>
            </form>            
            <h3>If you have an account, please:</h3>
            <Linkeador to='/signIn'>
              <button type="submit" value='SignIn-redirect' >Sign In</button>
            </Linkeador>
        </div>
    )
}
export default SignUp;