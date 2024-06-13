import React from 'react';
import './Question.scss';
import { useNavigate } from 'react-router-dom';

const Question = ({ questionInfo, trivia, score, setScore }) => {

const navigate =useNavigate();

    if (!questionInfo) {
        return (
            <p></p>
        )
    }

    const currentCat = trivia.find((category) => category.uuid === questionInfo.split('+')[0]);

    const currentQ = currentCat && currentCat.questions.find((question) => question.points === questionInfo.split('+')[1])
    console.log(currentQ)

const clickHandler = (event) => {
    event.preventDefault()
    const answer = event.target.innerText;
    if (answer === currentQ.correctAnswer)
        {
            alert('🟢 correct answer 🟢');
            setScore(score + Number(currentQ.points))
            navigate('/');
        }
        else
        {
            alert('❌ Wrong ❌');
            navigate('/');
        }
}

    return (
        <div className="question">
            <h2 className='question__header'>Question</h2>
            <p className='question__question'>{currentQ?.question && currentQ?.question}</p>
            <ul className='question__answers'>
                {currentQ?.options && currentQ?.options.map((answer) => {
                    return (
                        <li  onClick={clickHandler} className='question__answer'>{answer}</li>
                    )
                })}
            </ul>
        </div>
    );
}
export default Question;