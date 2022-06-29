import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import {Outlet, Link} from 'react-router-dom';
import styles from './signup.css';

export default function signUp() {
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
          <label>Username: </label>
          <input></input>
        
        <div>
        <label>Password: </label>
          <input></input>
        </div>
        <br/ >
        <button id='createAccountButton'> Create Account </button>
        </div>
     
      <Outlet id="eventContainer" />
    </main>
  );
}
