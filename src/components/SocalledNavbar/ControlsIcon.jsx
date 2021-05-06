// import React, { useState } from 'react'
import React from 'react';
import { createLinePath } from '../../utils';
const circles = Array.from({ length : 3}, (e, i) => ({
    cx : 25 * (i+ 1),
    cy : 50,
    r: 5
}))


const lines = Array.from({length: 3}, (e, i) => {
    const y1 = 20, y2 = 80;
    const x = 25 * (i+ 1);
    return [[x, y1], [x, y2]]
})


const ControlsIcon = () => {
    // const [hover, setHover] = useState(false);
    return ( 
        <svg 
            style={{width: '100%', height: '100%'}}
            viewBox="0 0 100 100"
            // onMouseEnter={() => setHover(!hover)}
            // onMouseLeave={() => setHover(!hover)}
            >

            <rect x="10" y="10" width="80" height="80" fill="#333" />
           {
               lines.map( (points, i) => 
                    <path 
                        key={`control-icon-line-${i}`}
                        d={createLinePath(lines[i])}
                        // stroke={hover ? 'black' : "#ececec"}
                        // stroke="#5e2878"
                        stroke="#ff73f8"
                        strokeWidth="3"
                    />
                )
            }
            {
                circles.map( (circle, i) => 
                    <circle 
                        key={`control-icon-circle-${i}`}
                        cx={circle.cx}
                        cy={circle.cy}
                        r={circle.r * 1.5}
                        // fill="transparent"
                        // stroke="#ececec"
                        // stroke="#4444ff"
                        //stroke="#282578"
                        fill="#1eadeb"
                        strokeWidth="2"
                    />
                    )
           }
           {
                               circles.map( (circle, i) => 
                               <circle 
                                   key={`control-icon-circle-${i}`}
                                   cx={circle.cx}
                                   cy={circle.cy}
                                   r={circle.r * 0.5}
                                   // fill="transparent"
                                   // stroke="#ececec"
                                   // stroke="#4444ff"
                                   //stroke="#282578"
                                   fill="#1d2169"
                                   strokeWidth="2"
                               />
                               )
           }
            
        </svg>
     );
}
 
export default ControlsIcon;