import React, { Component } from 'react'

import {Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import SocalledNavbar from './components/SocalledNavbar/SocalledNavbar'
import Main from './pages/Main'
import About from './pages/About'

class App extends Component {
    state = {  }
    render() { 
        // const {currentUser } = this.props
        return ( 
            <React.Fragment>
              
                <SocalledNavbar />
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/about" component={About}/>
                </Switch>
                
            </React.Fragment>
         );
    }
}
 

const mapStateToProps = state => ({
    currentUser:  state.user.currentUser,
})

export default connect(mapStateToProps)(App);