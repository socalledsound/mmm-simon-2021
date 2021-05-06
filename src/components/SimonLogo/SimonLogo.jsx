import React, { useState } from 'react'
import './Logo.css'


const Logo = ({purple = false}) => {
    
    const [ hover, setHover ] = useState(false)
    
    return ( 
        <svg 
            viewBox="0 0 100 100"
            className="logo"
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}
            >
            
            <circle cx="50" cy="50" r="30" fill={hover ? 'rgba(220, 80, 220, 0.8)' : 'purple'} />
        </svg>
     );
}
 
export default Logo;
