import GameActionTypes from './game.action.types.js'


// export const canvasWidth = window.innerWidth;
// export const canvasHeight = window.innerHeight; 
// export const circleRadius = window.innerHeight/3;
// export const circleBackgroundColor = "#333";

const canvasWidth = window.innerWidth/2;
const canvasHeight = window.innerHeight;

const INITIAL_STATE = {
    canvasWidth,
    canvasHeight,
    circleRadius : window.innerWidth/5,
    circleCenter : {x: canvasWidth/2, y: canvasHeight/2},
    numPlayers : 5,
    started: false,
}

const gameReducer = ( state= INITIAL_STATE, action) => {
    switch(action.type){
        
        case GameActionTypes.INIT_GAME : 

        return {
            ...state,
            gameStarted : true,
        }


        case GameActionTypes.ADD_PLAYER :
            return {
                ...state,
                numPlayers: state.numPlayers + 1,
            }

        default :
        return {
            ...state
        }
    }
}

export default gameReducer