import React from 'react';
import { mount } from 'enzyme'
import RootProvider from './RootProvider'
import App from './App'
import Header from './components/Header'


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
    
    expect(app.find(Header).length).toEqual(1)

})
