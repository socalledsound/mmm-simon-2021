import React from 'react'
import ReactDOM from 'react-dom'
import RootProvider from './RootProvider'
import App from './App'
import './index.css'
import "normalize.css" 

ReactDOM.render(
        <RootProvider>
            <App/>
        </RootProvider>,
    document.getElementById('root')
)