import React from 'react'
import { Wrapper } from './AppContainer.styles'

function AppContainer({ left, center, right }){

    return <Wrapper>
        <div>{ left }</div>
        <div>{ center }</div>
        <div>{ right }</div>
    </Wrapper>

}

export default AppContainer;