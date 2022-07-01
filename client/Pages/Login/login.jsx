import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import {Outlet, Link} from 'react-router-dom';
import styles from './login.css';

export default function LogIn() {
  const [user_name, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    //object with username and password to be sent back
    const obj = { user_name, password };
    //post request
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    })
     .then(res => res.json())
     .then(res => {
       console.log('RESPONSE: ', res);
       //if user exists in database, redirect to /
       if(res === true) window.location = 'http://localhost:8080';
       else alert("Please enter a valid email");
     })
     // .then(useNavigate("/success"))
     .catch(console.log("Error in fetch POST to /login"))

     setUsername(""); 
     setPassword(""); 
 }

  return (
    <main id='signup'>
      <div id='signupNavBar'>
        <div id='navBarText'>
          <div id='siteName'>
            <button id='siteName'> Stabby Rabbit </button>
          </div>
          <div id='switchLogin'>
            <label>Need an account? </label>
            <button id= 'signUpButton'> <Link id= 'signUpButton' to='/signup'> Sign Up </Link> </button> 
          </div>
        </div>
      </div>
      <div id='signUpContainer'>
        <h1>Log In</h1>
        <label id="username"> Username: </label>
          <input id="username" onChange={ e => setUsername(e.target.value)} /> 
          {/* onchange sets user input as value on userName */}
        <div>
        <label id="password">Password: </label>
          <input id="password" onChange={e => setPassword(e.target.value)} /> 
        </div>
        <br/ >
        <button id='loginButton' onClick={() => loginHandler()}> Log In </button>
        </div>
     
      <Outlet id="eventContainer" />
    </main>
  );
}
