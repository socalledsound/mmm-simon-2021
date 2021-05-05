import React, { Component } from 'react';
import Logo from '../../assets/SimonLogo/SimonLogo'
import QuestionMark from './QuestionMark'
import ControlsIcon from './ControlsIcon'
import Navbar from './Navbar'
import NavbarLogo from './NavbarLogo'
import NavbarItem from './NavbarItem'
import FlexContainer from './FlexContainer'
import About from '../../pages/About/About'
import Controls from '../../pages/controls-page/Controls'

const NavbarConfig = {

    home : {
        logo: Logo
    },
    items :[ 
        {
            id: 0,
            modal: About,
            icon: QuestionMark,
        },
        {
            id: 1,
            modal: Controls,
            icon: ControlsIcon,
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