import { useState, useEffect } from "react";
import "./HomePage.scss";
import Board from "../components/Board/Board";
import Question from "../components/Question/Question";
import Score from "../components/Score/Score";
import axios from "axios";
import { useParams } from "react-router-dom";

const HomePage = () => {
  
  const [score, setScore] = useState(0);
  const { questionInfo } = useParams();
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


  useEffect(() => {
    console.log('param update')
  }, [score])


  return (
    <>
      <Board trivia={trivia} ></Board>
      <Question trivia={trivia} questionInfo={questionInfo} score={score} setScore={setScore}></Question>
      <Score score={score}/>
    </>
  );
};

export default HomePage;
