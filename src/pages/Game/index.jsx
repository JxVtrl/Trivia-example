import React, { useEffect} from 'react';

import { Container } from './styles';
import { useApp } from '../../context';
import { Question } from '../../components/Question';

export function Game() {
    const { trivia, mode, questionNum } = useApp();

    return (
        <Container>
            {mode === 'rank' ? (
                <Question
                    question={trivia[questionNum].question}
                    answers={item.incorrect_answers.join('%20') + '%20' + item.correct_answer}
                    correct={trivia[questionNum].correct_answer}
                />
            ) : (
                    <>
                        {trivia && trivia.map((item, index) => (
                            <Question
                                key={index}
                                question={item.question}
                                answers={item.incorrect_answers.join('%20') + '%20' + item.correct_answer}
                                correct={item.correct_answer}
                            />
                        ))}
                </>
            )}
        </Container>
  );
}
