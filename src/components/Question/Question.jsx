import React from 'react';
import './Question.scss'

const Question = ({trivia}) => {

    return (
        <div className="question">
            <h2 className='question__header'>Question</h2>
            <p className='question__question'>What is my name?</p>
            <ul className='question__answers'>
                <li className='question__answer'>Answer A</li>
                <li className='question__answer'>Answer B</li>
                <li className='question__answer'>Answer C</li>
                <li className='question__answer'>Answer D</li>
            </ul>
        </div>
    );
}
export default Question;