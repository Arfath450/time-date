import React, { useState } from 'react';

const Time = () => {
    let time = new Date().toLocaleTimeString()

    const[Ctime, setCtime] = useState(time);
    
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString()
        setCtime(time);
    };

    setInterval(UpdateTime,1000);
    return(
       
        <h1 className="time">{Ctime}</h1>
       
    )
}

export default Time;