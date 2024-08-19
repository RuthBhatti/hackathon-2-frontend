/* eslint-disable react/prop-types */
import "./Board.scss";
import Category from "../Category/Category";

const Board = ({ trivia, onQuestionSelect }) => {
    return (
        <>
            <header>
                <h1 className="header">HACK-A-PARDY</h1>
            </header>
            <div className="price-box">
                {trivia.map((categoryData) => {
                    return (
                        <Category
                            categoryData={categoryData}
                            key={categoryData.topic}
                            onQuestionSelect={onQuestionSelect}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Board;