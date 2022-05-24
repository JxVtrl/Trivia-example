import React, { useEffect } from 'react'
import { useApp } from '../../context'
import { Container } from './styles'
import {
  AmountForm,
  LevelForm,
  ModeForm,
  NameForm,
  ThemeForm
} from '../../components/Forms'

export function Menu () {
  const {
    setStep,
    step,
    category,
    level,
    amount,
    mode,
    fetchApiNormal,
    fetchApiRank,
    name
  } = useApp()

  useEffect(() => {
    if (localStorage.getItem('name')) {
      setStep(1)
    }
  }, [])

  function validateStep () {
    if (
      (step === 0 && name) ||
      (step === 1 && mode) ||
      (step === 2 && category) ||
      (step === 3 && level) ||
      (step === 4 && amount)
    ) {
      return true
    } else { return false }
  }

  function submitOptions (event) {
    event.preventDefault()

    if (mode === 'rank' && step === 2) {
      fetchApiRank()
    } else if (mode === 'normal' && step === 4) {
      fetchApiNormal()
    }

    if (validateStep()) {
      setStep(step + 1)
    }
  }

  return (
    <Container>
      <form onSubmit={(e) => submitOptions(e)}>
        {step === 0 &&
          (
            <NameForm />
          )}
        {step === 1 &&
          (
            <ModeForm />
          )}
        {step === 2 &&
          (
            <ThemeForm />
          )}
        {step === 3 && mode === 'normal' &&
          (
          <LevelForm />
          )}
        {step === 4 && mode === 'normal' &&
          (
            <AmountForm />
          )}
        {validateStep() && <input type='submit' value='Submit' />}
        </form>
    </Container>
  )
}
