import React from 'react';
import { useState } from 'react';
export default function ProfileBox ({
    info,
    onDelete,
    onUpdate
}) {
    return (
        <div className='ProfileBox'>
            <h2> title {info.title} </h2>
            <h2> date {info.date} </h2>
            <button onClick = {()=> {onUpdate}}> Update </button>
            <button onClick = {()=> {onDelete}}> Delete </button>
        </div>
    )
}