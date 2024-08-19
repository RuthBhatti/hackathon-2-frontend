import { useState } from "react";
import "./Category.scss";
import { Link } from "react-router-dom";

const Category = ({ categoryData, onQuestionSelect }) => {
    const [clicked, setClicked] = useState({});

    const clickHandler = (question) => {
        setClicked((prevState) => ({
            ...prevState,
            [question.points]: true,
        }));

        // Trigger the onQuestionSelect function to open the modal
        onQuestionSelect(question);
    };

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
                            className="price-button__text"
                            onClick={() => clickHandler(question)}
                        >
                            <article
                                className={`price-button ${isClicked ? "price-button--clicked" : ""
                                    }`}
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