import React from 'react'
import { useApp } from '../../../context'
import { options } from '../../../utils/useTriviaOptions'

import { Label } from './styles'

export function ThemeForm () {
  const { setCategory } = useApp()

  const { themes } = options
  const categories = Object.keys(themes).map((key) => themes[key])

  return (
    <Label>
      Select your theme:
      <select
        name='theme'
        onChange={(e) => setCategory(e.target.value)}
        defaultValue='none'
      >
        <option value='none' selected disabled hidden>
          Select theme
        </option>
        {categories.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </Label>
  )
}
