import React from 'react'

import { Container } from './styles'
import { useApp } from '../../context'
import { useDevice } from '../../hooks'

export function Gameover () {
  const { rightAnswers, mode, resetRanked, reset } = useApp()
  const { device: { isMobile } } = useDevice()

  function handleTryAgain () {
    if (mode === 'rank') {
      resetRanked()
    } else {
      reset()
    }
  }

  return (
    <Container mobile={isMobile} >
      <h1>Game Over</h1>
      <div>
        {rightAnswers}
        <button onClick={handleTryAgain}>
          Try again
        </button>
      </div>
    </Container>
  )
}
