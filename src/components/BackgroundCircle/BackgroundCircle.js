import React from 'react';

const BackgroundCircle = ({cx, cy, r}) => {
    return ( 
        <circle cx={cx} cy={cy} r={r} fill="#333" stroke="#4a0a16" strokeWidth="3"/>
     );
}
 
export default BackgroundCircle