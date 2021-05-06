import React, { Component } from 'react';
import styled from 'styled-components'
const ChatContainer = styled.div`
color: white;
margin: 0 auto;
padding: 2rem;
display: flex;
flex-direction: column;
justify-content: start;
width: 50vw;
box-sizing: border-box;
`


class ChatPanel extends Component {
    state = {  }
    render() { 
        return ( 
            <ChatContainer>
                <div style={{width: '40vw'}}>
                    <h1 style={{width: '100%'}}>
                    Chat Panel will go here
                    </h1>
                </div>

                <p style={{width: '100%'}}>
                Chat Panel will go here
                </p>
               
            </ChatContainer>
         );
    }
}
 
export default ChatPanel;