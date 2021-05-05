import React, { Component } from 'react'
import { connect } from 'react-redux'
import SocalledNavbar from './components/SocalledNavbar/SocalledNavbar'
import Main from './pages/Main/Main'


class App extends Component {
    state = {  }
    render() { 
        // const {currentUser } = this.props
        return ( 
            <React.Fragment>
              
                <SocalledNavbar />
                <Main />
                
            </React.Fragment>
         );
    }
}
 

const mapStateToProps = state => ({
    currentUser:  state.user.currentUser,
})

export default connect(mapStateToProps)(App);