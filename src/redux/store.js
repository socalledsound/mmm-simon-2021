import { createStore, combineReducers } from 'redux'
import mouseReducer from './mouse/mouseReducer'
import soundSliceReducer from './soundSlice/soundSlice.reducer'
import gameReducer from './game/game.reducer'
import userReducer from './user/userReducer'



const rootReducer = combineReducers({
    user: userReducer,
    mouse : mouseReducer,
    soundSlices : soundSliceReducer,
    game : gameReducer,
})

const store = createStore(rootReducer)

export default store