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

  function resetRanked () {
    setQuestionNum(0)
    setRightAnswers(0)
    setTrivia([])
    setMode('rank')
    setStep(2)
  }

  function reset () {
    setQuestionNum(0)
    setRightAnswers(0)
    setMode('')
    setCategory('')
    setLevel('')
    setAmount(0)
    setStep(1)
    setTrivia([])
  }

  function fetchApiRank () {
    axios
      .get(createURL(10, category, getRandomLevel()))
      .then((res) => {
        setTrivia(...trivia, res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    console.log(trivia)
  }, [trivia])


  useEffect(() => {
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
    setRightAnswers,
    resetRanked,
    reset
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp () {
  return useContext(AppContext)
}
