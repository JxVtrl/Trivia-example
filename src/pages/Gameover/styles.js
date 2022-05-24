import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  padding: 10vh 0 15vh;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 15px;
    flex-direction: column;

    /* ${props => props.mobile
    ? (
      css`
        
      `
    )
    : (
      css`
        flex-direction: row;
      `
    )} */
  }
`
