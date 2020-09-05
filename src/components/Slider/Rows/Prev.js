import React, {useState} from 'react'


export default function Prev() {
    const [isCurrentP, setCurrent] = 
    useState(0);
    
    return(
        <div>
            <button onClick={() =>
                setCurrent(isCurrentP= isCurrentP - 1)}>
            {'<'}
            </button> 
        </div>
    )
}
