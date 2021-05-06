import React, { Component } from 'react'
import Chat from './Chat'
import { backgroundGrey} from '../../colorPalette'
import styled from 'styled-components'
const SidePanelContainer = styled.div`
color: white;
margin: 0 auto;
padding: 2rem;
display: flex;
flex-direction: column;
justify-content: start;
width: 50vw;
box-sizing: border-box;
// border-left: solid 1px ${backgroundGrey};

`
const SidePanelInset = styled.div`

background-color: ${backgroundGrey};
padding: 2rem;

`

class SidePanel extends Component {
    state = {  }
    render() { 
        return ( 

            <SidePanelContainer>
                <SidePanelInset>
                    <Chat />
                </SidePanelInset>
            </SidePanelContainer>

         );
    }
}
 
export default SidePanel;