import React from 'react'
import { useDispatch } from 'react-redux'
import { triggerSlice, hoverSlice } from '../../redux/soundSlice/soundSlice.actions'
import { trigSoundSimple } from '../../redux/audio-middleware/audio.actions'
import { createCirclePath, arcPoints } from '../../utils';
import { trimColor, trimColorAlt } from '../../colorPalette'

const Arc = ({ id, x, y, numPoints, distance, length, thetaOffset, fill, stroke,  altStroke, strokeWidth, hovering, triggered}) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(trigSoundSimple(id))
        dispatch(triggerSlice(id))
        setTimeout(() => {
            dispatch(triggerSlice(id))
        }, 500)
    }

    return ( 
        <g>
                            <path 
            id={id}
            d={createCirclePath(arcPoints(numPoints, x, y, distance, length, thetaOffset ))}
            fill={fill}
            // alt : #fa0a37
            stroke={hovering ? trimColorAlt : trimColor}
            strokeWidth={strokeWidth + 10}
            // onMouseDown={() => dispatch(toggleSlice(id))}
            // onMouseUp={() => dispatch(toggleSlice(id))}
            // onMouseEnter={handleHover}
            // onMouseLeave={handleHover}
        
        />
        <path 
            id={id}
            d={createCirclePath(arcPoints(numPoints, x, y, distance, length, thetaOffset ))}
            fill={fill}
            stroke={triggered ? altStroke : stroke}
            strokeWidth={strokeWidth}
            onMouseDown={handleClick}
            // onMouseUp={() => dispatch(toggleSlice(id))}
            onMouseEnter={() => dispatch(hoverSlice(id))}
            onMouseLeave={() => dispatch(hoverSlice(id))}
        
        />

        </g>

     );
}
 
export default Arc;
