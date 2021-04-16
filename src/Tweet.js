import React from 'react';
import './App.css'

function Tweet({name,tweet,likes}){

    return(
        <div className='tweet'>
            <h3>{name}</h3>
            <p>{tweet}</p>
            <h3>{likes}</h3>
        </div>
    )
}

export default Tweet