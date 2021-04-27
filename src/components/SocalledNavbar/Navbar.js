import React from 'react';
import styled from 'styled-components'


const NavbarEl = styled.nav`
  margin: auto;
`

const NavbarList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
`


const Navbar = ({children}) => {
    return ( 
        <NavbarEl>
           <NavbarList>{children}</NavbarList>
        </NavbarEl>
     );
}
 
export default Navbar;
