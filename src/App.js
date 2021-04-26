import React, { Component } from 'react'
import { connect } from 'react-redux'
import SocalledNavbar from './components/SocalledNavbar/SocalledNavbar'

class App extends Component {
    state = {  }
    render() { 
        // const {currentUser } = this.props
        return ( 
            <SocalledNavbar />

         );
    }
}
 

const mapStateToProps = state => ({
    currentUser:  state.user.currentUser,
})

export default connect(mapStateToProps)(App);