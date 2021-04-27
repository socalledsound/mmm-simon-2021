import React, { useState } from 'react'
import './Logo.css'

const lines = Array.from({length: 5}, (e, i) => {
    const x1 = 0, x2 = 120;
    const y = 15 * i;
    return [[x1, y], [x2, y]]
})

const createLinePath = (arr) => {
    const path = `M${arr.map((item, i) => [item[0], item[1]]).join('L')}`;
    return path
}
    




const Logo = ({purple = false}) => {
    
    const [ hover, setHover ] = useState(false)
    
    return ( 
        <svg 
            viewBox="0 0 100 100"
            className="logo"
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}
            >
            
            {lines.map((line,i) => 
                <path 
                    key={i}
                    d={createLinePath(lines[i])}
                    stroke={purple ? '#5a1787' : hover ? '#5a1787' : "#acacac"}
                    strokeWidth="3"                    
                />    
            )}
            <rect x="45" y="30" width="30" height="10" fill={purple ? '#5a1787' : hover ? '#5a1787' : "#acacac"}/>
        </svg>
     );
}
 
export default Logo;
