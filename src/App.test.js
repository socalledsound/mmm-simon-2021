import React from 'react';
import 'jest-canvas-mock';

import { mount } from 'enzyme'
import RootProvider from './RootProvider'
import App from './App'
import SocalledNavbar from './components/SocalledNavbar/SocalledNavbar'

// const setup = (initialState = {}) => {
//     const store = store
// }

const RP = () => {
    return (
        <RootProvider>
            <App />
        </RootProvider>
    )
}


let app
beforeEach(() => {
    app = mount(<RP />)
})

afterEach(() => {
    app.unmount()
})

it('has a header', () => {
    
    expect(app.find(SocalledNavbar).length).toEqual(1)

})
