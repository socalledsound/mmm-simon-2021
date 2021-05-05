import React from 'react';
import { mount } from 'enzyme'
import 'jest-canvas-mock';
import RootProvider from '../../RootProvider'
import Main from './Main'
import MainSVG from '../../components/MainSVG/MainSVG'
import mouseReducer from '../../redux/mouseReducer/mouseReducer';


// const setup = (initialState = {}) => {
//     const store = store
// }

const MainComponent = () => {
    return (
        <RootProvider>
            <Main />
        </RootProvider>
    )
}


let wrapped
beforeEach(() => {
    wrapped = mount(<MainComponent />)
})

afterEach(() => {
    wrapped.unmount()
})

it('has a containing div', () => {
    expect(wrapped.find('div').length).toEqual(1)
})

it('has a main svg component', () => {
    expect(wrapped.find(MainSVG).length).toEqual(1)
})

it('has a ref', () => {
    
})


