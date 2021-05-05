import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleControlsOpen } from '../../redux/controls/controls.actions'
import { updateMasterAudioSettings } from '../../redux/controls/controls.actions'
import ItemControls from '../../components/item-controls/ItemControls'
import Slider from '../../components/slider/Slider'
import AddSound from '../../components/add-sound/AddSound'
import './ControlsPage.css'

// const testItems = Array.from({ length: 12}, () => {
//     return {
//         volume: 1.0,
//         rate: 1.0,
//         attack: Math.random(),
//         release: Math.random(),
//     }
// })

class ControlsPage extends Component {
    
    state = {
        volume : 1.0,
        rate: 1.0,
        mutation : 10,
        pausedVoices : [],
    }


    update = (prop, value) => {
        const { updateMasterAudioSettings } = this.props;

        // console.log(prop,value);
        this.setState({ [prop] : Number(value) });
        const settings = {...this.state, [prop] : Number(value)};
        // console.log(settings);
        updateMasterAudioSettings(settings);
    }

    render(){
        const { volume, rate, mutation } = this.state;
        const { controlsOpen, toggleControlsOpen, voices, voiceSettings, soundFileDatas } = this.props;
        // console.log(pausedVoices);
        let sortedVoices = [];
        if(voices.length > 0){
             sortedVoices = voices.sort((a, b) => a.id > b.id ? 1 : -1);
            // const sorted = withDistances.sort((a,b) => (a.distance > b.distance) ? 1 : -1);
        }

        return (
            <div className="flex-wrapper">
                <div className={`control-modal ${controlsOpen ? 'open' : ''}`}>
                    <div className="close" onClick={toggleControlsOpen}>
                        <p className="whiteP"> x</p>
                    </div>
                    <div className="all-slider-container">
                        
                        <div className="master-controls-container">
                            <h2 className="master-controls-header">all voices</h2>
                            <div className="slider-item">
                                <Slider name='volume' value={volume} updateParent={this.update} minVal="0.01" maxVal="2.0" step="0.01"/>
                            </div>
                            <div className="slider-item">
                                <Slider name='rate' value={rate} updateParent={this.update}  minVal="0.01" maxVal="2.0" step="0.01"/>
                            </div>
                            <div className="slider-item">
                                <Slider name='mutation' value={mutation} updateParent={this.update}  minVal="1" maxVal="200" step="1"/>
                            </div>
                        </div>
 
                        <div className="item-controls-container">
                        {
                            sortedVoices.length > 0 ? 
                                sortedVoices.map((voice, i) => <ItemControls key={voice.id} id={voice.id} voiceSettings={voiceSettings[voice.id]}/> )
                                :
                                <div>no currently active items </div>
                        }
                            
                                <AddSound voices={voices} soundFileDatas={soundFileDatas}/>
                            
                        </div>



                    </div>

                </div>
            </div>
    
        )
    }
    
}

const mapStateToProps = state => ({
    controlsOpen : state.controls.controlsOpen,
    masterSettings : state.controls.masterSettings,
    voiceSettings : state.controls.voiceSettings,
    pausedVoices : state.controls.pausedVoices,
    soundFileDatas : state.granular.soundFileDatas,
})

const mapDispatchToProps = dispatch => ({
    toggleControlsOpen : () => dispatch(toggleControlsOpen()),
    updateMasterAudioSettings : (newSettings) => dispatch(updateMasterAudioSettings(newSettings)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ControlsPage)