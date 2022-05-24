import styled from 'styled-components'

export const Label = styled.label`
  display: ${(props) => (props.isDisabled ? 'none' : 'flex')};
  flex-direction: column;
`
