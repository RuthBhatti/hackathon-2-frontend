import React from 'react';

const Question = ({trivia}) => {

    return (
        <div className="question">
            <h2>Question</h2>
            <ul>
                <li>Answer A</li>
                <li>Answer B</li>
                <li>Answer C</li>
                <li>Answer D</li>
            </ul>
        </div>
    );
}
export default Question;