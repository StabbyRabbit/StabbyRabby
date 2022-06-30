import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import {Outlet, Link} from 'react-router-dom';
import styles from './signup.css';

export default function signUp() {
  const [user_name, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 

  const signUpHandler = () => {
    const obj = { user_name, password }; 
    fetch('http://localhost:3000/signup', {
      method: 'POST', 
      headers: {
        'Content-type': 'application/json',
      }, 
      body: JSON.stringify(obj)    
    })
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(console.log("Error in fetch POST to /signup"))

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
        <label>Have an account? </label>
        <button id='logInButton'> <Link id= 'logInButton' to='/login'> Log In </Link> </button> 
      </div>
      </div>
    </div>
    <div id='signUpContainer'>
      <h1>Sign up</h1>
          <label id = "username">Username: </label>
          <input id = "username" onChange={e => setUsername(e.target.value)} />
        
        <div>
          <label id="password" >Password: </label>
          <input id = "password" onChange={e => setPassword(e.target.value)} />
        </div>
        <br/ >
        <button id='createAccountButton' onClick = {() => signUpHandler()}> Create Account </button>
        </div>
     
      <Outlet id="eventContainer" />
    </main>
  );
}
