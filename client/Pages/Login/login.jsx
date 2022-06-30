import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import {Outlet, Link} from 'react-router-dom';
import styles from './login.css';

export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = e => {
    //object with username and password to be sent back
    const obj = { username, password };
    //post request
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
     .then(response => response.json())
     .then(res => console.log(res))
     // .then(useNavigate("/success"))
     .catch(console.log("Error in fetch POST to /login"))
 }

    setUsername(""); 
    setPassword(""); 

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
          <input id="username" onChange={ e => setUsername(e.target.value)}></input> 
          {/* onchange sets user input as value on userName */}
        <div>
        <label id="password">Password: </label>
          <input id="password" onChange={e => setPassword(e.target.value)}> </input>
        </div>
        <br/ >
        <button id='loginButton' onClick={() => loginHandler}> Log In </button>
        </div>
     
      <Outlet id="eventContainer" />
    </main>
  );
}
