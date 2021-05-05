import React, { Component } from 'react'
import { connect } from 'react-redux'
import SocalledNavbar from './components/SocalledNavbar/SocalledNavbar'
import Main from './pages/Main/Main'
import Modal from './components/Modal/Modal'
import About from './pages/About/About'
import Logo from './assets/SimonLogo/SimonLogo'
import Controls from './pages/controls-page/Controls'


class App extends Component {
    state = { 
        selected: null,
        modal : false,
     }

     toggleModal = (page) => {
        const { modal } = this.state
        this.setState({selected : page, modal: !modal})
        
     }


    render() { 
        const { modal, selected } = this.state;
       console.log(modal, selected);
       const Content = selected;
        return ( 
            <React.Fragment>
              
                <SocalledNavbar 
                    Logo={Logo}
                    About={About}
                    Controls={Controls}
                    toggleModal={this.toggleModal}
                />
                <Main />
                { modal &&
                        <Modal>
                            {<Content />}
                        </Modal>
                }
               
                
            </React.Fragment>
         );
    }
}
 

const mapStateToProps = state => ({
    currentUser:  state.user.currentUser,
})

export default connect(mapStateToProps)(App);