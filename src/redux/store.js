import { createStore, combineReducers } from 'redux'


// const mockReducer = (state = {currentUser: 'sam'}) => {
//     return {
//         ...state
//     }
// }


const rootReducer = combineReducers({
    user: (state = {currentUser: 'sam'}, action) => ({...state}),
})

const store = createStore(rootReducer)

export default store