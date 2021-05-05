import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateMousePos, storeMouseRef } from '../../redux/mouse/mouse.actions'
import { initGame } from '../../redux/game/game.actions'
import { initSoundSlices } from '../../redux/soundSlice/soundSlice.actions'
import SoundSlice from '../../redux/soundSlice/SoundSlice'
import { getRandomColor } from '../../utils'
// import { canvasWidth, canvasHeight, circleRadius, circleBackgroundColor } from '../../globalSettings';
import MainSVG from '../../components/MainSVG/MainSVG'
import MainContainer from './MainContainer'





class Main extends Component {
    constructor(props){
        super(props)
        this.mainDivRef = React.createRef();
    }

    componentDidMount(){
        const { updateMousePos, game, initGame, initSoundSlices } = this.props;
        const { started, canvasWidth, canvasHeight, circleRadius, numPlayers } = game;
        if(!started){
            initGame();
           
            const soundSlices = Array.from({ length: numPlayers }, (el, i) => {
                //id, center, distance, length, thetaOffset, stroke, strokeWidth 
                return new SoundSlice(i, {x: canvasWidth/2, y: canvasHeight/2}, circleRadius * .68, 320/numPlayers, (360/numPlayers) * i, getRandomColor(), circleRadius * .4);
            })
            initSoundSlices(soundSlices)
        }

        initGame();

        // updateSoundSlices(soundSlices)

        this.mainDivRef.current.addEventListener("touchstart", (e) => {
            e.preventDefault();
           // this.props.updateMousePos(e.clientX, e.clientY);
           // this.props.startDrawing();
        });

        this.mainDivRef.current.addEventListener("touchmove", (e) => {
            e.preventDefault();

            updateMousePos(e.touches[0].pageX, e.touches[0].pageY)
        });

        this.mainDivRef.current.addEventListener("touchend", (e) => {
            e.preventDefault();
            // resetClicked();
         });
    }

    mouseUp = (x, y) => {
        const { storeMouseRef} = this.props;
        storeMouseRef({x : x, y: y});
    }
    // draw = (ctx, frameCount) => {
    //     // console.log(ctx);
    //      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);


    // }

    render(){
        const { updateMousePos, mousePos, soundSlices, joined, game  } = this.props;
        const { canvasWidth, canvasHeight, circleRadius } = game;
        return ( 
            <MainContainer
            onMouseMove={(e) => updateMousePos(e.clientX, e.clientY)}
            onMouseUp={(e) => this.mouseUp(e.clientX, e.clientY)}
            style={{ overflow: "hidden" }}
            ref={this.mainDivRef}
            
            >
                {/* <Canvas draw={this.draw}/> */}
                <MainSVG 
                    mousePos={mousePos} 
                    canvasWidth={canvasWidth} 
                    canvasHeight={canvasHeight} 
                    circleRadius={circleRadius} 
                    soundSlices={soundSlices}
                    joined={joined}
                    />
            </MainContainer>
         );
    }

}
 


const mapStateToProps = state => ({
    mousePos : state.mouse.mousePos,
    game : state.game,
    joined : state.user.joined,
    numPlayers : state.game.numPlayers,
    soundSlices : state.soundSlices.soundSlices,
})

const mapDispatchToProps = dispatch => ({
    updateMousePos : (x, y) => dispatch(updateMousePos(x, y)),
    storeMouseRef : (mousePos) => dispatch(storeMouseRef(mousePos)),
    initGame : () => dispatch(initGame()),
    initSoundSlices : (slices) => dispatch(initSoundSlices(slices)),
    // resetImageButtonControlStates : () => dispatch(resetImageButtonControlStates()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
