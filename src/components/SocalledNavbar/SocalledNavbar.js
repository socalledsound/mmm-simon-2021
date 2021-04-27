import React, { Component } from 'react';
import Logo from './Logo/Logo'
import Navbar from './Navbar'
import NavbarLogo from './NavbarLogo'
import NavbarItem from './NavbarItem'

const NavbarConfig = {

    home : {
        
        path: '/',
        title: 'home',
        logo: Logo
    },
    items :[ 
        {
            id: 0,
            path: '/about',
            title: 'about'
        },
        {
            id: 1,
            path: '/more',
            title: 'more'
        }
    ]
}


class SocalledNavbar extends Component {
    state = {  }
    render() { 
        return ( 
           
            <Navbar>
                {<NavbarLogo data={NavbarConfig.home} />}
                {
                    NavbarConfig.items.map(item => {
                        return (
                            <NavbarItem key={item.id} item={item} />
                        )
                    })
                }
            </Navbar>

        
         );
    }
}
 
export default SocalledNavbar;