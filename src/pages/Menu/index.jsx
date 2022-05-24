import React, { useEffect } from 'react'
import { useApp } from '../../context'
import { Container } from './styles'
import { AmountForm, LevelForm, ModeForm, NameForm, ThemeForm } from '../../components/Forms'

export function Menu () {
  const {
    setStep,
    step,
    category,
    level,
    amount,
    mode,
    fetchApiNormal,
    fetchApiRank
  } = useApp()

  useEffect(() => {
    if (localStorage.getItem('name')) {
      setStep(1)
    }
  }, [])

  function submitOptions (event) {
    event.preventDefault()

    if ((category && level && amount && mode === 'normal') || (mode === 'rank' && category)) {
      if (mode === 'rank') {
        fetchApiRank()
      } else {
        fetchApiNormal()
      }

      setStep(step + 1)
    }
  }

  return (
        <Container>
            {step === 0
              ? <NameForm />
              : <form onSubmit={e => submitOptions(e)}>
                    <ModeForm />
                    <ThemeForm />
                    <LevelForm />
                    <AmountForm />
                    <input type="submit" value="Submit" />
                </form>
            }
        </Container>
  )
}
