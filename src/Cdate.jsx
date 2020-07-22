import React from 'react';

const Cdate = () => {
    let date = new Date().toLocaleDateString();

    return(
        <h1 className="date">{date}</h1>
    );
};

export default Cdate;