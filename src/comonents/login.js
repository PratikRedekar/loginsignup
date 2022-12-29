import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Home from './Home';
import './login.css';

function Login() {

const[emaillog, setEmaillog] = useState("");
const[passwordlog, setPasswordlog] = useState("");
const[flag, setFlag] = useState(false);
const[home, setHome] = useState(true);

function handleLogin(e) {
    e.preventDefault();
    let mail = localStorage.getItem("Email").replace(/"/g,"");
    let pass = localStorage.getItem("Password").replace(/"/g,"");

    if(!emaillog || !passwordlog){
        setFlag(true);
        console.log("Empty");
    }else if (passwordlog !== pass || emaillog !== mail){
        setFlag(true)
    }else {
        setHome(!home);
        setFlag(false);
    }
}
    return (
    <div>
        {home ? (
        <form onSubmit={handleLogin}>
            <h1>Login</h1>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control"  placeholder="Enter Email" onChange={(event) => setEmaillog(event.target.value)}/>
                </div><br/>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" class="form-control"  placeholder="Enter Password" onChange={(event) => setPasswordlog(event.target.value)}/>
                </div>
                <button type="submit" className="btn btn-dark btn-lg bth-block">Login</button>
                {flag && (
               <Alert color="primary" variant="danger">
                   Please Enter Correct Info
               </Alert>
           )}
        </form>
        ):(
            <Home/>
        )}
    </div>
  )
}

export default Login;
