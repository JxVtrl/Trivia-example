import React from 'react'

import { Container } from './styles'
import { useApp } from '../../context'

export function Gameover () {
  const { rightAnswers } = useApp()
  return (
    <Container>
      {rightAnswers}
    </Container>
  )
}
