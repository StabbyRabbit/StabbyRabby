import React, { Component } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import  ProfileBox from './ProfileBox.jsx'

export default function Profile() {
//     const [titleX, setTitle] = useState(‘’);
//     const [dateX, setDate] = useState(‘’);
//     const [timeStart, setTimeStart] = useState(‘’)
const [data, setData] = useState([]);
//data needed:
    //user created events
    //title and date specifically
        //fetch
    //get information
    //fetch information//
    useEffect(() => {
        const url = ‘http://localhost:3000/pages/profile/profile’
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                    setData(json)                       //callback function
            } catch (err) {
                console.log('error', error);
            }
            fetchData();
        }
    }, [setData]); //
    //organize data recieved//
useEffect(() => {
    const sortArray = type => {
        const types = {  //obj
            title: 'title',
            date: 'date'
        };
        const sortProperty = types[type];
        const sorted = [...data].sort((a,b) => a[sortProperty].localeCompare(b[sortProperty]));
        console.log(sorted)
        setData(sorted);
    }
    sortArray(sortType)
}, [sortType]);
//delete functionality
    //fetch request
    //affect same state as data rending on page
    //
// async function DeleteEvent () {
//  try {
//   fetch(‘http://localhost:3000/deleteEvent’,  {
//     method: ‘DELETE’,
//     headers: {
//       ‘Content-Type’: ‘application/json’
//     }
// })
//     } catch (err) {
//         console.log(err);
//     }
// }
  return(
    <div id = "eventContainer">
        <h1>My Events</h1>
        <div><ProfileBox /></div>
    </div>
    )
};
