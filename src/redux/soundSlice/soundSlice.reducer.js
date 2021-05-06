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

        case SoundSliceActionTypes.TRIGGER_SLICE :
            // console.log(action);
            return {
                ...state,
                soundSlices : state.soundSlices.map((slice, i) => 
                i === action.payload.id ? 
                        {...slice, triggered: !state.soundSlices[action.payload.id].triggered} 
                        :
                        slice
                        )
            }
        case SoundSliceActionTypes.HOVER_SLICE :
        
            
            
                return {
                    ...state,
                    soundSlices : state.soundSlices.map((slice, i) => 
                            i === action.payload.id ? 
                                    {...slice, hovering: !state.soundSlices[action.payload.id].hovering} 
                                    :
                                    slice
                                    )
                }    
        default : 
            return {
                ...state
            }    
    }
}

export default soundSliceReducer