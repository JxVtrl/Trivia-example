import React from 'react';

import { Container } from './styles';
import { useApp } from '../../context';

export function Game() {
    const { trivia } = useApp();

    function createMarkup(question) {
        return { __html: question };
    }

    return (
        <Container>   
            {trivia.map((item, index) => (
                <div key={index}>
                    <h1
                        dangerouslySetInnerHTML={createMarkup(item.question)}
                    />
                    <h2
                        dangerouslySetInnerHTML={createMarkup(item.correct_answer)}
                    />
                    {item.incorrect_answers.map((item, index) => (
                        <h2
                            key={index}
                            dangerouslySetInnerHTML={createMarkup(item)}
                        />
                    ))}
                </div>
            ))}
        </Container>
  );
}
