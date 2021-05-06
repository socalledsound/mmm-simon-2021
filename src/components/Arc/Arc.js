import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleSlice, hoverSlice } from '../../redux/soundSlice/soundSlice.actions'
import { createCirclePath, arcPoints } from '../../utils';

const Arc = ({ id, x, y, numPoints, distance, length, thetaOffset, fill, stroke, strokeWidth}) => {

    const dispatch = useDispatch()

    return ( 
        <g>
                            <path 
            id={id}
            d={createCirclePath(arcPoints(numPoints, x, y, distance, length, thetaOffset ))}
            fill={fill}
            // alt : #fa0a37
            stroke={"#4a0a16"}
            strokeWidth={strokeWidth + 10}
            onMouseDown={(id) => dispatch(toggleSlice(id))}
            onMouseUp={(id) => dispatch(toggleSlice(id))}
            onMouseEnter={(id) => dispatch(hoverSlice(id))}
            onMouseLeave={(id) => dispatch(hoverSlice(id))}
        
        />
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

        </g>

     );
}
 
export default Arc;
