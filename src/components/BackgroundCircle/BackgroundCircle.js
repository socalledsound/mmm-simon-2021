import React from 'react';
import { backgroundCircleColor, trimColor } from '../../colorPalette'
const BackgroundCircle = ({cx, cy, r}) => {
    return ( 
        // <circle cx={cx} cy={cy} r={r} fill="#333" stroke="#4a0a16" strokeWidth="3"/>
        <circle cx={cx} cy={cy} r={r} fill={backgroundCircleColor} stroke={ trimColor } strokeWidth="1"/>
     );
}
 
export default BackgroundCircle