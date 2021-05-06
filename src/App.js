import React, { Component } from 'react'
import { connect } from 'react-redux'
import SocalledNavbar from './components/SocalledNavbar/SocalledNavbar'
import Main from './pages/Main/Main'
import ChatPanel from './pages/ChatPanel/ChatPanel'
import Modal from './components/Modal/Modal'
import About from './pages/About/About'
import Logo from './assets/SimonLogo/SimonLogo'
import Controls from './pages/controls-page/Controls'
import CloseModal from './components/CloseModal/CloseModal'
import styled from 'styled-components'

const MainContainer = styled.div`
display: flex;
max-width: 50vw;

`;
class App extends Component {
    state = { 
        selected: null,
        modal : false,
     }

     closeModal = () => {
         this.setState({ modal: false })
     }

     toggleModal = (page) => {
        const { modal, selected } = this.state
        if(page === selected){
            this.setState({selected : page, modal: !modal})
        } else {
            this.setState({selected : page, modal: true})
        }
        
        
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
                <MainContainer>
                    <Main />
                    <ChatPanel />
                </MainContainer>

                { modal &&
                        <Modal>
                           <CloseModal closeModal={this.closeModal}/>
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