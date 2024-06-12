import React from "react";
import "./Category.scss";
import { Link } from "react-router-dom";

const Category = ({ categoryData }) => {
  return (
    <>
      <section>
        <header>{categoryData.topic}</header>
        {categoryData.questions.map((question) => {
          return (
            <Link
              to={`/${categoryData.uuid}?${question.points}`}
              key={question.points}
            >
              <article className="price-button">
                <h2>{question.points}</h2>
              </article>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Category;
