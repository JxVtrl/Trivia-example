import React from 'react'

import { Container } from './styles'
import { useApp } from '../../context'
import { Question } from '../../components/Question'

export function Game () {
  const { trivia } = useApp()
  return (
    <Container>
      {trivia && trivia.map((item, index) => {
        return (
        <Question
          key={index}
          question={item.question}
          answers={`${item.incorrect_answers.join('%20')}%20${item.correct_answer}`}
          correct={item.correct_answer}
        />
        )
      })}
    </Container>
  )
}
