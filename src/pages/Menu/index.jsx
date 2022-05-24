import React from 'react';
import { useApp } from '../../context';
import { Container } from './styles';
import { AmountForm, LevelForm, NameForm, ThemeForm } from '../../components/Forms';

export function Menu() {
    const { setStep, step, category, level, amount } = useApp();

    function submitOptions(event) {
        event.preventDefault();

        if (category && level && amount) {
            setStep(step + 1);
        }
    }

    return (
        <Container>
            {step === 0 ?
                <NameForm /> :
                <form onSubmit={e => submitOptions(e)}>
                    <ThemeForm />
                    <LevelForm />
                    <AmountForm />
                    <input type="submit" value="Submit" />
                </form>
            }
        </Container>
    );
}
