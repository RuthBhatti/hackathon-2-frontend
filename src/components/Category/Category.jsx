import React from "react";
import "./Category.scss";
import { Link } from "react-router-dom";

const Category = ({ categoryData, setQuestion }) => {
return (
<>
    <section className="category">
    <header className="category__name">
        <p>{categoryData.topic}</p>
    </header>
    {categoryData.questions.map((question) => {
        return (
        <Link
            to={`/${categoryData.uuid}+${question.points}`}
            key={question.points}
            className="price-button__text"
        >
            <article className="price-button">
                <h2>${question.points}</h2>
            </article>
        </Link>
        );
    })}
    </section>
</>
);
};

export default Category;
