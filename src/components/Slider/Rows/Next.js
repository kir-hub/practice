import React, {useState} from 'react'


export default function Next() {
    const [isCurrentN, setCurrent] = 
    useState(0);
    
    return(
        <div>
            <button onClick={() =>
                setCurrent(isCurrentN = isCurrentN + 1)}><p>{isCurrentN}</p>
            {'>'}
            </button> 
        </div>
    )
}
