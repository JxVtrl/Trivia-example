import React, { useEffect } from 'react'
import { useApp } from '../context'
import { Menu, Game, Gameover } from '../pages'
import { Main } from './styles'

function App () {
  const { step, questionNum, mode } = useApp()

  useEffect(() => {
    handleScroll(questionNum)
  }, [questionNum])

  useEffect(() => {
    if (step === 6 || step === 5 || step === 3) {
      handleScroll(0)
    }
  }, [step])

  function handleScroll (question) {
    document.getElementById('main').style.transform =
      `translateY(-${100 * question}%)`
  }

  return (
    <Main id='main'>
      {(step === 0 || step <= 4) && <Menu />}
      {(step === 5 || (mode === 'rank' && step === 3)) && <Game />}
      {step === 6 && <Gameover />}
    </Main>
  )
}

export default App
