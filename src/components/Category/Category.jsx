// import React from 'react';
// import { Link, useParams } from 'react-router-dom';

// const Category = ({ categories }) => {
//     const { name } = useParams();
//     const category = categories.find(cat => cat.name === name);

//     return (
//         <div className="category">
//             <h2>{category.name}</h2>
//             {category.questions.map((q, index) => (
//                 <div key={index} className="question-link">
//                     <Link to={`/question/${category.name}/${index}`}>
//                         ${q.value}
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Category;