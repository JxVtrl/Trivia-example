import styled, { css, keyframes } from 'styled-components'

export const correct = keyframes`
    from {
        background-color: #ccc;
    }
    to {
        background-color: #00ff00;
    } 
`

export const wrong = keyframes`
    from {
        background-color: #ccc;
    }
    to {
        background-color: #ff0000;
    } 
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 6vh 0;

  h1 {
    font-size: ${(props) => (props.mobile ? '1rem' : '1.4rem')};
    text-align: center;
    margin: 0 20px;
  }

  ul {
    margin: 30px 0;

    ${(props) =>
      props.mobile
        ? css`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
          `
        : css`
            display: grid;
            grid-template-columns: ${(props) =>
              props.mobile ? '1fr' : 'repeat(2, 1fr)'};
            grid-gap: 20px;
            place-items: center;
          `}
  }

  li {
    list-style: none;
    width: 220px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    text-align: center;
    cursor: pointer;

    border: 1px solid #ccc;
    transition: all 0.3s;

    &:hover {
      background: #ccc;
    }
  }

  li.correct {
    animation: ${correct} 0.3s infinite;
  }

  li.wrong {
    animation: ${wrong} 0.3s infinite;
  }
`
