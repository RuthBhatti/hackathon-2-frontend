import { useState, useEffect } from "react";
import "./HomePage.scss";
import Board from "../components/Board/Board";
import Question from "../components/Question/Question";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const HomePage = () => {
    const [trivia, setTrivia] = useState([]);

  const getTriviaData = async () => {
    try {
      const res = await axios(`http://localhost:8080/questions`);
      console.log(res.data);
      setTrivia(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTriviaData();
  }, []);
  return (
    <>
      <Board trivia={trivia}></Board>
      <Question trivia={trivia}></Question>
    </>
  );
};

export default HomePage
