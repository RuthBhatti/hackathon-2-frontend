import React from 'react';
import './Category.scss'

const Category = ({ categoryData }) => {

    return (
        <>
            <section>
                <header>{categoryData.topic}</header>
                {categoryData.questions.map(question => {
                    return (
                    <article className='price-button' key={question.points}>
                        <h2>{question.points}</h2>
                    </article>
                    )
                })}
            </section>
        </>
    )
};

export default Category;