import GameActionTypes from './game.action.types.js'


// export const canvasWidth = window.innerWidth;
// export const canvasHeight = window.innerHeight; 
// export const circleRadius = window.innerHeight/3;
// export const circleBackgroundColor = "#333";

const INITIAL_STATE = {
    canvasWidth : window.innerWidth,
    canvasHeight : window.innerHeight,
    circleRadius : window.innerHeight/3,
    numPlayers : 4,
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