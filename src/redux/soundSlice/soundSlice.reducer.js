import SoundSliceActionTypes from './soundSlice.actions.types'


const INITIAL_STATE = {
    soundSlices : [],
}

const soundSliceReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){

        case SoundSliceActionTypes.INIT_SOUND_SLICES :
            return {
                ...state,
                soundSlices : state.soundSlices.concat(action.payload.slices)
            }

        case SoundSliceActionTypes.TOGGLE_SLICE :
            return {
                ...state
            }
        case SoundSliceActionTypes.HOVER_SLICE :
                console.log('hovering')
                return {
                    ...state
                }    
        default : 
            return {
                ...state
            }    
    }
}

export default soundSliceReducer