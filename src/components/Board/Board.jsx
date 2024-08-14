/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./Board.scss";
import Category from "../Category/Category";
import axios from "axios";

const Board = ({ trivia, setQuestion }) => {

return (
<>
    <header>
        <h1 className="header">HACK-A-PARDY</h1>
    </header>
    <div className="price-box">
    {trivia.map((categoryData) => {
        return (
        <Category categoryData={categoryData} key={categoryData.topic} setQuestion={setQuestion}/>
        );
    })}
    </div>
</>
);
};

export default Board;
