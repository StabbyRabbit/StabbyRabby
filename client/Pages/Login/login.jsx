import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import {Outlet, Link} from 'react-router-dom';
import styles from './login.css';

export default function signUp() {
  return (
    <main id='signup'>
      <div id='signupNavBar'>
        <div id='navBarText'>
        <div id='siteName'>
          {/* <button id='siteName'> Stabby Rabbit </button> */}
          {/* <img src='https://freepngclipart.com/download/paint/69869-rose-hand-painted-north-drawing-compass-free-hq-image.png'/> */}

        </div>
      <div id='switchLogin'>
        <label>Need an account? </label>
        <button id='logInButton'> <Link id= 'logInButton' to='/signup'> Sign Up </Link> </button> 
      </div>
      </div>
      </div>
<div id='signUpContainer'>
<h1>Log In</h1>
          <label>Username: </label>
          <input></input>
        
        <div>
        <label>Password: </label>
          <input></input>
        </div>
        <br/ >
        <button id='createAccountButton'> Log In </button>
        </div>
     
      <Outlet id="eventContainer" />
    </main>
  );
}
