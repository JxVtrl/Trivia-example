import React from 'react';
import { useApp } from '../../../context';
import { Label } from './styles';

export function LevelForm() {
  const { setLevel } = useApp();

  return (
    <Label>
      Which level?
      <select name="level" onChange={(e) => setLevel(e.target.value)}>
        <option selected disabled>Select level</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </Label>
  );
}
