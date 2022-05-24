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
    const [questionNum, setQuestionNum] = useState(0)

    function fetchApiNormal() {
        axios.get(createURL(amount, category, level))
            .then(res => {
                setTrivia(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }

    function getRandomLevel() {
        const levels = ['easy', 'medium', 'hard']
        const random = Math.floor(Math.random() * 3)
        return levels[random]
    }

    function fetchApiRank() {
        axios.get(createURL(1, category, getRandomLevel()))
            .then(res => {
                console.log(res.data.results)
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
        trivia, 
        fetchApiNormal,
        fetchApiRank,
        setQuestionNum,
        questionNum
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
