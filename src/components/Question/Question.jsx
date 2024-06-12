// import React from 'react';
// import { useParams, useHistory } from 'react-router-dom';

// const Question = ({ categories, setScore }) => {
//     const { category, index } = useParams();
//     const history = useHistory();
//     const cat = categories.find(cat => cat.name === category);
//     const question = cat.questions[index];

//     const handleAnswer = () => {
//         setScore(prev => prev + question.value);
//         history.push(`/category/${category}`);
//     };

//     return (
//         <div className="question">
//             <h2>{question.question}</h2>
//             <button onClick={handleAnswer}>Answer</button>
//         </div>
//     );
// };

// export default Question;