import React from "react";
import { useState } from "react";
import './LoginPage.css';
import {useNavigate} from "react-router-dom"


function LoginPage() {
    const [loginPassword, setLogInPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const history = useNavigate();

    function handleEmailChange(e) {
        setLoginEmail(e.target.value)
    }

    function handlePasswordChange(e) {
        setLogInPassword(e.target.value)
    }

    function login() {
        setIsLoggedIn((isLoggedIn) => !isLoggedIn)
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        if(!loginEmail || !loginPassword) {
            return;
        }
        else {
            login();
            history("/")
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form>
                <label htmlFor="userEmail"> User Email: </label>
                <input type="text" id="userEmail" name="userEmail" value={loginEmail} onChange={handleEmailChange} placeholder="user@gmail.com"/>
                <label htmlFor="userPassword"> Email password: </label>
                <input type="password" id="userPassword" name="userPassword" value={loginPassword} onChange={handlePasswordChange} placeholder="password"/>
                <button className="login-btn" onClick={handleSubmit} > {isLoggedIn ? "Logout" : "Login"} </button>
            </form>
        </div>
    )
}

export default LoginPage;
