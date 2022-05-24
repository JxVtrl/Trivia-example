import React, { useEffect } from 'react'
import { useApp } from '../context'
import { Menu, Game } from '../pages'
import { Main } from './styles'

function App () {
  const { step, questionNum } = useApp()

  useEffect(() => {
    handleScroll(questionNum)
  }, [questionNum])

  function handleScroll (question) {
    document.getElementById('main').style.transform = `translateY(-${100 * question}%)`
  }

  return (
    <Main id='main'>
      {(step === 0 || step === 1) && <Menu />}
      {step === 2 && <Game />}
    </Main>
  )
}

export default App
