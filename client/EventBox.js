import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom"
import { useState } from 'react';



//class App extends Component {
  export default function EventBox ({
    participants,
    info,
    //onComment,
    onSignUp,
    //onViewParticipants,
  })
  {
    const [nameX, setName] = useState('');
    
    function changeDate (){
      
        let date2 = moment('2019-11-03T05:00:00.000Z').utc().format('MM/DD/YYYY')
      }
      
      console.log(info.participants)
      
      
      function handleSubmit() {
        const obj = {name:nameX,
                    id: info.id}
                    console.log(obj)
        
        fetch('http://localhost:3000/home/signUp', {
              method: 'PATCH',
              headers: {
                            'Content-Type': 'application/json',
                              // x-www-form-urlencoded
                          },
                        body: JSON.stringify(obj),
                          })
                        //   .then(response => response.json())
                          .catch(console.log("Error in fetch PATCH to /signUp"))
            
            
          }
            // var parseDate = function(value) {
            function changeDate (){
 let formattedDate= new Date(info.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ; //10/10/2013
return formattedDate;
            }
  //     var m = value.match(/^(\d{1,2})(\/|-)?(\d{1,2})(\/|-)?(\d{4})$/);
  //     if (m)
  //         value = m[5] + '-' + ("00" + m[3]).slice(-2) + '-' + ("00" + m[1]).slice(-2);
  
  //     return value;
  // }
// console.log(value)


        return (

            <div className='eventBox'>
              <img src='https://freepngclipart.com/download/paint/69869-rose-hand-painted-north-drawing-compass-free-hq-image.png'/>
              <h2><strong>Title:</strong> {info.title}</h2>
              <h2><strong>Date:</strong> {changeDate()}</h2>
              <h2><strong>End: </strong>{info.end_time}</h2>
              <h2><strong>Activity: </strong>{info.activity}</h2>
              <h2><strong>Location:</strong> {info.location}</h2>
              <h2><strong>Max Number of Participants:</strong> {info.max_participants}</h2>
              {/* <h2><strong>Sign up list:</strong> {info.participants}</h2> */}
            
              {/* <input id='signUpInput' placeholder='Enter your name!' onChange = {e => {
                setName(e.target.value)
                }}/> */}
                 <button id = 'signupEventButton' onClick={() => {
                  handleSubmit()
               
                  alert("Successfully submitted")
              }}>Sign up for event</button>
              
            </div>
        )
    }

    // CREATE TABLE events (
    //     id SERIAL PRIMARY KEY,
    //     title varchar,
    //     date DATE,
    //     start_time TIME,
    //     end_time TIME,
    //     activity_type varchar,
    //     num_participants int DEFAULT 1,
    //     zip int,
    //     participant_id int,
    //     comment_id int
    // )
    