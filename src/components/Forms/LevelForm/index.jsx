import React from 'react'
import { useApp } from '../../../context'
import { Label } from './styles'

export function LevelForm () {
  const { setLevel, mode } = useApp()

  return (
    <Label isDisabled={mode === 'rank'}>
      Which level?
      <select
        name="level"
        onChange={(e) => setLevel(e.target.value)}
        defaultValue="none"
      >
        <option value="none" selected disabled hidden>Select level</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </Label>
  )
}
