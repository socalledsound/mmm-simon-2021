import React from 'react';
import { useDispatch } from 'react-redux'
import { joinGame } from '../../redux/user/user.actions'

const JoinButton = ({cx, cy, r}) => {

    const dispatch = useDispatch();

    return ( 
        <g onClick={() => dispatch(joinGame())}>
            <circle cx={cx} cy={cy} r={r} fill="999" stroke="#ccc" strokeWidth="5" />
            <circle cx={cx} cy={cy} r={r/2} fill="#e835bb" stroke="#ccc" strokeWidth="0" />
            <text  x="50%" y="51%" textAnchor="middle" fill="#FFF" fontSize="40">join</text>
        </g>
       
     );
}
 
export default JoinButton;