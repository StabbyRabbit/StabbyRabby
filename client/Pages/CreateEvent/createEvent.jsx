import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";



export default function createEvent() {
  const [host, setHost] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [start_time, setStart_Time] = useState('');
  const [end_time, setEnd_Time] = useState('');
  const [activity, setActivity] = useState('');
  const [max_participants, setMax_participants] = useState('');
  const [location, setLocation] = useState('');

  //show participants
  //sign up button - input name - add participant list - add to array
  

function handleSubmit () {

  // const obj = {
  //   title: titleX,
  //   date: dateX,
  //   start_time: timeStart,
  //   end_time: timeEnd,
  //   activity_type: activityType,
  //   num_participants: numParticipants,
  //   participants:nameX,
  //   location: locationX
  // }

const obj = { host, title, date, start_time, end_time, activity, max_participants, location };

  fetch('http://localhost:3000/createEvent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
  .then(response => response.json())
  // .then(useNavigate("/success"))
  .catch(console.log("Error in fetch POST to /createEvent"))
  
  console.log(obj);

}

//UPDATE events SET date = '2022-06-26', start_time = '010:00', end_time = '012:00', activity_type = 'Basketball', num_participants = 10, zip = 96813 WHERE id = 1

    return(
    <main>
      <div id = "eventContainer">
         <h1>Create Event Page</h1>
         <label id = "eventFields">Host name: &nbsp;</label> 
         <input id = "eventFields" onChange = {e => setHost(e.target.value)} />
      <div>
        <label id="eventFields">Event title: &nbsp;</label> 
        <input id = "eventFields" onChange = {e => setTitle(e.target.value)} />
      </div>
      <div>
        <label id="eventFields">Location: &nbsp;</label> 
        <input id = "eventFields" onChange = {e => setLocation(e.target.value)} />
      </div>

      <div>
       <label id = "eventFields">Date: &nbsp;</label> 
       <input id = "eventFields" placeholder='YYYY-MM-DD' onChange = {e => setDate(e.target.value)} />
      </div>
      <div>
       <label id = "eventFields">Time Start: &nbsp;</label> 
       <input id = "eventFields" placeholder='E.g. 13:00' onChange = {e => setStart_Time(e.target.value)} />

       <label id = "eventFields">Time End: &nbsp;</label> 
       <input id = "eventFields" placeholder='E.g. 15:00' onChange = {e => setEnd_Time(e.target.value)} />
      </div>
      <div>
       <label id = "eventFields">Activity Type: &nbsp;</label> 
       <input id = "eventFields" onChange = {e => setActivity(e.target.value)} />
      </div>
      <div>
       <label id = "eventFields">Max number participants: &nbsp;</label> 
       <input id = "eventFields" onChange = {e => setMax_participants(e.target.value)} />
      </div>
      <div>
       <button id = "submitButton" onClick = {() => { alert("Successfully submitted")
       handleSubmit()}}>Submit Event!</button>
      </div>
      </div>
    </main>
    )
};
