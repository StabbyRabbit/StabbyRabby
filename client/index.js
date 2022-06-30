import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styles from './style.css';

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Profile from "./Pages/Profile/Profile.jsx";
import CreateEvent from "./Pages/createEvent/createEvent.jsx";
import Signup from "./Pages/signup/signup.jsx";
import MainContainer from './MainContainer';
import LogIn from './Pages/login/login.jsx'; 



ReactDOM.render(
 <BrowserRouter>
    <Routes>
        <Route path="/signup" element = {<Signup />}/>
        <Route path="/login" element= {<LogIn />}/>
            <Route path = "/" element = {<App />}>
                <Route path = "/home" element = {<MainContainer/>}/>
                <Route path = "createEvent" element = {<CreateEvent/>}/>
                <Route path = "Profile" element = {<Profile/>}/>
                {/* <Route path = "Signup" element = {<Signup/>}/> */}
                <Route path="*" element={
                    <main style={{ padding: "1rem" }}>
                     <p>There's nothing here!</p>
                    </main>
                 } /* no match case */
             />
             </Route>
    </Routes>
</BrowserRouter>,

document.getElementById('root')
);

//nest routes to persist - add Outlet in app.js