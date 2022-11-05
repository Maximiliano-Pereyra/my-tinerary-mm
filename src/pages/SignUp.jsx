import { ErrorResponse } from "@remix-run/router";
import React, {useEffect, useState} from "react";
import dataHotels from "../dataHotels";
import Validation from "./Validation";

const SignUp = ({submitForm}) => {
    const [values, setValues] = useState({
        fullname:'',
        country:'',
        email:'',
        password:''
    });
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const handleChange = (event) =>{
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    } 
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        setDataIsCorrect(true);
    };
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && dataIsCorrect) {
            SignUp(true);
        }

    }, [errors]);
    return(
        <div>
            <h2>Create Account</h2>
        <form>
            <div>
                <label>Full Name</label>
                <input type="text" name="fullname" value={values.fullname} onChange={handleChange}/>
                {errors.fullname && <p>{errors.fullname}</p>}
            </div>
            <div>
                <label>Country</label>
                <input type="text" name="country" value={values.country} onChange={handleChange}/>
                {errors.country && <p>{errors.country}</p>}
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={values.email} onChange={handleChange}/>
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={values.password} onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div>
            <button type="submit" onClick={handleFormSubmit}>Sign Up</button>
            <button type="submit" onClick={handleFormSubmit}>Google</button>
            </div>
        </form>
        </div>
    )
}

export default SignUp;