class SoundSlice {
    constructor(id, distance, length, thetaOffset, stroke, altStroke, strokeWidth ){
        this.id = id;
        this.distance = distance;
        this.numPoints = 120;
        this.length = length;
        this.thetaOffset = thetaOffset;
        this.stroke = stroke;
        this.altStroke = altStroke;
        this.strokeWidth = strokeWidth;
        this.hovering = false;
        this.triggered = false;
        this.playingSound= false;
    }

    hover = () => {

    }

    toggle = () => {
        
    }

}

export default SoundSlice