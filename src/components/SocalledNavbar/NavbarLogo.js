import React from 'react'
import { NavLink } from 'react-router-dom'
import FlexContainer from './FlexContainer'
import styled from 'styled-components'

const NavbarLink = styled(NavLink)`

margin-left: 0.4rem;
margin-right: 0.4rem;
/* padding-left: 1rem;
padding-right: 1rem;
padding-top: 0.7rem; */

padding: 2rem;
padding-top: 1rem;
margin-top: 1rem;
/* padding-bottom: 1.2rem; */
/* background-color: #7c7c7c; */
background-color: #372b2b;
color: #202020;
border: 1px solid #000;
text-decoration: none;
border-radius: 0.3rem;
font-size: 0.9rem;
height: 5rem;
vertical-align: middle;
box-sizing: border-box;

`;



const NavbarLogo = ({data}) => {
    return ( 
        <FlexContainer>
        <NavbarLink  to="/" >
            {<data.logo />}
        </NavbarLink >    
        </FlexContainer>
     );
}
 
export default NavbarLogo;