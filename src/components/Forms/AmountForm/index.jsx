import React from 'react';

import { Label } from './styles';
import { useApp } from '../../../context';

export function AmountForm() {
  const { setAmount } = useApp();

  function handleChange(event) {
    if (event.target.value > 0 && event.target.value <= 50) {
      setAmount(event.target.value);
    }
 }

  return (
    <Label>
      How many questions?
      <input type="number" name="amount" min="1" max="50" onChange={e => handleChange(e)} placeholder='0-50'/>
    </Label>
  );
}
