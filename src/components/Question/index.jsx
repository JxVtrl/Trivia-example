import React from 'react';
import { useApp } from '../../context';
// import { Container } from './styles';

export function Question({ question, answers, correct }) {
    const { setQuestionNum, questionNum } = useApp();
    answers = answers.split('%20');

    function createMarkup(question) {
        return { __html: question };
    }

    return (
        <div>
            <h1 dangerouslySetInnerHTML={createMarkup(question)} />
            <div>
                <ul>
                    {answers.map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={createMarkup((item))} />
                    ))}
                </ul>
            </div>
        </div>
  );
}
