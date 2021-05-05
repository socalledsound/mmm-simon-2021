import React, { Component } from 'react';
import Logo from '../../assets/SimonLogo/SimonLogo'
import Navbar from './Navbar'
import NavbarLogo from './NavbarLogo'
import NavbarItem from './NavbarItem'
import FlexContainer from './FlexContainer'
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
        },
        {
            id: 2,
            path: '/controls',
            title: 'more'
        }

    ]
}


class SocalledNavbar extends Component {
    state = {  }
    render() { 
        return ( 
           
            <Navbar>
                 
                 <FlexContainer>
                    {<NavbarLogo data={NavbarConfig.home} />}
                 </FlexContainer>

                 <FlexContainer>
                {
                    NavbarConfig.items.map(item => {
                        
                        return (                          
                            <NavbarItem key={item.id} item={item} />
                        )
                    }) 
                }
                 </FlexContainer>
            </Navbar>

        
         );
    }
}
 
export default SocalledNavbar;