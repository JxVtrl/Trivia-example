import React from 'react';
import { useApp } from '../../context';
import { useDevice } from '../../hooks';
import { Container } from './styles';

export function Question({ question, answers, correct }) {
    const { setQuestionNum, questionNum } = useApp();
    const { device: { isMobile }} = useDevice();
    answers = answers.split('%20');
    answers.sort(() => Math.random() - 0.5);

    function createMarkup(question) {
        return { __html: question };
    }

    function verifyAnswer(event) {
        if (event.target.innerText === correct) {
            event.target.classList.add('correct');
            setTimeout(() => {
                setQuestionNum(questionNum + 1);
            }, 2200)
        } else {
            event.target.classList.add('wrong');

            document.querySelectorAll('.list')[questionNum].childNodes.forEach(item => {
                if (item.innerText === correct) {
                    item.classList.add('correct');
                    setTimeout(() => {
                        item.classList.remove('correct');
                    }, 2200)
                }
            })

            setTimeout(() => {
                setQuestionNum(questionNum + 1);
            }, 2200)
        }
    }

    return (
        <Container mobile={isMobile}>
            <h1 dangerouslySetInnerHTML={createMarkup(question)} />
            <ul className='list' >
                {answers.map((item, index) => (
                    <li
                        onClick={e => verifyAnswer(e)}
                        key={index}
                        dangerouslySetInnerHTML={createMarkup((item))}
                    />
                ))}
            </ul>
        </Container>
  );
}
