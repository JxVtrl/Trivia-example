import React from 'react';
import { useApp } from '../../../context';
import { Form } from './styles';

export function NameForm() {
  const { setName, name, setStep } = useApp();

  function submitName(event) {
    event.preventDefault();
    
    if (!name || name < 3) {
        alert('Nome inválido');
        return;
    } else {
        setStep(1);
    }
  }
  
  return (
    <Form onSubmit={(e) => submitName(e)}>
      <label>
          Who are you?
          <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={e => setName(e.target.value)} />
      </label>
    </Form>
  );
}
