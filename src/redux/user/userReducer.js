import UserActionTypes from './user.actions.types.js'

const INITIAL_STATE = {
    joined: false,
    userName: null,
}

const userReducer = ( state= INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.JOIN_GAME :
            return {
                ...state,
                joined: true
            }
        default : 
        return {
            ...state
        }
    }
}

export default userReducer