import React from 'react'
import { Label } from './styles'
import { useApp } from '../../../context'

export function ModeForm () {
  const { setMode } = useApp()
  return (
    <Label>
      Choose the game mode:
      <select onChange={(e) => setMode(e.target.value)} defaultValue='none'>
        <option value='none' disabled hidden>
          Select mode
        </option>
        <option value='normal'>Normal</option>
        <option value='rank'>Ranking</option>
      </select>
    </Label>
  )
}
