import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './components/Header'
class App extends Component {
    state = {  }
    render() { 
        // const {currentUser } = this.props
        return ( 
            <div>
                <Header />
                <div>
                    {/* <p>hello, { currentUser}</p> */}
                </div>
            </div>
         );
    }
}
 

const mapStateToProps = state => ({
    currentUser:  state.user.currentUser,
})

export default connect(mapStateToProps)(App);