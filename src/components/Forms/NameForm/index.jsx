import React from 'react'
import { useApp } from '../../../context'

export function NameForm () {
  const { setName, name, setStep } = useApp()

  const handleChange = (e) => {
    setName(e.target.value)

    if (!name || name < 3) {
      alert('Nome inválido')
    } else {
      localStorage.setItem('name', name)
      setStep(1)
    }
  }

  return (
    <label>
      Who are you?
      <input
        type='text'
        name='name'
        placeholder='Enter your name'
        value={name}
        onChange={(e) => handleChange(e)}
      />
    </label>
  )
}
