import React from 'react';
import { useApp } from '../../../context';
import { options } from '../../../services/useTriviaOptions'

import { Label } from './styles';

export function ThemeForm() {
  const { setCategory } = useApp();

  const { themes } = options;
  const categories = Object.keys(themes).map(key => themes[key]);
  
  return (
    <Label>
        Select your theme:
        <select name="theme" onChange={e => setCategory(e.target.value)}>
          <option selected disabled>Select a theme</option>
          {categories.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
    </Label>
  );
}
