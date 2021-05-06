import React from 'react';
import { useDispatch } from 'react-redux'
import { joinGame } from '../../redux/user/user.actions'
// import { trimColor, trimColorAlt, joinColor, joinColorAlt } from '../../colorPalette'
import { trimColor, joinColor } from '../../colorPalette'
const JoinButton = ({cx, cy, r}) => {

    const dispatch = useDispatch();

    return ( 
        <g onClick={() => dispatch(joinGame())}>
            <circle cx={cx} cy={cy} r={r*1.2} fill={trimColor} stroke={trimColor} strokeWidth="1" />
            {/* <circle cx={cx} cy={cy} r={r/2} fill="#e835bb" stroke="#ccc" strokeWidth="0" /> */}
            <circle cx={cx} cy={cy} r={r/1.1} fill={ joinColor} stroke={trimColor} strokeWidth="0" />

            <text  x={cx} y={cy+5} textAnchor="middle" fill="#FFF" fontSize="30">join</text>
        </g>
       
     );
}
 
export default JoinButton;