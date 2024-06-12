import React from 'react';
import './Question.scss';

const Question = ({ questionInfo, trivia }) => {

    if (!questionInfo) {
        return (
            <p></p>
        )
    }

    const currentCat = trivia.find((category) => category.uuid === questionInfo.split('+')[0]);

    const currentQ = currentCat && currentCat.questions.find((question) => question.points === questionInfo.split('+')[1])
    console.log(currentQ)

    return (
        <div className="question">
            <h2 className='question__header'>Question</h2>
            <p className='question__question'>{currentQ?.question && currentQ?.question}</p>
            <ul className='question__answers'>
                {currentQ?.options && currentQ?.options.map((answer) => {
                    return (
                        <li className='question__answer'>{answer}</li>
                    )
                })}
            </ul>
        </div>
    );
}
export default Question;