import React from 'react'
import { useApp } from '../../context'
import { useDevice } from '../../hooks'
import { Container } from './styles'

export function Question ({ question, answers, correct }) {
  const {
    setQuestionNum,
    questionNum,
    mode,
    setRightAnswers,
    rightAnswers,
    setStep
  } = useApp()

  const {
    device: { isMobile }
  } = useDevice()

  function createMarkup (question) {
    return { __html: question }
  }

  function removeSpecialChars (str) {
    str = str.replace(/\#.*?;/g, '')
    str = str.replace(/\&.*?;/g, '')
    return str.replace(/[^a-zA-Z0-9 ]/g, '')
  }

  function verifyAnswer (event) {
    if (
      removeSpecialChars(event.target.innerText) === removeSpecialChars(correct)
    ) {
      event.target.classList.add('correct')
      setRightAnswers(rightAnswers + 1)

      setTimeout(() => {
        setQuestionNum(questionNum + 1)
      }, 1500)
    } else {
      event.target.classList.add('wrong')
      document
        .querySelectorAll('.list')[questionNum].childNodes
        .forEach((item) => {
          if (
            removeSpecialChars(item.innerText) === removeSpecialChars(correct)
          ) {
            item.classList.add('correct')
            setTimeout(() => {
              item.classList.remove('correct')
            }, 1500)
          }
        })

      setTimeout(() => {
        if (mode === 'rank') {
          setStep(6)
        } else {
          setQuestionNum(questionNum + 1)
        }
      }, 1500)
    }
  }

  return (
    <Container mobile={isMobile}>
      <h1 dangerouslySetInnerHTML={createMarkup(question)} />
      <ul className='list'>
        {answers.split('%20').sort().map((item, index) => (
          <li
            onClick={(e) => verifyAnswer(e)}
            key={index}
            dangerouslySetInnerHTML={createMarkup(item)}
          />
        ))}
      </ul>
    </Container>
  )
}
