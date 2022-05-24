import React from 'react';
import { Label } from './styles';
import { useApp } from '../../../context';

export function ModeForm() {
    const { setMode } = useApp();
    return (
        <Label>
            Choose the game mode:
            <select onChange={e => setMode(e.target.value)}>
                <option value="normal" selected>Normal</option>
                <option value="rank">Ranking</option>
            </select>
        </Label>
    );
}
