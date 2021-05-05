import React from 'react';
import { useDispatch } from 'react-redux'
import { joinGame } from '../../redux/user/user.actions'

const JoinButton = ({cx, cy, r}) => {

    const dispatch = useDispatch();

    return ( 
        <g onClick={() => dispatch(joinGame())}>
            <circle cx={cx} cy={cy} r={r} fill="999" stroke="#ccc" strokeWidth="20" />
            <text x={cx - cx/25} y ={cy} fill="white" fontSize={40}>join</text>
        </g>
       
     );
}
 
export default JoinButton;