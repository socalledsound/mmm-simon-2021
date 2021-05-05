import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleSlice, hoverSlice } from '../../redux/soundSlice/soundSlice.actions'
import { createCirclePath, arcPoints } from '../../utils';

const Arc = ({ id, x, y, numPoints, distance, length, thetaOffset, fill, stroke, strokeWidth}) => {

    const dispatch = useDispatch()

    return ( 
        <path 
            id={id}
            d={createCirclePath(arcPoints(numPoints, x, y, distance, length, thetaOffset ))}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
            onMouseDown={(id) => dispatch(toggleSlice(id))}
            onMouseUp={(id) => dispatch(toggleSlice(id))}
            onMouseEnter={(id) => dispatch(hoverSlice(id))}
            onMouseLeave={(id) => dispatch(hoverSlice(id))}
        
        />
     );
}
 
export default Arc;
