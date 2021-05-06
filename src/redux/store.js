import { createStore, combineReducers, applyMiddleware } from 'redux'
import audioMiddleware from './audio-middleware/audio.middleware'
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

const store = createStore(rootReducer, applyMiddleware(audioMiddleware))

export default store