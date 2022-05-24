import React from 'react'
import { useApp } from '../../context'
import { useDevice } from '../../hooks'
import { Container } from './styles'

export function Question ({ question, answers, correct }) {
  const { setQuestionNum, questionNum, mode, setRightAnswers, rightAnswers } = useApp()
  const {
    device: { isMobile }
  } = useDevice()
  answers = answers.split('%20')
  // .sort(() => Math.random() - 0.5)

  function createMarkup (question) {
    return { __html: question }
  }

  function removeSpecialChars (str) {
    return str.replace(/[^a-zA-Z ]/g, '')
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
        setQuestionNum(questionNum + 1)
      }, 1500)
    }
  }

  return (
    <Container mobile={isMobile}>
      <h1 dangerouslySetInnerHTML={createMarkup(question)} />
      <ul className='list'>
        {answers.map((item, index) => (
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
