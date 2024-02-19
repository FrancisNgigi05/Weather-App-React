import React from "react";
import { useState } from "react";
import './LoginPage.css';
import {useNavigate} from "react-router-dom"
import { database } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { data } from "autoprefixer";
import Button from 'react-bootstrap/Button';

function LoginPage() {
    const [login, setLogin] = useState(false);

    const history = useNavigate();

    // Function that will handle the submission of the form
    function handleSubmit(e, type) {
        // Prevent loading after submission of the form 
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


        // If user has no account
        if (type === "signUp") {
            createUserWithEmailAndPassword(database, email, password).then((data) => {
                console.log(data, "authdata");
                //After SigningUp in navigate to home screen
                history("/")
            }).catch((error) => {
                alert(error.code);
                setLogin(true);
            })
        }

        // If user has an account
        else {
            signInWithEmailAndPassword(database, email, password).then((data) => {
                console.log(data, "authdata");
                //After signingIn in navigate to home screen
                history("/")
            }).catch((error) => {
                alert(error.code);
            })
        }
    }

    return (
    <div className="login">
        <div className="sign">
            <div className="signUp" onClick={() => setLogin(false)}>SignUp</div>
            <div className="signIn" onClick={() => setLogin(true)}>SignIn</div>
        </div>

        <h1>{login ? "SignIn" : "SignUp"}</h1>
        <form onSubmit={(e) => handleSubmit(e, login ? 'signIn' : 'signUp')}>
            <input name="email" type="text" placeholder="user@mail.com" required/>
            <input name="password" type="password" placeholder="password" required/>
            <button className="login-btn">{login ? 'SignIn' : 'SignUp'}</button>
      </form>
    </div>
  )
}

export default LoginPage
