import React from 'react';
import { Link } from "react-router-dom";



export default function profile() {
    return(
    <div id='profile'>
    <h1>My Profile</h1>
      <div id = "eventContainer">
          <button id = 'deleteEvent'> Delete Event </button> 
      </div>
    </div>
    )
};
