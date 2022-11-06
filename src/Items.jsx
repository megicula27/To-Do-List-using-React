import React from 'react';


const ListItem = (prop) => {


    return(
        <>
        <div className='sec'>
        <button onClick={() => {prop.onSelect(prop.id)}}>x</button>
            
            <li>{prop.text}</li>

        </div>
        <hr className='rule'/>
        </>
    )
} 

export default ListItem;