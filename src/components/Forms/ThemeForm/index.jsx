import React from 'react'
import { useApp } from '../../../context'
import { options } from '../../../utils/useTriviaOptions'

import { Label } from './styles'

export function ThemeForm () {
  const { setCategory } = useApp()

  const { themes } = options
  const categories = Object.keys(themes).map((key) => themes[key])

  const handleChange = (e) => {
    setCategory(e.target.value)
  }

  return (
    <Label>
      Select your theme:
      <select
        name='theme'
        onChange={handleChange}
        defaultValue='none'
      >
        <option value='none' disabled hidden>
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
