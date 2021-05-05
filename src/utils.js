export const createCirclePath = vertices => 
    `M${vertices.map( ({theta, r, offsetX, offsetY}) =>  [
        offsetX + (r * Math.cos(theta)),
        offsetY + (r * Math.sin(theta))
    ]).join('L')}`;

export const arcPoints = (numPoints, offsetX, offsetY, radius, length, thetaOffset) => {
        const theta = length/numPoints;
        const vertices = range(numPoints);
    
        return vertices.map( idx => ({
            theta: degreesToRadians((theta * idx) + thetaOffset),
            r: radius,
            offsetX, 
            offsetY
        }))
    }


    export const circleCoords = (numCrowdCircles, centerX, centerY, radius) => {
        console.log(centerX, radius);
        const inc = 360/numCrowdCircles;
        const points = range(numCrowdCircles);
        return points.map(idx => {
            const theta = degreesToRadians(inc * idx);
            return ({
                x: centerX + (radius * Math.cos(theta)),
                y: centerY + (radius * Math.sin(theta)),
            })
        })
    }
    
    
    export const getDistance = (pos1, pos2) => {
        const dx = pos1.x - pos2.x;
        const dy = pos1.y - pos2.y;
        return Math.sqrt(dx * dx + dy * dy) 
      }
    
    //   export const getRotationDistance = (pos1, pos2, centerPos) => {
    //         const distance = 1  
    //     return distance
    //   }
      
    export const getRandomColor = () => `#${Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, "0")}`
    export const degreesToRadians = angle => (Math.PI * angle) / 180;
    export const radiansToDegrees = angle => (angle * (180/Math.PI) + 360) % 360;
    export const radiansToDegrees2 = angle => (angle >= 0 ? angle : (2*Math.PI + angle)) * 360 / (2*Math.PI)
    
    const range = count => Array.from(Array(count).keys());
    
    export const mapVal = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;
    
    export const constrainTheta = ( theta, orientationTheta ) => {
        const thetaMin = -45;
        const thetaMax = 45;
    
        // if(theta > 0){
        //     if(theta > 45)
        //     adjustedTheta = 45 
        // }
    
    
        return theta < thetaMin ?  thetaMin : theta > thetaMax ? thetaMax : theta; 
    }
    
    export const getCirclePos = (centerX, centerY, r, theta) => {
        return ({
            x: centerX + (r * Math.cos(theta)),
            y: centerY + (r * Math.sin(theta)),
        })
    }
    
    
    export const getControlPos = (offsetX, offsetY, r, theta) => {
    
        return ({
            x: offsetX + (r * Math.cos(theta)),
            y: offsetY + (r * Math.sin(theta)),
        })
    }
    
    
    
    export const getAngles = (numCrowdCircles) => {
        const inc = 360/numCrowdCircles;
        const angles = range(numCrowdCircles);
        return angles.map(idx => {
            return degreesToRadians(inc * idx)
        })
    }
    
    
    export const getMarkCoords = (dir, numMarks, dist, theta) => {
        return 1
    }
    
