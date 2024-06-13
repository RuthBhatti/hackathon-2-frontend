import { useState } from "react";
import "./Category.scss";
import { Link } from "react-router-dom";

const Category = ({ categoryData, setQuestion }) => {

    const [clicked, setClicked] = useState({});

    const clickHandler = (points) => {
        setClicked(prevState => ({
            ...prevState,
            [points]: true
        }));
    }

return (
<>
    <section className="category">
    <header className="category__name">
        <p>{categoryData.topic}</p>
    </header>
    {categoryData.questions.map((question) => {
        const isClicked = clicked[question.points] || false;
        return (
        <Link
            to={`/${categoryData.uuid}+${question.points}`}
            key={question.points}
            className='price-button__text' 
            onClick={() => clickHandler(question.points)}
        >
            <article
                className={`price-button ${isClicked ? 'price-button--clicked' : ''}`} 
                >
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
