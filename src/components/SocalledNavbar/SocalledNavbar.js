import React, { Component } from 'react';

import Navbar from './Navbar'
import NavItem from './NavbarItem'

const NavbarConfig = [
    {
        path: '/',
        title: 'home'
    },
    {
        path: '/about',
        title: 'about'
    }
]


class SocalledNavbar extends Component {
    state = {  }
    render() { 
        return ( 
           
            <Navbar>
                {
                    NavbarConfig.map(item => {
                        return (
                            <NavItem>
                                {item.title}
                            </NavItem>
                        )
                    })
                }
            </Navbar>

        
         );
    }
}
 
export default SocalledNavbar;