import React, { useState } from "react";
// import password from "./password";
import {Alert} from 'react-bootstrap'
import './registration.css';
import Login from './login';


// const login = () => {
function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    // const [phone, setPhone] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    
 function handleSubmit(e) {
        e.preventDefault();

        if(!name || !email || !password ){
            setFlag(true);
        }
        else{
            setFlag(false);
            localStorage.setItem('Email',JSON.stringify(email));
            localStorage.setItem('Password',JSON.stringify(password));

            console.log('saved in localstorage')
            setLogin(!login);
        }
    }
function handleClick() {
    setLogin(!login);
}
    return(
        <div className="maindiv">
             <div className="img">
            <img src="data:image/png;base64,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" width="200px"/></div>
        <div className="page_Form">
           
{login ? (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="formGroupExampleInput">Name</label>
                    <input type="text" class="form-control"  placeholder="Enter Full Name" onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control"  placeholder="Enter Email" onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" class="form-control"  placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)}/>
                </div>
              
                <button type="submit" className="btn btn-dark btn-lg bth-block">Sign-up</button>

           
           {flag && (
               <Alert className="" color="primary" variant="danger">
                   Please Enter Every Field
               </Alert>
           )}
            </form>
):(
                <Login/>
                )}
                </div>
                </div>
    )
}
 export default Registration;