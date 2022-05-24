import React, { createContext, useContext, useEffect, useState, useRef } from 'react'
import { createURL } from '../services/useTriviaApi'
import axios from 'axios';
const AppContext = createContext()

export function AppProvider({ children }) {
    const [step, setStep] = useState(0)

    const [mode, setMode] = useState('')
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [level, setLevel] = useState('')
    const [amount, setAmount] = useState(0)

    const [trivia, setTrivia] = useState([])

    useEffect(() => {
        if (step < 0) {
            setStep(0)
        } else if (step === 2 && mode === 'normal') {
            fetchApiNormal()
        } else if (step === 2 && mode === 'rank') {
            fetchApiRank()
        }
        console.log(step)
    }, [step])

    function fetchApiNormal() {
        axios.get(createURL(amount, category, level))
            .then(res => {
                console.log(res.data)
                setTrivia(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }

    function fetchApiRank() {
        axios.get(createURL(1, category, level))
            .then(res => {
                console.log(res.data)
                setTrivia(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const value = {
        mode,
        setMode,
        name,
        setName,
        step,
        setStep,
        category,
        setCategory,
        setLevel,
        level,
        amount,
        setAmount,
        trivia
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    return useContext(AppContext)
}
