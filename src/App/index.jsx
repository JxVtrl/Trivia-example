import { useState } from 'react'
import { useApp } from '../context'
import { Menu, Game } from '../pages'
import { Main } from './styles'

function App() {
  const { step } = useApp()

  return (
    <Main>
      {(step === 0 || step === 1) && <Menu />}
      {step === 2 && <Game />}
    </Main>
  )
}

export default App
