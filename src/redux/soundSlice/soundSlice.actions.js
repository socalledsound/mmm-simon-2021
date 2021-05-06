import SoundSliceActionTypes from './soundSlice.actions.types'

export const initSoundSlices = (slices) => ({
    type : SoundSliceActionTypes.INIT_SOUND_SLICES,
    payload : {
        slices
    }
})


export const triggerSlice = (id) => ({
    type : SoundSliceActionTypes.TRIGGER_SLICE,
}) 

export const hoverSlice = (id) => ({  
    type : SoundSliceActionTypes.HOVER_SLICE,
    payload : {
        id
    }
})