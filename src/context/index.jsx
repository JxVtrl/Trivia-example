import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef
} from 'react'
import { createURL } from '../services'
import { options } from '../utils'
import axios from 'axios'
const AppContext = createContext()

export function AppProvider ({ children }) {
  const [step, setStep] = useState(0)

  const [mode, setMode] = useState('')
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [level, setLevel] = useState('')
  const [amount, setAmount] = useState(0)

  const [trivia, setTrivia] = useState([])
  const [questionNum, setQuestionNum] = useState(0)
  const [rightAnswers, setRightAnswers] = useState(0)

  function fetchApiNormal () {
    axios
      .get(createURL(amount, category, level))
      .then((res) => {
        setTrivia(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function getRandomLevel () {
    const random = Math.floor(Math.random() * 3)
    return options.difficulty[random]
  }

  function fetchApiRank () {
    console.log(createURL(5, category, getRandomLevel()))
    axios
      .get(createURL(5, category, getRandomLevel()))
      .then((res) => {
        setTrivia(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    console.log(trivia)
  }, [trivia])

  useEffect(() => {
    // if (mode === 'rank' && questionNum % 5 === 0 && questionNum !== 0) {
    //   fetchApiRank()
    // }

    if (questionNum === trivia.length && questionNum !== 0) {
      setStep(6)
    }
  }, [questionNum])

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
    questionNum,
    rightAnswers,
    setRightAnswers
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp () {
  return useContext(AppContext)
}
