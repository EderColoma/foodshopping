import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 32px;

    display: flex;
    align-items: center;
`

export const Indicator = styled.div`
    height: 14px;
    width: 14px;
    border-radius: 7px;
    border: 2px solid #004D61;
    ${props => props.value ? 'background-color: #004D61' : ''};
    margin-right: 8px;
    cursor: pointer;
`