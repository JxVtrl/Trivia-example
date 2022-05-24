import styled from 'styled-components'

export const Label = styled.label`
    display: ${props => { return props.isDisabled ? 'none' : 'flex' }};
    flex-direction: column;
`
