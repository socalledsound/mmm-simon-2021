import GameActionTypes from './game.action.types'

export const initGame = () => ({
    type : GameActionTypes.INIT_GAME,
})

export const addPlayer = () => ({
    type: GameActionTypes.ADD_PLAYER,
})