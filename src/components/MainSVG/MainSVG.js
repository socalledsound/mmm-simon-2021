import React from 'react'
import BackgroundCircle from '../BackgroundCircle/BackgroundCircle'
// import JoinButton from '../JoinButton/JoinButton'
import Arc from '../Arc/Arc'




const MainSVG = ({ canvasWidth, canvasHeight, circleCenter, circleRadius, soundSlices, joined, mousePos}) => {
    // console.log(joined, soundSlices)
    return ( 
        <svg
        viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}
        width={canvasWidth}
        height={canvasHeight}
>
        <g>
        {/* <g transform="translate(100,100)" stroke="#000" stroke-width="2">
    <path d="M0 0-70 70A99 99 0 0 1-70-70Z" fill="#f00"/>
    <path d="M0 0-70-70A99 99 0 0 1 70-70Z" fill="#080"/>
    <path d="M0 0 70-70A99 99 0 0 1 70 70Z" fill="#dd0"/>
    <path d="M0 0 70 70A99 99 0 0 1-70 70Z" fill="#04e"/>
  </g> */}
    <BackgroundCircle cx={circleCenter.x} cy={circleCenter.y} r={circleRadius}/>


        {    
                soundSlices.length > 0 && soundSlices.map(soundSlice => 
                        <Arc 
                        key={`arc${soundSlice.id}`}
                        id={soundSlice.id}
                        name="pitchControl"
                        x={circleCenter.x}
                        y={circleCenter.y}
                        numPoints={soundSlice.numPoints}
                        distance={soundSlice.distance}
                        // distance={mapVal(soundCircle.pitchControl.val,
                        //     0.0, 2.0, 0.6,1.4) * soundCircle.size  + 22}
                        length={soundSlice.length}
                        thetaOffset={soundSlice.thetaOffset}
                        //numPoints, distance, length, thetaOffset, 
                        // fill={soundCircle.volumeControl.active ? soundCircle.volumeControl.activeFill :
                        //     soundCircle.volumeControl.hover ? soundCircle.volumeControl.hoverFill : soundCircle.volumeControl.fill} 
                        fill={"transparent"}
                        stroke={soundSlice.stroke} 
                        altStroke={soundSlice.altStroke}
                        strokeWidth={soundSlice.strokeWidth}
                        hovering={soundSlice.hovering}
                        triggered={soundSlice.triggered}
                        // updateParentWithMouseDown={this.toggleArc}
                        // updateParentWithMouseUp={this.mouseUp}
                        // updateParentWithHover={this.hoverArc} 
                        
                />
                )
        }

        {/* {
            !joined && 

            <JoinButton cx={circleCenter.x} cy={circleCenter.y} r={circleRadius/3}/>
            

        } */}


        </g>

    {/* <circle cx={mousePos.x} cy = {mousePos.y - 120} r="10" fill="yellow" />  */}

</svg>

     );
}
 
export default MainSVG;
