import React from 'react'
import styled from 'styled-components'

const ModalContainer = styled.div`
    position: absolute;
    left: 0;
    top: 100px;
    width: 90vw;
    height: 90vw;
    background-color: #FFF;

`;

const Modal = ({children}) => {
    return ( 
        <ModalContainer>
            {children}
        </ModalContainer>
     );
}
 
export default Modal;
