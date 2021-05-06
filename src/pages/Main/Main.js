import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateMousePos, storeMouseRef } from '../../redux/mouse/mouse.actions'
import { initGame } from '../../redux/game/game.actions'
import { initSoundSlices } from '../../redux/soundSlice/soundSlice.actions'
import SoundSlice from '../../redux/soundSlice/SoundSlice'
// import { canvasWidth, canvasHeight, circleRadius, circleBackgroundColor } from '../../globalSettings';
import MainSVG from '../../components/MainSVG/MainSVG'
import MainContainer from './MainContainer'
import { playerColors, altPlayerColors } from '../../colorPalette'




class Main extends Component {
    constructor(props){
        super(props)
        this.mainDivRef = React.createRef();
    }

    componentDidMount(){
        const { updateMousePos, game, initGame, initSoundSlices } = this.props;
        const { started, circleRadius, numPlayers } = game;
        if(!started){
            initGame();
           
            const soundSlices = Array.from({ length: numPlayers }, (el, i) => {
                 
                return new SoundSlice(
                                i, // id 
                                circleRadius * .68, //distance from center
                                320/numPlayers, //length
                                (360/numPlayers) * i, //theta offset
                                playerColors[i], // main color
                                altPlayerColors[i], // triggered color
                                circleRadius * .4  //strokeWidth aka depth of arc
                                )  
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
        const { canvasWidth, canvasHeight, circleRadius, circleCenter } = game;
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
                    circleCenter={circleCenter}
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
